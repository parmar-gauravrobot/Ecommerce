// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     username:{
//       type:String,
//       required:true
//     },
//     email: {
//       type: String,
//       required: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//     mobile: {
//       type: String,
//       // required:true
//     },
//     image: {
//       type: String, // URL or file path to the image
//       default: '',  // Set a default value in case no image is provided
//     }
//   },
//   { timestamps: true }
// );

// const User = mongoose.model("user", userSchema);
// export default User;

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
    },
    image: {
      type: String, // URL or file path to the image
      default: '',
    },
    role: {
      type: String,
      enum: ['user', 'admin'], // Can only be 'user' or 'admin'
      default: 'user', // By default, the user is a regular user
    },
  },
  { timestamps: true }
);

const User = mongoose.model('user', userSchema);
export default User;



