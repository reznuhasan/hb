import dotenv from 'dotenv'
import app from './app.js';
import connectDB from './db/Mongo.js';
dotenv.config({
    path:'./env'
});
const port=process.env.PORT || 5000;
connectDB()
.then(()=>{
    app.listen(port,()=>{
        console.log(`server is running successfully at http://localhost:${port}`);
     })
})
.catch((error)=>{
    console.log('MongoDB connection Failed',error)
})