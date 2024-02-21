const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;
const cors = require('cors')
app.use(cors());

app.use(bodyParser.urlencoded({extends:false}));
app.use(bodyParser.json());
const jvt = require("jsonwebtoken")

mongoose.connect("mongodb+srv://anukul:anukulpr1me@cluster0.wesa1rc.mongodb.net/", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then( () => {
    console.log("Connected to MongoDB")
}).catch((err) => {
    console.log("error connecting to MongoDB")
})

app.listen(port, () => {
    console.log("server is running on port 3000")
})