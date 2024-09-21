import mongoose from 'mongoose'
import { dbName } from '@/constant'
export async  function  connectDB(){
       
        try {
               const db =await mongoose.connect(`process.env.MONGODB_URI/${dbName}`)
               const connection =mongoose.connection
              
               if(db){
                   console.log('mongoDB connected successfully')
               }
               connection.on('error',(e)=>{
                  throw new Error("error occured in DB connection") 
              })

        } catch (error:any) {
              console.log(error, `${error.message}`)
              console.log("connection with MongoDB failedL")
              process.exit(1)
        }
}