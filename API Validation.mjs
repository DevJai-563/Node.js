// 1. API Validation (Express-validator)
    // Jab user signup ya login form submit karta hai, toh humein ensure karna hota hai ki:
    // Username ya password empty na ho
    // Password ek minimum length ka ho
    // Galat ya malicious data enter na ho (SQL Injection, XSS attack prevention)

    // Agar hum validation na karein, toh security vulnerabilities aa sakti hain. Express-validator ek library hai jo humein validation karne mein madad karti hai.

// 2. Express-validator Kya Hai?

    // express-validator ek middleware hai jo request body ko validate karne ke liye use hota hai.
    // Yeh humein pre-built functions provide karta hai jaise:
    // ✔ isLength() → Minimum aur maximum length set karne ke liye
    // ✔ notEmpty() → Empty field check karne ke liye
    // ✔ isEmail() → Email format validate karne ke liye
    // ✔ matches(regex) → Special characters ya format check karne ke liye

// 3. Express-validator Installation

    // npm install express-validator


// 4. Express-validator (Signup API Me) Example

    // Example: Signup API mein express-validator use karne ke liye, neeche diye gaye steps follow karein:

    // 1. Import express-validator
    // 2. Import validationResult
    // 3. Define validation rules
    // 4. Use validationResult() to check errors
    // 5. If errors exist, return response with error message
    // 6. If no errors, save user data to database


    import express from 'express';
    import { check ,validationResult } from 'express-validator';

    const app = express();
    app.use(express.json());

    const users = [];

    app.use((req,res,next)=>{
        console.log(users);
        next();
        
    })

    

    const validateSignup =[
        check("username").notEmpty().withMessage("Username is required"),
        check("password").isLength({min: 6}).withMessage("Password must be at least 6 characters long"),
        check("email").notEmpty().isEmail().withMessage("Email is not valid")
    ]

    app.post('/signup',validateSignup,(req,res)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
        
        const {username,password,email} = req.body;
        users.push({username,password,email});

        res.status(201).json({message: "User created successfully"});
        
    })
   
    
    app.listen(3000,()=>{
        console.log("Server is running at http://localhost:3000");
        
    })
        