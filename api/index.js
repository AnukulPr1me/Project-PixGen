const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken'); // Import jwt module


const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());

// Body parser middleware setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// MongoDB connection
// mongoose.connect("mongodb+srv://anukul:anukulpr1me@cluster0.wesa1rc.mongodb.net/",
mongoose.connect("mongodb://localhost:27017/",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log("Error connecting to MongoDB:", err);
});

// Start server
app.listen(port, () => {
    console.log("Server is running on port", port);
});

// Importing user and post models
const User = require("./models/user");
const Post = require("./models/post");

// Function to send verification email
const sendVerificationEmail = async (email, verificationToken) => {
    // Code to send verification email using Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "n0one4u2kill@gmail.com",
            pass: "kaygfnynugtidoxp"
        }
    });

    const mailOptions = {
        from: "PixGen",
        to: email,
        subject: 'PixGen - Verify your account',
        text: `Hi, click the link below to verify your account:\n\nhttp://localhost:3000/verify/${verificationToken}`
    };

    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.log("Error sending verification email:", error);
    }
}

// Function to generate a persistent secret key
const generateSecretKey = () => {
    // Check if the secret key is already generated
    if (!process.env.SECRET_KEY) {
        // Generate a new secret key if not already generated
        process.env.SECRET_KEY = crypto.randomBytes(32).toString("hex");
    }
    return process.env.SECRET_KEY;
};

// Secret key generation
const secretKey = generateSecretKey();

// Endpoint for user registration
app.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        
        // Creating a new user
        const newUser = new User({
            name,
            email,
            password
        });

        // Generating a verification token
        newUser.verificationToken = crypto.randomBytes(20).toString("hex");

        // Saving the new user to the database
        await newUser.save();

        // Sending verification email
        await sendVerificationEmail(newUser.email, newUser.verificationToken);

        res.status(200).json({ message: "User registered successfully" });
    } catch (error) {
        console.log("Error registering user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Endpoint for verifying user
app.get("/verify/:token", async (req, res) => {
    try {
        const { token } = req.params;
        const user = await User.findOne({ verificationToken: token });

        if (!user) {
            return res.status(400).json({ message: "Invalid verification token" });
        }

        // Mark user as verified and remove verification token
        user.verified = true;
        user.verificationToken = undefined;
        await user.save();
        res.status(200).json({ message: "User verified successfully" });
    } catch (error) {
        console.log("Error verifying user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Endpoint for user login
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        if (user.password !== password) {
            return res.status(400).json({ message: "Invalid Password" });
        }

        // Sign JWT token using the secret key
        const token = jwt.sign({ userId: user._id }, secretKey);
        res.status(200).json({ token });
    } catch (error) {
        console.log("Error logging in user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.get('/', (req, res) => {
    res.send('Welcome to PixGen!'); // Send a welcome message or render a homepage
});
app.get('/register', (req, res) => {
    res.send('GET request to /register endpoint');
});

app.get("/user/:userId", (req, res) => {
    try {
      const loggedInUserId = req.params.userId;
  
      User.find({ _id: { $ne: loggedInUserId } })
        .then((users) => {
          res.status(200).json(users);
        })
        .catch((error) => {
          console.log("Error: ", error);
          res.status(500).json("errror");
        });
    } catch (error) {
      res.status(500).json({ message: "error getting the users" });
    }
  });
