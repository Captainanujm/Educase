import express from "express";
import dotenv from "dotenv"
import {connectDatabase} from "./db.js"
import User from "./UserModel.js";
import cors from "cors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

dotenv.config();
const app=express();

app.use(express.json());
app.use(cors());
const PORT=3000;
connectDatabase();

app.post("/login",async (req,res)=>{
    const {email,password}=req.body;
    if(!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    try{
        const user=await User.findOne({email});
        if(!user) return res.status(404).json({message:"User not found"});
        const isPassword=await bcrypt.compare(password,user.password);
        if(!isPassword) return res.status(404).json({message:"Invalid Credintials"});
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.status(200).json({message:"Login succesful",token})
    }catch(error){
        res.status(500).json({message:"Something went wrong",error})
    }

})
app.post("/signup",async (req,res)=>{
    try{
        const {name,email,password}=req.body;

        const alreadyUser=await User.findOne({email});
        if(alreadyUser) return res.json({message:"User already exists"});
        const hashedPassword=await bcrypt.hash(password,10);
        const newUser=new User({name:name,email:email,password:hashedPassword});
        await newUser.save();
       res.status(200).json({message:"User created Successfully"});
    }catch(error){
        res.status(500).json({message:"Something went wrong"});
    }
   
})
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; 
    if(!token) return res.status(401).json({ message: "Access Denied" });

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
         req.user = decoded; 
        next();
    }catch(error){
     res.status(403).json({ message: "Invalid Token" });
    }
};
app.get("/userinfo", verifyToken, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password"); 
        if (!user) return res.status(404).json({ message: "User not found" });

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Error"});
    }
});
app.listen(PORT,()=>{
    console.log(`Server is listening on PORT ${PORT}`);
})


