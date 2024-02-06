import express from "express";
import bodyParser from "body-parser";
import constantRouter from "./routes/all.route.js"
import cors from "cors"
const app=express();

app.use(cors())
app.use(bodyParser.json({
    limit:"16mb"
}));
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    limit:"16mb",
    extended:true
}))


app.use(constantRouter);
app.get('/',(_req,res)=>{
    res.send('server is connected successfully')
})

export default app;