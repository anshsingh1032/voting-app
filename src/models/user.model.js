import mongoose , {Schema} from "mongoose";

const userSchema = new Schema(
    {
        name:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            required:true
        },
        email:{
            type:String,
        },
        mobile:{
            type:String
        },
        address:{
            type:String,
            required:true,
        },
        aadhaarCardNumber:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true,
        },
        role:{
            type:String,
            enum:['voter','admin'],
            default:'voter'
        },
        isVoted:{
            type:Boolean,
            default:false
        }
    }
,{timestamps:true})

export const User = mongoose.model("User",userSchema)