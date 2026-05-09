const dotenv = require('dotenv');
dotenv.config();
const express = require("express");
const cors = require('cors');
const connectToDb = require('./db/db');
const app = express();

connectToDb();

app.use(cors());
// connectToDb();

app.get('/', (req, res)=>{
res.send('Hello this message from Yatrix Project');
})

module.exports = app;