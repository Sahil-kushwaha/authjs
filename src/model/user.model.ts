

import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
          firstname:{
              type:String,
              required:true
            } ,

          lastname:{
              type:String,
              required:true
            }, 
          email:{
             type:String,
             requied:true,
             unique:true
          } ,
          password:{
             type: String,
             select:false 
          },
          role:{
             type :String , 
             default:"user"
          },
          image:{
             type:String
          },
    //  Google & Github providers
     authProviderId :{type:String},     

})

const User = mongoose.models?.users ||  mongoose.model('users',userSchema);

export default User;