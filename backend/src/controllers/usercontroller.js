import env from "../infrastructure/env.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../config/schemas/user.schema.js";
import nodemailer from 'nodemailer';
import crypto from 'crypto';

import { fileUpload } from '../middlewares/multerMiddleware.js';  // Import the fileUpload function

export const SignUp = async (req, res) => {
  const { name, email, password, mobile } = req.body;
  const file = req.file;  // Multer will attach the uploaded file here

  // Ensure required fields are provided
  if (!name || !email || !password || !mobile) {
    return res.status(400).json({ msg: 'All fields are required.' });
  }

  try {
    // Check if the user already exists by email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: 'User already exists. Please log in.' });
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Handle file upload (image upload to S3)
    let imageUrl = null;
    if (file) {
      // Upload image to S3 and get the URL
      const uploadedFile = await fileUpload(file);
      imageUrl = uploadedFile.url;  // Get the URL of the uploaded file
    }

    // Create a new user document
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      mobile,
      image: imageUrl,  // Store the image URL if uploaded
    });

    // Save the user to the database
    await newUser.save();

    // Generate a token for the user
    const token = jwt.sign(
      { userId: newUser._id, role: 'user' },
      env.secret_key,
      { expiresIn: '1h' }
    );

    // Respond with success
    res.status(201).json({
      msg: 'User signed up successfully!',
      token,
      username: newUser.name,
      role: 'user',
      redirectTo: '/user/dashboard',  // Example path for regular users
    });

  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({
      msg: 'An error occurred while signing up. Please try again later.',
    });
  }
};





// export const SignUp = async (req, res) => {
//   const { name, email, password, mobile } = req.body;  // Extract form data from request body
//   const file = req.file;  // Get the uploaded file (image)
//   const currentDate = Date.now();

//   try {
//     // Check if the user already exists by email
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ msg: 'User already exists. Please log in.' });
//     }

//     // Hash the password before saving it to the database
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Handle file upload if an image was uploaded
//     let imageUrl = null;
//     if (file) {
//       // Assuming `fileUpload` is a utility function for uploading to AWS or another service
//       const uploaded = await fileUpload(file);  // Upload image
//       imageUrl = `${env.AWS_DOMAIN}/${uploaded.filename}`;  // Construct the image URL
//     }

//     // Create new user in the database
//     const newUser = new User({
//       name,
//       email,
//       password: hashedPassword,
//       mobile,
//       imageUrl,  // Store the image URL if an image was uploaded
//       createdAt: currentDate,
//     });

//     await newUser.save();

//     // Generate a token for the user (you can include more user information if needed)
//     const token = jwt.sign(
//       { userId: newUser._id, role: 'user' },  // Example payload with user ID and role
//       env.secret_key,
//       { expiresIn: '1h' }  // Token expiration time
//     );

//     // Return response with success message, token, and other data
//     res.status(201).json({
//       msg: 'User signed up successfully!',
//       token,
//       username: newUser.name,
//       role: 'user',
//       redirectTo: '/user/dashboard',  // Example redirect path for regular users
//     });

//   } catch (error) {
//     console.error('Error occurred during signup:', error);
//     res.status(500).json({
//       msg: 'An error occurred while signing up. Please try again later.',
//     });
//   }
// };

// app.post('/signup', upload.single('image'), async (req, res) => {
//   try {
//     // Handle the request and save the image path if uploaded
//     const imagePath = req.file ? `/uploads/${req.file.filename}` : null;

//     // Handle other user data (name, email, password, etc.)
//     // Save the user along with the image path if provided
//     const newUser = new User({
//       name: req.body.name,
//       email: req.body.email,
//       password: req.body.password,
//       role: 'user',  // Default role
//       image: imagePath,  // If image exists, save the path
//       mobile: req.body.mobile,
//     });

//     // Save the new user
//     await newUser.save();
//     res.status(200).json({ msg: 'User signed up successfully!' });
//   } catch (error) {
//     res.status(500).json({ msg: 'Error signing up user' });
//   }
// });

