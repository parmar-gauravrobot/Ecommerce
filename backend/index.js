import express from "express"
import dbConnection from "./src/config/config.js"
import env from "./src/infrastructure/env.js"
import { getProfile, requestPasswordReset, resetPassword, SignIn, SignUp, updateProfile } from "./src/controllers/usercontroller.js"
import cors from "cors"
import authMiddleware from "./src/middlewares/authmiddleware.js"
import { addProduct, deleteProduct, getAllUsers, getOrderStats, updateProduct } from "./src/controllers/adminController.js"
import isAdmin from "./src/middlewares/admin.js"
import { addItemToCart, getCartItems, updateCartItemQuantity } from "./src/controllers/cartController.js"
import { upload } from "./src/middlewares/multerMiddleware.js"
import { getAllProducts } from "./src/controllers/productController.js"



const app= express()

app.use(express.json())

app.use(cors());

dbConnection()


app.post('/signup', upload.single('image'), SignUp)
//  app.post("/create", SignUp)
 app.post("/login",SignIn)
 app.post("/resetPassword", resetPassword)
 app.post("/requestPasswordReset", requestPasswordReset)


 app.get("/getUser", authMiddleware , getProfile)
 app.put("/updateprofile", authMiddleware, updateProfile)
 app.post("/addItemToCart", authMiddleware, addItemToCart)
 app.get("/getCartItems", authMiddleware, getCartItems),
 app.put("/updateCartItemQuantity", updateCartItemQuantity)

 
 app.post("/addProduct", authMiddleware,isAdmin, addProduct)
 app.put("/updateProduct", isAdmin, updateProduct),
 app.delete("/deleteProduct", isAdmin, deleteProduct),
 app.get("/getAllUsers", authMiddleware, isAdmin, getAllUsers),
 app.get("/getAllProducts", getAllProducts)
  //app.get("/getAllUsers", getAllUsers),

 app.get("/getOrderStatus", isAdmin, getOrderStats)



app.listen(env.port, ()=>{
  console.log("Server connected successfully")
})                           