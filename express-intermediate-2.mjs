// Authentication (JWT, Sessions) 
    // Authentication ka matlab hai user ki identity verify karna.
    // Express.js me authentication ke do tareeke hote hain:

    // 1. Session-Based Authentication (Stateful) – User ka session server me store hota hai.
    // 2. JWT-Based Authentication (Stateless) – User ka token client-side store hota hai.

    // Modern apps me JWT (JSON Web Token) zyada use hota hai, to hum JWT se authentication implement karenge. 
    // JWT ek open standard hai, jisme data encrypted hota hai, aur client-side store hota hai.
    // JWT me user ka data encrypted hota hai, aur client-side store hota hai.
    // JWT me 3 parts hote hain: Header, Payload, Signature.
    // Header me algorithm hota hai, Payload me data hota hai, aur Signature me encrypted data hota hai.
    // JWT ko verify karne ke liye hume secret key chahiye hoti hai, jo server aur client ke beech share hoti hai. 
    // JWT verify karne ke liye hume header, payload, signature ko decode karna hota hai, aur verify karna hota hai.

    // JWT Authentication Steps:
    // 1. User login karega, aur server uska username/password verify karega.
    // 2. Server user ko JWT token dega, jo client-side store hoga.
    // 3. User jab koi request karega, to wo JWT token sath me bhejega.
    // 4. Server JWT verify karega, aur user ko response dega.
    

                    import dotenv from "dotenv";
                    dotenv.config();

                    import express  from "express";
                    import jwt  from "jsonwebtoken";
                    import bcrypt  from "bcryptjs";
                    
                    const app = express();
                    app.use(express.json());    // JSON data parse karega
                    
                    const users = [];           // Temporary users array (Database ki jagah)
                    
                    const SECRET_KEY = process.env.JWT_SECRET || "secret123"; // JWT ke liye secret key
                    
                    // Signup Route
                    app.post("/signup", async (req, res) => {
                        const { username, password } = req.query;
                    
                        // Password Hash karna
                        const hashedPassword = await bcrypt.hash(password, 10);
                        
                        // User store karna (Database ki jagah)
                        const user = { id: users.length + 1, username, password: hashedPassword };
                        users.push(user);
                    
                        res.status(201).json({ message: "User registered successfully!" });
                    });
                    
                    // Login Route
                    app.post("/login", async (req, res) => {
                        const { username, password } = req.query;
                        
                        // User find karna
                        const user = users.find(u => u.username === username);
                        if (!user) return res.status(400).json({ error: "Invalid credentials" });
                    
                        // Password check karna
                        const isMatch = await bcrypt.compare(password, user.password);
                        if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });
                    
                        // JWT Token Generate karna
                        const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: "1h" });
                    
                        res.json({ message: "Login successful!", token });
                    });
                    
                    // Protected Route (JWT Verify Middleware)
                    const verifyToken = (req, res, next) => {
                        const authHeader = req.header("Authorization");
                        console.log("Received Authorization Header:", authHeader);
                    
                        if (!authHeader) {
                            console.log("No token provided");
                            return res.status(401).json({ error: "Access denied" });
                        }
                    
                        // Token ka format check kar (Bearer TOKEN)
                        const tokenParts = authHeader.split(" ");
                        if (tokenParts.length !== 2 || tokenParts[0] !== "Bearer") {
                            console.log(" Invalid token format");
                            return res.status(400).json({ error: "Invalid token format" });
                        }
                    
                        const token = tokenParts[1];  // Actual JWT token extract karo
                        console.log("Extracted Token:", token);
                    
                        try {
                            const verified = jwt.verify(token, SECRET_KEY);
                            console.log("Token Verified:", verified);
                            req.user = verified;
                            next();
                        } catch (err) {
                            console.log("Invalid Token Error:", err.message);
                            return res.status(400).json({ error: "Invalid token" });
                        }
                    };
                    
                    // Protected Route Example
                    app.get("/dashboard", verifyToken, (req, res) => {
                        res.json({ message: `Welcome ${req.user.username}!`, user: req.user });
                    });
                    
                    app.listen(3000, () => {
                        console.log("Server running on http://localhost:3000");
                    });
                    