import jwt from 'jsonwebtoken'
import { JWT_PASSWORD } from '../config';
import { NextFunction, Request, Response } from 'express';

export const adminMiddleware =(
  req:Request,res:Response,next:NextFunction
)=>{
  const header = req.headers.authorization  // Bearer token
  const token = header?.split(' ')[1];

  if(!token){
    res.status(403).json({
      message:"Unauthorized"
    })
    return ;
  }

  try{
    const decoded = jwt.verify(token,JWT_PASSWORD) as {
      role:string , userId:string
    }
    req.userId = decoded.userId
    if(decoded.role!="Admin"){
      res.status(403).json({
        message: "Forbidden: Admin access required"
      });
      return;
    }
    next()
  }catch(error){
    res.status(403).json({
      "message":"Unauthorized"
    })
    return
  }
}