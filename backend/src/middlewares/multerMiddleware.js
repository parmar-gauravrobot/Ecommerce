
import multer from "multer";
import path from "path";
import fs from "fs";
import { s3 } from "../config/config.js"; // Assuming you have S3 configured in your db.js or another config file

// Use memory storage to temporarily store the file in memory (instead of on disk)
const storage = multer.memoryStorage();

// Initialize multer with the storage configuration
export const upload = multer({ storage: storage });

// File upload function to send the file directly to S3
export const fileUpload = async (file) => {
  const currentDate = Date.now();
  const fileExtension = path.extname(file.originalname); // Get the file extension
  const filename = file.fieldname + '-' + currentDate + fileExtension; // Generate a unique filename

  // S3 upload parameters
  const params = {
    Bucket: 'gauravblog', // Your S3 bucket name
    Key: filename, // Unique key for the file
    Body: file.buffer, // File content stored in memory
    // ContentType: file.mimetype, // Content type for the file
    // ACL: 'public-read', 
  };

  try {
    // Upload the file to S3
    const data = await s3.upload(params).promise();
    console.log('File uploaded successfully:', data.Location); // URL of the uploaded file

    // Return the filename or the file URL
    return {
      filename: filename,
      url: data.Location, // S3 file URL
    };
  } catch (err) {
    console.error('Error uploading file to S3:', err);
    throw err; // Throw the error so that it can be handled by the calling function
  }
};
