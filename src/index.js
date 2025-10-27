import mongoose, { connect } from 'mongoose';
import connectDB from './db/index.js';
import dotenv from 'dotenv'

import express from 'express';
const app=express();
const PORT=process.env.PORT;

dotenv.config({
    path:'./env'

})

connectDB()