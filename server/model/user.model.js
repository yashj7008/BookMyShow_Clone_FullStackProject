import { Schema, model } from "mongoose"
import jwt from 'jsonwebtoken'

const UserSchema = new Schema({
       fullName : {
           type :String,
           required : [true , "Name is required!"],
           minLength : [3,"Minimum 3 characters required !"],
           maxLength : [20,"Maximum 20 characters required !"],
           trim : true ,
           lowercase : true,
       },
       email: {
            type: String,
            required: [true, "Email is required!"],
            unique: true,
            trim: true,
            lowercase: true,
            match: [
             /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
             "Please fill a valid email address!",
            ],
        },
      
       password : {
            type : String , 
            required : [true , "Password is required !"],
            minLength : [8, "Minimum 8 character required !"],
           // maxLength : [15, "Maximum 15 character required !"],
            select : false
            
       },
       role :{
           type : String,
           enum : ["USER", "ADMIN"],
           default : 'USER',

       },



},{
      timestamps : true

});

UserSchema.methods = {
    generateJWTToken: function() {
        return jwt.sign(
            { id: this._id },
            process.env.JWT_PASSWORD,
            {
                expiresIn: process.env.JWT_EXPIRY
            }
        )
    }
}
const User = model('User',UserSchema);

export default User;