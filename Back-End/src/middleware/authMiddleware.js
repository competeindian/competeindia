const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");
const createError = require("../utils/errorHandler");

const authMiddleware = (req, res, next) => {
    // token
    // const token = req.cookies.jwt;
    const authHeader = req.headers.authorization || req.headers.Authorization;

    if (!authHeader) {
        return res
            .status(401)
            .json({ message: "Authorization header is missing" });
    }

    // Ensure the header is in the correct format (Bearer <token>)
    const parts = authHeader.split(" ");
    if (parts.length !== 2 || parts[0] !== "Bearer") {
        return res
            .status(401)
            .json({ message: "Authorization header is invalid" });
    }
    const token = parts[1];

    if (!token) return next(createError(403, "Unauthorized user"));
    // verify token
    try {
        // const decoded = jwt.verify(token, process.env.REFRESH_SECRET);
        const decoded = jwt.verify(token, process.env.ACCESS_SECRET);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        next(error);
    }
};

module.exports = authMiddleware;
