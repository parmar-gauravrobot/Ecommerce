import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

function Header() {
  const navigate = useNavigate();

  const handleCategoryChange = (event) => {
    const value = event.target.value;
    if (value) {
      navigate(value); // Navigate to the selected category
    }
  };

  const [userProfile, setUserProfile] = useState(null); // Add this line to manage profile state

  const handleProfileClick = async () => {
    try {
      // Get the token from localStorage or your authentication mechanism
      const token = localStorage.getItem("authToken");

      if (!token) {
        console.error("No authentication token found");
        return; // Or show a message prompting the user to log in
      }

      const response = await fetch("http://localhost:3000/getUser", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Send the token in the header
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch profile data");
      }

      const data = await response.json();
      console.log("Profile data:", data);
      // You can update the state with the profile data or use it in the UI
      // For example, storing user data in the state:
      setUserProfile(data); // Assuming `setUserProfile` is a state setter for the user data
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };
  

  const [showCart, setShowCart] = useState(false); // Modal state for showing cart

  // Function to open the cart modal
  const openCart = () => {
    setShowCart(true);
  };

  // Function to close the cart modal
  const closeCart = () => {
    setShowCart(false);
  };

  const mail = import.meta.env.VITE_MAIL;
  const phone = import.meta.env.VITE_PHONE;

  return (
    <>
      <header>
        <div className="container py-2">
          <div className="row py-4 pb-0 pb-sm-4 align-items-center ">
            <div className="col-sm-4 col-lg-3 text-center text-sm-start">
              <div className="main-logo">
                <Link to={"/"}>
                  <img src="images/logo.png" alt="logo" className="img-fluid" />
                </Link>
              </div>
            </div>
            <div className="col-sm-6 offset-sm-2 offset-md-0 col-lg-5 d-none d-lg-block">
              <div className="search-bar border rounded-2 px-3 border-dark-subtle">
                <form
                  id="search-form"
                  className="text-center d-flex align-items-center"
                  action=""
                  method=""
                >
                  <input
                    type="text"
                    className="form-control border-0 bg-transparent"
                    placeholder="Search for more than 10,000 products"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"
                    />
                  </svg>
                </form>
              </div>
            </div>
            <div className="col-sm-8 col-lg-4 d-flex justify-content-end gap-5 align-items-center mt-4 mt-sm-0 justify-content-center justify-content-sm-end">
              <div className="support-box text-end d-none d-xl-block">
                <span className="fs-6 secondary-font text-muted">Phone</span>
                <h5 className="mb-0">
                  <a href={`tel:${phone}`}>+980-34984089</a>
                </h5>
              </div>
              <div className="support-box text-end d-none d-xl-block">
                <span className="fs-6 secondary-font text-muted">Email</span>
                <h5 className="mb-0">
                  {" "}
                  <a href={`mailto:${mail}`}>waggy@gmail.com</a>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <hr className="m-0" />
        </div>
        <div className="container">
          <nav className="main-menu d-flex navbar navbar-expand-lg ">
            <div className="d-flex d-lg-none align-items-end mt-3">
              <ul className="d-flex justify-content-end list-unstyled m-0">
                <li>
                  <a href="account.html" className="mx-3">
                    <iconify-icon icon="healthicons:person" className="fs-4" />
                  </a>
                </li>
                <li>
                  <a href="wishlist.html" className="mx-3">
                    <iconify-icon icon="mdi:heart" className="fs-4" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="mx-3"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasCart"
                    aria-controls="offcanvasCart"
                  >
                    <iconify-icon
                      icon="mdi:cart"
                      className="fs-4 position-relative"
                    />
                    <span className="position-absolute translate-middle badge rounded-circle bg-primary pt-2">
                      03
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="mx-3"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasSearch"
                    aria-controls="offcanvasSearch"
                  >
                    <iconify-icon icon="tabler:search" className="fs-4" />
                  </a>
                </li>
              </ul>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabIndex={-1}
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header justify-content-center">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
              <div className="offcanvas-body justify-content-between">
                <select
                  className="filter-categories border-0 mb-0 me-5"
                  onChange={handleCategoryChange}
                >
                  <option value="">Shop by Category</option>
                  <option value="/Clothing">Clothes</option>
                  <option value="/Foodies">Food</option>
                  <option value="/BestSelling">BestSelling</option>
                </select>
                <ul className="navbar-nav menu-list list-unstyled d-flex gap-md-3 mb-0">
                  <li className="nav-item">
                    <Link to={"/"} className="nav-link active">
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to={"/Clothing"} className="nav-link">
                      Shop
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/Blogs"}>
                      Blog
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/Footer"} className="nav-link">
                      Contact
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a href="index.html" className="nav-link">
                      AboutUs
                    </a>
                  </li>
                </ul>
                <div className="d-none d-lg-flex align-items-end">
                  <ul className="d-flex justify-content-end list-unstyled m-0">
                    <li>
                      <Link
                        // to={"/SignUp"}
                        className="mx-3"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasProfile"
                        aria-controls="offcanvasProfile"
                        onClick={handleProfileClick}
                      >
                        <iconify-icon
                          icon="healthicons:person"
                          className="fs-4"
                        />
                      </Link>
                    </li>
                    <li>
                      <a
                        href="index.html"
                        className="mx-3"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasFavorites"
                        aria-controls="offcanvasFavorites"
                      >
                        <iconify-icon icon="mdi:heart" className="fs-4" />
                        {/* You can add a badge here, like for cart */}
                        {/* <span className="position-absolute translate-middle badge rounded-circle bg-primary pt-2">
      03
    </span> */}
                      </a>
                    </li>

                    <li className="">
                      <a
                        href="index.html"
                        className="mx-3"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasCart"
                        aria-controls="offcanvasCart"
                      >
                        <iconify-icon
                          icon="mdi:cart"
                          className="fs-4 position-relative"
                        />
                        <span className="position-absolute translate-middle badge rounded-circle bg-primary pt-2">
                          03
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* cart */}
      <>
        <div
          className="offcanvas offcanvas-end"
          data-bs-scroll="true"
          tabIndex={-1}
          id="offcanvasCart"
          aria-labelledby="My Cart"
        >
          <div className="offcanvas-header justify-content-center">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body">
            <div className="order-md-last">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-primary">Your cart</span>
                <span className="badge bg-primary rounded-circle pt-2">3</span>
              </h4>
              <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 className="my-0">Grey Hoodie</h6>
                    <small className="text-body-secondary">
                      Brief description
                    </small>
                  </div>
                  <span className="text-body-secondary">$12</span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 className="my-0">Dog Food</h6>
                    <small className="text-body-secondary">
                      Brief description
                    </small>
                  </div>
                  <span className="text-body-secondary">$8</span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 className="my-0">Soft Toy</h6>
                    <small className="text-body-secondary">
                      Brief description
                    </small>
                  </div>
                  <span className="text-body-secondary">$5</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span className="fw-bold">Total (USD)</span>
                  <strong>$20</strong>
                </li>
              </ul>
              <button className="w-100 btn btn-primary btn-lg" type="submit">
                Continue to checkout
              </button>
            </div>
          </div>
        </div>
        <div
          className="offcanvas offcanvas-end"
          data-bs-scroll="true"
          tabIndex={-1}
          id="offcanvasSearch"
          aria-labelledby="Search"
        >
          <div className="offcanvas-header justify-content-center">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body">
            <div className="order-md-last">
              <h4 className="text-primary text-uppercase mb-3">Search</h4>
              <div className="search-bar border rounded-2 border-dark-subtle">
                <form
                  id="search-form"
                  className="text-center d-flex align-items-center"
                  action=""
                  method=""
                >
                  <input
                    type="text"
                    className="form-control border-0 bg-transparent"
                    placeholder="Search Here"
                  />
                  <iconify-icon icon="tabler:search" className="fs-4 me-3" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </>

      {/* favourites */}
      <div
        className="offcanvas offcanvas-end"
        data-bs-scroll="true"
        tabIndex={-1}
        id="offcanvasFavorites"
        aria-labelledby="Favorites"
      >
        <div className="offcanvas-header justify-content-center">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <div className="order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Your Favorites</span>
            </h4>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Grey Hoodie</h6>
                  <small className="text-body-secondary">
                    Brief description
                  </small>
                </div>
                <span className="text-body-secondary">$12</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Dog Food</h6>
                  <small className="text-body-secondary">
                    Brief description
                  </small>
                </div>
                <span className="text-body-secondary">$8</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Soft Toy</h6>
                  <small className="text-body-secondary">
                    Brief description
                  </small>
                </div>
                <span className="text-body-secondary">$5</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span className="fw-bold">Total (USD)</span>
                <strong>$25</strong>
              </li>
            </ul>
            <div className="d-grid gap-2">
              <button className="w-100 btn btn-primary btn-lg" type="button">
                Continue to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* my profile */}
      <div
        className="offcanvas offcanvas-end"
        data-bs-scroll="true"
        tabIndex={-1}
        id="offcanvasProfile"
        aria-labelledby="My Profile"
      >
        <div className="offcanvas-header justify-content-center">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <div className="order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">My Profile</span>
            </h4>

            {/* Profile Image Section */}
            <div className="text-center mb-4">
              {/* Display profile image in a circle */}
              <img
                src="/images/item1.jpg" // Replace with the actual profile image URL
                alt="Profile Image"
                className="rounded-circle"
                width="120"
                height="120"
              />
            </div>

            {/* Profile Information Section */}
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Username</h6>
                  <small className="text-body-secondary">
                    Your unique username
                  </small>
                </div>
                <span className="text-body-secondary">
                  {userProfile ? userProfile.username : "Loading..."}
                </span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Email</h6>
                  <small className="text-body-secondary">
                    Your registered email
                  </small>
                </div>
                <span className="text-body-secondary">
                  {userProfile ? userProfile.email : "Loading..."}
                </span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Phone Number</h6>
                  <small className="text-body-secondary">
                    Your contact number
                  </small>
                </div>
                <span className="text-body-secondary">
                  {userProfile ? userProfile.phoneNumber : "Loading..."}
                </span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Recent Activity</h6>
                  <small className="text-body-secondary">Last login</small>
                </div>
                <span className="text-body-secondary">
                  {userProfile ? userProfile.lastLogin : "Loading..."}
                </span>
              </li>
            </ul>

            {/* Action Buttons */}
            <div className="d-grid gap-2">
              <button className="w-100 btn btn-primary btn-lg" type="button">
                Edit Profile
              </button>
              <button
                className="w-100 btn btn-outline-danger btn-lg"
                type="button"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
