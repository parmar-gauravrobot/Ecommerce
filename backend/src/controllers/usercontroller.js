import env from "../infrastructure/env.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import user from "../config/schemas/user.schema.js";

// export const SignUp = async (req, res) => {
//   const body = req.body;
//   try {
//     const users = await user.findOne({ email: body.email });

//     if (users || users !== null) {
//       return res.status(403).json({
//         msg: "user already exists",
//       });
//     }
//     const hashedpassword = await bcrypt.hash(body.password, env.salt);
//     const response = await user.create({
//       name: body.name,
//       email: body.email,
//       password: hashedpassword,
//       mobile: body.mobile,
//     });
//     console.log(response);
//     const token = jwt.sign(response._id.toHexString(), env.secret_key);
//     res.json({
//       token: token,
//       username: response.username,
//     });
//   } catch (error) {
//     console.log("error occured while creating a user", error);
//     return res.status(401).json({
//       msg: "error while signing up",
//     });
//   }
// };

export const SignUp = async (req, res) => {
  const body = req.body;
  try {
    const users = await user.findOne({ email: body.email });

    if (users) {  // Check if user already exists
      return res.status(403).json({
        msg: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(body.password, env.salt);
    const response = await user.create({
      name: body.name,
      email: body.email,
      password: hashedPassword,
      mobile: body.mobileNumber,  // Ensure that the mobile field is consistent
    });

    console.log(response);

    const token = jwt.sign(
      { id: response._id, username: response.name },
      env.secret_key,
      { expiresIn: "1h" } // Optional: You can add expiration for the token
    );

    res.json({
      token: token,
      username: response.name,  // Make sure you're returning the correct field
    });
  } catch (error) {
    console.log("Error occurred while creating a user:", error);
    return res.status(500).json({
      msg: "Error while signing up",
    });
  }
};


// export const SignIn = async (req,res)=>{
//   const body = req.body
//   try {
//     const checkUser = await user.findOne({email:body.email})
//     if(!checkUser || checkUser===null){
//       return res.status(403).json({
//         msg:"user does not exist. Please signUp first!"
//       })
//     }
//     const comparePass = await bcrypt.compare(body.password,checkUser.password)
//     if(!comparePass || comparePass===null){
//       return res.status(403).json({
//         msg:"You entered wrong Password"
//       })
//     }

    

//     const token =  jwt.sign(checkUser._id.toHexString(),env.secret_key)
//     res.send({
//       msg:"User signIn successfully",
//       token:token,
//       username: checkUser.username
//     })
    
//   } catch (error) {
//     console.log("errorr while signIn", error)
//     res.status(401).json({
//       msg:"error occured while singin"
//     })
    
//   }
// }

export const SignIn = async (req, res) => {
  const body = req.body;
  try {
    // Check if the user exists
    const checkUser = await user.findOne({ email: body.email });
    
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
    
    // Generate token and send response
    const token = jwt.sign({ userId: checkUser._id }, env.secret_key, { expiresIn: '1h' });
    
    // Send success response with token and username
    return res.status(200).json({
      msg: "User signed in successfully!",
      token: token,
      username: checkUser.username,
    });
  } catch (error) {
    console.error("Error occurred during sign in:", error);
    return res.status(500).json({
      msg: "An error occurred while signing in. Please try again later.",
    });
  }
};
