import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken"

export const register = async (req ,res) => {  

   const { firstName,lastName,username , email , password }=req.body;
  //hash passwords
  try {
    const hashedPassword = await bcrypt.hash(password , 10); 
       
    const newUser = await prisma.user.create({
        data: {
            firstName,
            lastName,
            username,
            email,
            password : hashedPassword,
        },
    });
    
    res.status(200).json({message: 'Success'});
  } catch (error) {
        console.log(error);
        res.status(500).json({message: 'failed'});  
  }
   
};

export const login =  async (req ,res) => {
    const {email, password} = req.body;
    console.log(req.body);
    try {

        const user = await prisma.user.findUnique({
          where: {  email : email},
        })

        if(!user) return res.status(401).json({message:"Invalid Credentials"})  ;

        const validatePassword = await bcrypt.compare(password, user.password); 

        if (!validatePassword) return res.status(401).json({message:"Invalid password"}) ;

        // generate cookies 
        const token = jwt.sign({
            id: user.id,
        }, process.env.JWT_KEY) 

        const { password :userPassword , ...userInfo} = user 
        const Age =10000 *60*60*24*7;

        res.cookie('TOKEN', token, {
            httpOnly: true,
            // secure: true
            maxAge: Age,
        }).status(200).json(userInfo) ;

    } catch (error) {
        console.log(error); 
        res.status(500).json({message: 'Invalid username or password'});    
    };

}; 

export const logout = (req ,res) => {
    res.clearCookie("TOKEN").status(200).json({message: 'Logout successfull'});
};