import express from "express";
import {PORT, mongoDBurl} from "./config.js";
import mongoose from "mongoose";
import {Album} from './models/albumModel.js'
import albumRoutes from "./routes/albumRoutes.js"
import cors from "cors";

const app = express();

//Middleware for parsing request body
app.use(express.json());

app.use(cors());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(269).send('Hi from Zo');
})

//Middleware
app.use('/album', albumRoutes);




mongoose.connect(mongoDBurl)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`)
        });
    })
    .catch((error) => {
        console.log(error)
    });