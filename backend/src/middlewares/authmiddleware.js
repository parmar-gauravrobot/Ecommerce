// import jwt from "jsonwebtoken";
// import env from "../infrastructure/env.js";  // Ensure your env file is correctly set up

// export default function authMiddleware(req, res, next) {
//   // Check if the token is passed in the Authorization header
//   const token = req.headers.authorization;

//   console.log("Authorization Header:", req.headers.authorization);  // Log the entire authorization header

//   // If token doesn't exist, return an error response
//   if (!token) {
//     return res.status(401).json({
//       msg: "Token required",
//     });
//   }

//   try {
//     // Verify the token
//     const decoded = jwt.verify(token, env.secret_key); // No need to strip 'Bearer ' here
//     console.log("Decoded Token:", decoded);  // Log the decoded token to verify contents

//     // Attach the userId from the token to the req object for further use
//     req.userId = decoded.id;  // Use decoded.id instead of decoded.userId

//     next();  // Proceed to the next middleware or route handler
//   } catch (error) {
//     console.log("Error occurred in auth middleware:", error);
//     return res.status(401).json({
//       msg: "Invalid or expired token",
//     });
//   }
// }


import jwt from "jsonwebtoken";
import env from "../infrastructure/env.js";  // Ensure your env file is correctly set up

export default function authMiddleware(req, res, next) {
  // Check if the token is passed in the Authorization header
  const token = req.headers.authorization;

  console.log("Authorization Header:", token);  // Log the entire authorization header

  // If token doesn't exist, return an error response
  if (!token) {
    return res.status(401).json({
      msg: "Token required",
    });
  }

  // If the token contains 'Bearer', remove the 'Bearer ' prefix
  const actualToken = token.startsWith('Bearer ') ? token.slice(7) : token; // Remove 'Bearer ' if exists

  try {
    // Verify the token
    const decoded = jwt.verify(actualToken, env.secret_key);  // Use actualToken after removing the Bearer prefix
    console.log("Decoded Token:", decoded);  // Log the decoded token to verify contents

    // Attach the user object to the req object for further use
    req.user = decoded;  // Set decoded token to req.user instead of req.userId

    next();  // Proceed to the next middleware or route handler
  } catch (error) {
    console.log("Error occurred in auth middleware:", error);
    return res.status(401).json({
      msg: "Invalid or expired token",
    });
  }
}
