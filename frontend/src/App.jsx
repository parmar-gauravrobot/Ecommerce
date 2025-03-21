import React from "react";
import Layouts from "./Components/Layouts/Layouts";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Hero from "./Components/Hero";
import Home from "./Components/Home";
import Banner from "./Components/Banner";
import Bestselling from "./Components/Bestselling";
import Blogs from "./Components/Blogs";
import Categories from "./Components/Categories";
import Clothing from "./Components/Clothing";
import Foodies from "./Components/Foodies";
import Insta from "./Components/Insta";
import Service from "./Components/Service";
import SignUp from "./Components/SignUp";
import Testinomial from "./Components/Testinomial";
import Footer from "./Components/Layouts/Footer";
import SignIn from "./Components/SignIn";
import UsersList from "./Components/Admin/UsersList";
import Dashboard from "./Components/Admin/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />}></Route>
          <Route path="/Banner" element={<Banner />}></Route>
          <Route path="/Bestselling" element={<Bestselling />}></Route>
          <Route path="/Blogs" element={<Blogs />}></Route>
          <Route path="/Categories" element={<Categories />}></Route>
          <Route path="/Clothing" element={<Clothing />}></Route>
          <Route path="/Foodies" element={<Foodies />}></Route>
          <Route path="/Hero" element={<Hero />}></Route>
          <Route path="/Insta" element={<Insta />}></Route>
          <Route path="/Service" element={<Service />}></Route>
          <Route path="/Signup" element={<SignUp />}></Route>
          <Route path="/Signin" element={<SignIn />}></Route>
          <Route path="/Testinomial" element={<Testinomial />}></Route>
          <Route path="/Footer" element={<Footer />}></Route>
 
        </Route>
      </Routes>
    </>
  );
}

export default App;
