const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        loginMethod: {
            type: String,
            required: true, // You want to make sure every user has a login type
            enum: ["google", "password", "gitHub", "facebook", "twitter"], // You can specify the allowed login types
        },
        loginId: {
            type: String,
            sparse: true, // Allows `null` or missing value for users who don't have a loginId (e.g., password users)
        },
        googleId: { type: String, sparse: true },
        gitHubId: { type: String, sparse: true },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
        },
        roles: {
            type: Object,
            default: {
                User: 1999,
            },
        },
        imageUrl: {
            type: String,
            default:
                "https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper.png",
        },
        completedExams: [
            {
                id: { type: mongoose.Schema.Types.ObjectId, ref: "Exam" },
                time: String,
                result: String,
            },
        ],
        upcomingExams: [
            {
                id: { type: mongoose.Schema.Types.ObjectId, ref: "Exam" },
                time: String,
                result: String,
            },
        ],
    },
    { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
