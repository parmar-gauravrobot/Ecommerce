import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify's CSS

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let validationErrors = {};

    // Email Validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!formData.email) {
      validationErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      validationErrors.email = "Please enter a valid email.";
    }

    // Password Validation
    if (!formData.password) {
      validationErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(validationErrors);

    // If no validation errors, proceed with form submission
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post("http://localhost:3000/login", formData);
        console.log(response.data);

        // Save token and username to localStorage
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", response.data.username);

        // Show success toast
        toast.success("Sign-in successful!");

      } catch (error) {
        console.log(error.response);
        // Show error toast based on response
        if (error.response) {
          toast.error(error.response.data.msg); // Error message from backend
        } else {
          toast.error("An error occurred while signing in. Please try again later.");
        }
      }
    }
  };

  return (
    <>
      <section
        id="signin"
        style={{
          background: 'url("images/background-img.png") no-repeat center center/cover',
        }}
      >
        <div className="container">
          <div className="row my-5 py-5">
            {/* Image on the left */}
            <div className="col-md-6">
              <img
                src="/sideImage.png" 
                alt="Sign-in Illustration"
                className="img-fluid"
                style={{ maxHeight: "100%", width: "100%", objectFit: "cover" }}
              />
            </div>

            {/* Form on the right */}
            <div className="col-md-6 my-5">
              <h2 className="display-3 fw-normal text-center">
                Welcome Back!{" "}
                <span className="text-primary">Sign In</span>
              </h2>
              <form onSubmit={handleSubmit}>
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
                  {errors.email && <small className="text-danger">{errors.email}</small>}
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    name="password"
                    id="password"
                    placeholder="Enter Your Password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {errors.password && <small className="text-danger">{errors.password}</small>}
                </div>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-dark btn-lg rounded-1">
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ToastContainer to display the toast notifications */}
      <ToastContainer />
    </>
  );
};

export default SignIn;
