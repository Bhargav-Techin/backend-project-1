// require('dotenv').config({path: './env'});
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({ path: "./.env" });
connectDB();









// import { Express } from "express";

// const app = Express();

// (async()=>{
//     try {
//         await mongoos.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on('error',(err)=>{
//         console.error(err)
//         throw err
//     });

//     app.listen(process.env.PORT || 3000,()=>{
//             console.log(`listening on ${ process.env.PORT || 3000 }`);
//         });

//     } catch (error) {
//         console.error(error);
//     }
// })()