import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';

// app config
const app = express();
const port = process.env.PORT || 4000;

// connect to MongoDB
connectDB();
connectCloudinary();

// middleware
app.use(cors());
app.use(express.json());

// api routes
app.get('/', (req, res) => {
    res.send('api running fine')
});

// listen
app.listen(port, () => console.log(`Listening on localhost:${port}`));
