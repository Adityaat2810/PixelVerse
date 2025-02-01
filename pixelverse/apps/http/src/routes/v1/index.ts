import { Router } from "express";
import { userRouter } from "./user";
import { adminRouter } from "./admin";
import { spaceRouter } from "./space";
export const router = Router();

router.post('/signup',(req,res)=>{
  res.json({
    message:"signup"
  })

})

router.post('/signin',(req,res)=>{
  res.json({
    message:"signin"
  })
})

router.get('/elements',(req,res)=>{

})

router.get('/avatar',(req,res)=>{

})

router.use('/user',userRouter)
router.use('/space',spaceRouter)
router.use('/admin',adminRouter)
