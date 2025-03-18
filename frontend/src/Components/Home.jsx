import React from 'react'
import Hero from './Hero'
import Banner from './Banner'
import Clothing from './Clothing'
import Categories from './Categories'
import Foodies from './Foodies'
import Testinomial from './Testinomial'
import Bestselling from './Bestselling'
import SignUp from './SignUp'
import Blogs from './Blogs'
import Service from './Service'
import Insta from './Insta'
// import Profile from './Layouts/Profile'

function Home() {
  return (
    <>
    <Hero/>
    {/* <Profile/> */}
  
   {/* <Categories/> */}
    <Clothing/>
    <Foodies/>
    <Banner/>
    <Testinomial/>
    <Bestselling/>
    <SignUp/>
    <Blogs/>
    <Service/>
    <Insta/>

      
    </>
  )
}

export default Home
