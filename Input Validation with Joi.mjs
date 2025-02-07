//Input Validation with Joi
    // Joi ek powerful validation library hai jo tumhe user input ko validate karne mein madad karta hai. 
    // Yeh apne app ko malicious data, incorrect formats, aur security vulnerabilities se bachata hai. 
    // Iska use tum form inputs, JSON payloads, ya kisi bhi tarah ke data validation ke liye kar sakte ho.

    // Key Benefits of Joi:

        // Error Handling: Joi specific errors ko catch karta hai aur custom error messages provide kar sakta hai.
        // Schema Definition: Tum easily apne validation rules ko schema ke form mein define kar sakte ho.
        // Security: Input data ko validate karke tum apne app ko malicious data se protect kar sakte ho.

//Example: Joi ka use karke, hum user input ko validate kar sakte hain. 

    // 1. Install Joi
    // 2. Import Joi
    // 3. Define validation schema
    // 4. Validate user input
    // 5. Handle errors

            import express from "express";
            import joi from  "joi";

            const app = express();
            app.use(express.json());

            const users = [];

            const UserSchema = joi.object({
                username: joi.string().min(3).max(30).required().messages({
                    'string.min': "Username must be at least 3 characters long",
                    'string.empty': "Username is required",
                    'string.max': "Username must be less than 30 characters long"
                }),
                password:joi.string().min(6).required().messages({
                    'string.min': "Password must be at least 6 characters long",
                    'string.empty': "Password is required"
                }),
                email:joi.string().email().required().messages({
                    'string.email': "Email is not valid",
                    'string.empty': "Email is required"
                })

            })

            app.post('/signup',(req,res)=>{
                const {error} = UserSchema.validate(req.body, { abortEarly: false });
                if(error){

                    const errorMessages = error.details.map(err => err.message);
                    return res.status(400).json({ errors: errorMessages });
                }
                users.push(req.body);
                res.json({message: "User registered successfully"});
                
            })
            app.listen(3000,()=>{
                console.log("Server is running at http://localhost:3000");
                
            })


            // Joi vs Express-validator

            // Express-validator:
            //     Yeh tumhe pre-built functions provide karta hai jo input data ko validate karne mein madad karte hain. Jaise check('email').isEmail(), check('password').isLength({ min: 6 }), etc.
            //     Yeh generally simpler hai aur kam complex use cases ke liye accha hai.
        
            // Joi:
            //     Joi zyada flexible aur customizable hai. Tum apne schema ko easily define kar sakte ho aur complex validations ko handle kar sakte ho.
            //     Yeh large-scale aur complex validation scenarios mein zyada helpful hai.