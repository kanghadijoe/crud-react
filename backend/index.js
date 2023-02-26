import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ProductRoute from "./routes/ProductRoute.js";
dotenv.config();    // Security 12 Factor App

const app = express();  // use expressjs

app.use(cors());    // security
app.use(express.json());
app.use(ProductRoute);

app.listen(process.env.APP_PORT, ()=>{
    console.log('Server up and running...');
});