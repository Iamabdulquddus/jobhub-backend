const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require("./routes/auth");


// this method allows us to load variables form dotenv file.
dotenv.config();
mongoose.connect(process.env.MONGO_URL).then(() => console.log('db connected')).catch((err) => { console.log(err)});

//! to send data in json form... this is the base url
app.use(express.json());
//! this is to define the endpoint. of authState with is register... and this is post request 
app.use("/api/", authRoute); 
//* localhost:5001/api/reqister

app.listen(process.env.PORT || 5002, () => console.log(`Example app listening on port ${process.env.PORT}!`))