// export const SignUp = async (req, res) => {
//   const body = req.body;
//   try {
//     // Check if the user already exists based on the email
//     const existingUser = await User.findOne({ email: body.email });

//     if (existingUser) {
//       return res.status(403).json({
//         msg: "User already exists",
//       });
//     }

//     // Hash the user's password before saving
//     const hashedPassword = await bcrypt.hash(body.password, env.salt);

//     // Create a new user with default role as "user"
//     const response = await User.create({
//       name: body.name,
//       username: body.username,
//       email: body.email,
//       password: hashedPassword,
//       mobile: body.mobile,  
//       image: body.image,
//       role: 'user',  // Role is automatically set to "user"
//     });

//     console.log(response);

//     // Generate a JWT token for the user, including their role in the payload
//     const token = jwt.sign(
//       { id: response._id, username: response.name, role: response.role }, // Include the role in the token
//       env.secret_key, // Secret key for signing the JWT
//       { expiresIn: '1h' } // Optional: Expiry for the token
//     );

//     // Return the token and user info in the response
//     res.json({
//       token: token,
//       username: response.name,
//       role: response.role, // Optionally, return the user's role
//     });
//   } catch (error) {
//     console.log("Error occurred while creating a user:", error);
//     return res.status(500).json({
//       msg: "Error while signing up",
//     });
//   }
// };

// export const SignIn = async (req, res) => {
//   const body = req.body;
//   try {
//     // Check if the user exists
//     const checkUser = await User.findOne({ email: body.email });
    
//     // User doesn't exist
//     if (!checkUser) {
//       return res.status(404).json({
//         msg: "User does not exist. Please sign up first!",
//       });
//     }
    
//     // Check if the password is correct
//     const comparePass = await bcrypt.compare(body.password, checkUser.password);
    
//     // Wrong password
//     if (!comparePass) {
//       return res.status(403).json({
//         msg: "Incorrect password. Please try again.",
//       });
//     }
    
//     // Generate token and send response
//     const token = jwt.sign({ userId: checkUser._id }, env.secret_key, { expiresIn: '1h' });
//     console.log("Generated Token:", token); 
    
//     // Send success response with token and username
//     return res.status(200).json({
//       msg: "User signed in successfully!",
//       token: token,
//       username: checkUser.username,
//     });
//   } catch (error) {
//     console.error("Error occurred during sign in:", error);
//     return res.status(500).json({
//       msg: "An error occurred while signing in. Please try again later.",
//     });
//   }
// };

export const SignIn = async (req, res) => {
  const body = req.body;
  try {
    // Check if the user exists
    const checkUser = await User.findOne({ email: body.email });
    
    // User doesn't exist
    if (!checkUser) {
      return res.status(404).json({
        msg: "User does not exist. Please sign up first!",
      });
    }
    
    // Check if the password is correct
    const comparePass = await bcrypt.compare(body.password, checkUser.password);
    
    // Wrong password
    if (!comparePass) {
      return res.status(403).json({
        msg: "Incorrect password. Please try again.",
      });
    }
    
    // Generate token with the user's role included
    const token = jwt.sign(
      { userId: checkUser._id, role: checkUser.role },  // Include role in token
      env.secret_key,
      { expiresIn: '1h' }
    );
    console.log("Generated Token:", token);

    // Send success response with token, username, and role
    return res.status(200).json({
      msg: "User signed in successfully!",
      token: token,
      username: checkUser.username,
      role: checkUser.role,  // Send the user's role to the frontend
      redirectTo: checkUser.role === 'admin' ? '/admin/dashboard' : '/user/dashboard',  // Set redirection path based on the role
    });
  } catch (error) {
    console.error("Error occurred during sign in:", error);
    return res.status(500).json({
      msg: "An error occurred while signing in. Please try again later.",
    });
  }
};


