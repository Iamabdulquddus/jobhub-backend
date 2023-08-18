const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// this method allows us to load variables form dotenv file.
dotenv.config();
mongoose.connect(process.env.MONGO_URL).then(()=> console.log('db connected')).catch((err)=>{console.log(err)});

app.get('/', (req, res) => res.send('Dev Owl'))

app.listen(process.env.PORT || 5002, () => console.log(`Example app listening on port ${process.env.PORT}!`))