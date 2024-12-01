const { OAuth2Client } = require("google-auth-library");
const User = require("../models/user");
const bcryptjs = require("bcryptjs");
const createError = require("../utils/errorHandler");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const userInfoFilter = require("../utils/userInfoFilter");
dotenv.config();

// Your Google OAuth 2.0 credentials
const CLIENT_ID = process.env.CLIENT_ID;
const client = new OAuth2Client(CLIENT_ID);

const googleAuthController = async (req, res, next) => {
    const { idToken } = req.body; // Assuming the frontend sends the id_token in the request body

    if (!idToken) {
        return res.status(400).json({ error: "idToken is required" });
    }

    try {
        // Verify the ID token with Google's OAuth2 client
        const ticket = await client.verifyIdToken({
            idToken: idToken,
            audience: CLIENT_ID, // The client ID of your app
        });

        const payload = ticket.getPayload(); // Contains user info
        const userId = payload["sub"]; // Unique Google user ID

        const userInDb = await User.findOne({ email: payload["email"] }).select(
            "-password"
        );

        // Here, you can create or find a user in your database
        // Example: createUser(payload)
        let newUser;
        if (!userInDb) {
            const hashPass = bcryptjs.hashSync("google-login", 10);

            newUser = await User.create({
                username: payload["name"],
                email: payload["email"],
                imageUrl: payload["picture"],
                password: hashPass,
                googleId: payload["sub"],
                loginMethod: "google",
            });

            const { password, ...rest } = newUser._doc;
            newUser = rest;
        }
        // Create JWT token for the authenticated user
        const accessToken = jwt.sign(
            { userId: userId },
            process.env.ACCESS_SECRET, // Use your secret key here
            { expiresIn: "15m" } // Set token expiration time
        );

        // Send response with user info
        res.status(200).json({
            message: "Authentication successful",
            token: accessToken,
            userInfo: userInDb || newUser,
        });
        // const accessToken = jwt.sign({ userId }, process.env.ACCESS_SECRET, {
        //     expiresIn: "15m",
        // });
        // const refreshToken = jwt.sign({ userId }, process.env.REFRESH_SECRET, {
        //     expiresIn: "30d",
        // });

        // res.cookie("jwt", refreshToken, {
        //     httpOnly: true,
        //     sameSite: "none",
        //     secure: true,
        //     maxAge: 30 * 24 * 60 * 60 * 1000,
        // })
        //     .status(200)
        //     .json({
        //         success: true,
        //         message: "Authentication Successful",
        //         token: accessToken,
        //         userInfo: userInDb || newUser,
        //     });
    } catch (error) {
        res.status(400).json({ error: error });
    }
};
module.exports = googleAuthController;
