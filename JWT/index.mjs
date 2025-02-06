import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs"; // Fixed typo (bycrypt to bcrypt)

const app = express();
app.use(express.json());

const SECRET_KEY = "haikchScrt"
const users = [] 

// Sign Up Route
app.post("/signup", async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "username and password required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword });
    res.json({ message: "user created" });
});

// Login Route
app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);

    if (!user) {
        return res.status(400).json({ message: "user not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    console.log("Entered Password:", password);
    console.log("Stored Hash:", user.password);
    console.log("Match Status:", isMatch);

    if (!isMatch) {
        return res.status(400).json({ message: "invalid credentials" });
    }

    const token = jwt.sign({ username }, SECRET_KEY);
    res.json({ token });
});

// Authorization Middleware
const authMiddleware = (req, res, next) => {
    const token = req.headers["authorization"];

    if (!token || !token.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Access Denied! No token provided or invalid token format." });
    }

    const actualToken = token.split(" ")[1]; // Bearer token ke baad ka part

    try {
        const decoded = jwt.verify(actualToken, SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(403).json({ message: "Invalid Token!" });
    }
};

// Protected Route
app.get("/dashboard", authMiddleware, (req, res) => {
    res.send(`Welcome, ${req.user.username}! You are authorized.`);
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
