// import React, { useState } from "react";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify"; 
// import "react-toastify/dist/ReactToastify.css";

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     mobile: "",  // Updated here
//   });

//   const [errors, setErrors] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     mobile: "",  // Updated here
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   async function handleSubmit(e) {
//     e.preventDefault(); // Prevent form default submission behavior
  
//     let validationErrors = {};
  
//     // Validation logic for form fields...
//     if (!formData.name) validationErrors.name = "Name is required.";
//     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//     if (!formData.email) {
//       validationErrors.email = "Email is required.";
//     } else if (!emailRegex.test(formData.email)) {
//       validationErrors.email = "Please enter a valid email.";
//     }
//     if (!formData.password) {
//       validationErrors.password = "Password is required.";
//     } else if (formData.password.length < 6) {
//       validationErrors.password = "Password must be at least 6 characters.";
//     }
//     if (!formData.confirmPassword) {
//       validationErrors.confirmPassword = "Please confirm your password.";
//     } else if (formData.confirmPassword !== formData.password) {
//       validationErrors.confirmPassword = "Passwords do not match.";
//     }
//     const mobileRegex = /^[0-9]{10}$/;
//     if (!formData.mobile) {
//       validationErrors.mobile = "Mobile number is required.";
//     } else if (!mobileRegex.test(formData.mobile)) {
//       validationErrors.mobile = "Please enter a valid 10-digit mobile number.";
//     }
  
//     setErrors(validationErrors); // Set the validation errors
  
//     // If there are validation errors, stop the form submission
//     if (Object.keys(validationErrors).length !== 0) return;
  
//     // No validation errors, proceed with form submission
//     try {
//       const response = await axios.post("http://localhost:3000/create", formData);
//       console.log(response.data);
  
//       // Set local storage items if signup is successful
//       localStorage.setItem("token", response.data.token);
//       localStorage.setItem("username", response.data.username);
  
//       // Show success toast
//       toast.success("Signup successful!");
//     } catch (error) {
//       console.log(error);

//       // Enhanced error handling
//       if (error.response && error.response.status === 403) {
//         toast.error("User already exists.");
//       } else {
//         toast.error("Error while signing up.");
//       }
//     }
//   }

//   return (
//     <>
//       <section
//         id="register"
//         style={{
//           background: 'url("images/background-img.png") no-repeat center/cover',
//         }}
//               >
//         <div className="container">
//           <div className="row my-5 py-5">
//             <div className="col-md-6">
//               <img 
//                 src={"/sideImage.png"} 
//                 alt="Sign up illustration" 
//                 className="img-fluid" 
//                 style={{ maxHeight: "100%", width: "100%", objectFit: "cover" }}
//               />
//             </div>

//             {/* Form on the right */}
//             <div className="col-md-6 my-5">
//               <h2 className="display-3 fw-normal text-center">
//                 Get 20% Off on{" "}
//                 <span className="text-primary">first Purchase</span>
//               </h2>
//               <form onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                   <input
//                     type="text"
//                     className="form-control form-control-lg"
//                     name="name"
//                     id="name"
//                     placeholder="Enter Your Name"
//                     value={formData.name}
//                     onChange={handleChange}
//                   />
//                   {errors.name && (
//                     <small style={{ color: "darkred" }}>{errors.name}</small>
//                   )}
//                 </div>
//                 <div className="mb-3">
//                   <input
//                     type="email"
//                     className="form-control form-control-lg"
//                     name="email"
//                     id="email"
//                     placeholder="Enter Your Email Address"
//                     value={formData.email}
//                     onChange={handleChange}
//                   />
//                   {errors.email && (
//                     <small style={{ color: "darkred" }}>{errors.email}</small>
//                   )}
//                 </div>
//                 <div className="mb-3">
//                   <input
//                     type="password"
//                     className="form-control form-control-lg"
//                     name="password"
//                     id="password1"
//                     placeholder="Create Password"
//                     value={formData.password}
//                     onChange={handleChange}
//                   />
//                   {errors.password && (
//                     <small style={{ color: "darkred" }}>{errors.password}</small>
//                   )}
//                 </div>
//                 <div className="mb-3">
//                   <input
//                     type="password"
//                     className="form-control form-control-lg"
//                     name="confirmPassword"
//                     id="password2"
//                     placeholder="Confirm Password"
//                     value={formData.confirmPassword}
//                     onChange={handleChange}
//                   />
//                   {errors.confirmPassword && (
//                     <small style={{ color: "darkred" }}>
//                       {errors.confirmPassword}
//                     </small>
//                   )}
//                 </div>
//                 <div className="mb-3">
//                   <input
//                     type="text"
//                     className="form-control form-control-lg"
//                     name="mobile"  // Updated here
//                     id="mobile"
//                     placeholder="Enter Your Mobile Number"
//                     value={formData.mobile}
//                     onChange={handleChange}
//                   />
//                   {errors.mobile && (
//                     <small style={{ color: "darkred" }}>{errors.mobile}</small>
//                   )}
//                 </div>
//                 <div className="d-grid gap-2">
//                   <button type="submit" className="btn btn-dark btn-lg rounded-1">
//                     Register it now
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       <ToastContainer />
//     </>
//   );
// };

// export default SignUp;



import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "react-toastify/dist/ReactToastify.css"; // Import Toastify's CSS

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault(); // Prevent form default submission behavior

    let validationErrors = {};

    // Validation logic for form fields...
    if (!formData.name) validationErrors.name = "Name is required.";
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!formData.email) {
      validationErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      validationErrors.email = "Please enter a valid email.";
    }
    if (!formData.password) {
      validationErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters.";
    }
    if (!formData.confirmPassword) {
      validationErrors.confirmPassword = "Please confirm your password.";
    } else if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(validationErrors); // Set the validation errors

    // If there are validation errors, stop the form submission
    if (Object.keys(validationErrors).length !== 0) return;

    // No validation errors, proceed with form submission
    try {
      const response = await axios.post("http://localhost:3000/create", formData);
      console.log(response.data);

      // Set local storage items if signup is successful
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", response.data.username);

      // Show success toast
      toast.success("Signup successful!");

      // Navigate to the Hero page
      navigate("/hero");

      // Show modal after successful signup and navigation
      setShowModal(true);
    } catch (error) {
      console.log(error);

      // Enhanced error handling
      if (error.response && error.response.status === 403) {
        toast.error("User already exists.");
      } else {
        toast.error("Error while signing up.");
      }
    }
  }

  return (
    <>
      <section
        id="register"
        style={{
          background: 'url("images/background-img.png") no-repeat center center/cover',
        }}
      >
        <div className="container">
          <div className="row my-5 py-5">
            <div className="offset-md-3 col-md-6 my-5">
              <h2 className="display-3 fw-normal text-center">
                Get 20% Off on{" "}
                <span className="text-primary">first Purchase</span>
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    name="name"
                    id="name"
                    placeholder="Enter Your Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <small style={{ color: "darkred" }}>{errors.name}</small>
                  )}
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email Address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <small style={{ color: "darkred" }}>{errors.email}</small>
                  )}
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    name="password"
                    id="password1"
                    placeholder="Create Password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {errors.password && (
                    <small style={{ color: "darkred" }}>{errors.password}</small>
                  )}
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    name="confirmPassword"
                    id="password2"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                  {errors.confirmPassword && (
                    <small style={{ color: "darkred" }}>
                      {errors.confirmPassword}
                    </small>
                  )}
                </div>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-dark btn-lg rounded-1">
                    Register it now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ToastContainer to display the toast notifications */}
      <ToastContainer />

      {/* Modal for user greeting */}
      {showModal && (
        <div
          className="modal fade show"
          tabIndex="-1"
          id="signupModal"
          aria-labelledby="signupModalLabel"
          style={{ display: "block" }}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="signupModalLabel">
                  Welcome to Our Platform!
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setShowModal(false)} // Close modal when button is clicked
                ></button>
              </div>
              <div className="modal-body">
                <p>Congratulations, {formData.name}! You have successfully signed up.</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={() => setShowModal(false)} // Close modal when button is clicked
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;
