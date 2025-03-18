import express from "express"
import dbConnection from "./src/config/config.js"
import env from "./src/infrastructure/env.js"
import { SignIn, SignUp } from "./src/controllers/usercontroller.js"
import cors from "cors"

const app= express()

app.use(express.json())

app.use(cors());

dbConnection()



 app.post("/create", SignUp)
 app.post("/login",SignIn)

app.listen(env.port, ()=>{
  console.log("Server connected successfully")
})                           