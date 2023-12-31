import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB();




















/* basic approach for connecting to MongoDB 
import express from "express";
const app = express();

( async () =>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
       app.on('error', () => {
        console.log("Error: " + JSON.stringify(error));
        throw new Error
       }
       )

       app.listen(process.env.PORT, ( ) => {
        console.log(`App is listening on port ${process.env.PORT}`)
       })
    } catch (error) {
        console.log("ERROR:",error);
        throw err
        
    }
}) () 
*/