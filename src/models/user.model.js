import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const userSchema=new Schema({
    name:{
        type:String,
        required:true,
        index:true,
        unique:[true,'name already taken'],
        trim:true,
        lowercase:true,
        min:[3,'name greater than 3 words'],
        max:[30,'name less than 30 words'],
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        min:[5,'password must be greater than 5 words'],
        max:[15,'password must be less than 15 words'],
    },
    age:{
        type:Number,
        required:true,
    },
    mobile:{
        type:String,
        required:true,
        min:[10,'more than 10 digit'],
        max:[15,"less than 15 digit"],
    },
    profile:{
       type:String,
    },
    role:{
        type:String,
        default:"user",
        enum:['user','admin']
    },
    reports:[
        {
            type:String,
        }
    ]
},
{
    timestamps:true,
}
);

userSchema.pre("save",async function(next){
    if(!this.isModified('password')) next();
    this.password=await bcrypt.hash(this.password,10);
    next();
})
userSchema.methods.isPasswordCorrect=async function(password){
    return await bcrypt.compare(password,this.password)
}
userSchema.methods.accessTokenGenerator=function(){
   return jwt.sign({
        _id:this._id,
        name:this.name,
        email:this.email,
        profile:this.profile,
        role:this.role,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn:process.env.ACCESS_TOKEN_EXPIRED
    }
    )
}
userSchema.methods.refreshTokenGenerator=function(){
    return jwt.sign({
         _id:this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn:process.env.REFRESH_TOKEN_EXPIRED
    }
    )
}
export const userModel=mongoose.model('User',userSchema);