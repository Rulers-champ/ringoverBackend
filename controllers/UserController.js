import Users from "../models/UserModel.js";
import bcrypt from 'bcrypt'


export const registerUser = async(req,res)=>{
    
    try{
        
        const existUser=await Users.findOne({
            where :{
                email:req.body.email
            }
        })

        if (existUser)
        {
            res.status(200).json({success:false,message:'User already exist'})
        }
        else
        {
            const salt=await bcrypt.genSalt(10)
        
            var newUser={
                name:req.body.name,
                email:req.body.email,
                password:await bcrypt.hash(req.body.password,salt)
            }
    
            var createdUser=await Users.create(newUser)
            res.status(200).json({success:true,message:createdUser.name})  
        }
 
        
        
    }
    catch(error)
    {
        console.log(error)
        res.status(400).json(error)
    }
     

} 


export const loginUser=async(req,res)=>{
   
    try{
        const profile=await Users.findOne({
            where:{email:req.body.email}
        })
        
        if(profile){
            
            const isValidPsd=await bcrypt.compare(req.body.password,profile.password)
    
            if (isValidPsd){
                res.status(200).json({success:true,message:profile.name})
            }
            else
            {
                res.status(200).json({success:false,message:"Incorrect Password"})
            }
    
        }
        else
        {
            res.status(200).json({success:false,message:"Email does'nt exist"})
        }
    }
    catch(error)
    {
        console.log(error)
        res.status(400).json(error)
    }
    
     

}