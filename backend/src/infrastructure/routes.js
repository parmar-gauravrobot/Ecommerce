import express from "express"

 const createRouter = () =>{
  const router = express.Router()
  userRouter(router)
  
  return router
}

export default createRouter