export const getProfile = async (req, res) => {
  try {
    // Get the userId from the request object, set by the auth middleware
    const userId = req.userId;

    console.log("UserId from JWT token:", userId);  // Debugging log

    // Fetch user details from database excluding password field
    const user = await User.findById(userId).select('-password');  // Make sure the `User` model is properly imported

    // If user is not found
    if (!user) {
      return res.status(404).json({
        msg: "User not found",
      });
    }

    // Return the user profile data
    return res.status(200).json({
      msg: "User profile fetched successfully!",
      name: user.name,
      username: user.username,  // Including username for completeness
      email: user.email,
      mobile: user.mobile,
      image: user.image,  // Image URL if provided
    });
  } catch (error) {
    console.error("Error occurred while fetching the profile:", error);
    return res.status(500).json({
      msg: "An error occurred while fetching your profile. Please try again later.",
    });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const userId = req.userId;  // Getting the userId from the JWT token
    const { username, image } = req.body;  // Destructure the fields from the request body

    // Validate that either username or image is provided in the request
    if (!username && !image) {
      return res.status(400).json({
        msg: "You must provide either a new username or image.",
      });
    }

    // Find the user by their ID and update only the username and image
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        msg: "User not found.",
      });
    }

    // Update the fields only if they are provided
    if (username) {
      user.username = username;
    }

    if (image) {
      user.image = image;
    }

    // Save the updated user
    await user.save();

    return res.status(200).json({
      msg: "User profile updated successfully!",
      username: user.username,
      image: user.image,
    });
  } catch (error) {
    console.error("Error updating profile:", error);
    return res.status(500).json({
      msg: "An error occurred while updating the profile.",
    });
  }
};

export const requestPasswordReset = async (req, res) => {
  const { email } = req.body;

  // Check if email is undefined or empty
  if (!email) {
    return res.status(400).json({ msg: "Email is required" });
  }

  // Log the received email for debugging purposes
  console.log('Received email:', email);

  try {
    // Sanitize the email by trimming extra spaces and ensuring it's in the correct format
    const trimmedEmail = email.trim();

    // Log the trimmed email
    console.log('Trimmed email:', trimmedEmail);

    // Check if the user exists (case-insensitive search)
    const user = await User.findOne({ email: new RegExp('^' + trimmedEmail + '$', 'i') });

    // Log the result of the query for debugging
    console.log('Found user:', user);

    // If user not found, send error response
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    // Generate a password reset token
    const resetToken = crypto.randomBytes(32).toString('hex');
    const resetTokenExpiry = Date.now() + 3600000; // 1 hour expiry time

    // Save token and expiry time in the user's document
    user.resetToken = resetToken;
    user.resetTokenExpiry = resetTokenExpiry;
    await user.save();

    // Setup Nodemailer (Ensure you configure this with your own email service)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'your-email@gmail.com', // Replace with your email
        pass: 'your-email-password',  // Replace with your email password (use environment variables for security)
      },
    });

    // Send reset link email
    const resetLink = `${env.FRONTEND_URL}/reset-password?token=${resetToken}`;
    await transporter.sendMail({
      to: user.email,
      subject: 'Password Reset Request',
      text: `Click the following link to reset your password: ${resetLink}`,
    });

    return res.status(200).json({
      msg: "Password reset link sent to your email",
    });

  } catch (error) {
    console.error("Error in password reset request:", error);
    return res.status(500).json({
      msg: "Error sending password reset link",
    });
  }
};

export const resetPassword = async (req, res) => {
  const { resetToken, newPassword } = req.body;
  
  try {
    // Find the user with the reset token
    const user = await User.findOne({ resetToken });
    
    if (!user) {
      return res.status(400).json({ msg: "Invalid or expired reset token" });
    }
    
    // Check if the reset token is expired
    if (Date.now() > user.resetTokenExpiry) {
      return res.status(400).json({ msg: "Reset token has expired" });
    }
    
    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, env.salt);
    
    // Update the user's password
    user.password = hashedPassword;
    user.resetToken = undefined; // Clear the reset token after use
    user.resetTokenExpiry = undefined; // Clear the token expiry time
    await user.save();
    
    return res.status(200).json({
      msg: "Password reset successfully",
    });
    
  } catch (error) {
    console.error("Error in resetting password:", error);
    return res.status(500).json({
      msg: "Error resetting password",
    });
  }
};
