//1. In-Built Middleware (express.json())   //middleware are used in authentication, logging, error handling, validation aur security ke liye .
    // Agar POST request me JSON data bhejna chahta ho to express.json() middleware lagana zaroori hai.
        import express from "express";
        const app = express();
        
        app.use(express.json());
        
        app.post("/data", (req, res) => {
            console.log(req.body);  // JSON data ko print karega
            res.send("Data received!");
        });

        app.listen(3000,()=>{
            console.log("Server is running on port 3000");
        })

//2. Custom Middleware
        // import express from "express";
        // const app = express();

        // const custMiddleware = (req, res, next) => {
        //     console.log(new Date().toISOString(),":- Hello from Custom middleware!");
        //     next();
        // }

        // app.use(custMiddleware);

        // app.get("/",(req,res)=>{
        //     res.send("Hello World");
        // })
        // app.get("/bye",(req,res)=>{
        //     res.send("bye World");
        // })

        // app.listen(3000,()=>{
        //     console.log("Server is running on port 3000");  
        // });

//3. Multiple Middleware
        // import express from "express" ;
        // const app = express();
        // const port = 3000;

        // // Middleware 1 - Request Logger
        // const requestLogger = (req, res, next) => {
        //     console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
        //     next();
        // };

        // // Middleware 2 - Simple Auth
        // const simpleAuth = (req, res, next) => {
        //     if (req.query.token === "12345") {
        //         next(); // Token sahi hai, agle middleware pe jao
        //     } else {
        //         res.status(401).send("Unauthorized");
        //     }
        // };

        // // Middleware use karna
        // app.use(requestLogger);
        // app.use(simpleAuth);

        // app.get("/", (req, res) => {
        //     res.send("Welcome! You are authenticated.");
        // });

        // app.listen(port, () => {
        //     console.log(`Server running on http://localhost:${port}`);
        // });


//4. CRUD Operations (Without Database)      
// Dummy Data Store
    //Abhi ke liye ek simple array ka use karenge jisme user data store hoga.
        // import express from "express";
        // const app = express();
        // const port = 3000;

        // app.use(express.json());

        // let users = [
        //     { id: 1, name: "Sonu", email: "sonu@example.com" },
        //     { id: 2, name: "monu", email: "monu@example.com" }
        // ];

        // app.get("/users", (req, res) => {
        //     res.json(users);
        // });                                                  //to read all users

        
        // app.get("/users/:id", (req, res) => {
        //     const user = users.find(u => u.id === parseInt(req.params.id));
        //     if (!user) return res.status(404).json({ message: "User not found" });
        //     res.json(user);
        // });                                                   //  Read Single User by ID

        
        // app.post("/users", (req, res) => {
        //     const newUser = {
        //         id: users.length + 1,
        //         name: req.query.name,
        //         email: req.query.email
        //     };
        //     console.log(newUser);
                        
        //     users.push(newUser);
        //     res.status(201).json(newUser);
        // });                                                   //  Create New User

       
        // app.put("/users/:id", (req, res) => {
        //     const user = users.find(u => u.id === parseInt(req.params.id));
        //     if (!user) return res.status(404).json({ message: "User not found" });

        //     user.name = req.query.name || user.name;
        //     user.email = req.query.email || user.email;
        //     res.json(user);
        // });                                                    //  Update User by ID

        
        // app.delete("/users/:id", (req, res) => {
        //     users = users.filter(u => u.id !== parseInt(req.params.id));
        //     res.json({ message: "User deleted successfully" });
        // });                                                    //  Delete User by ID

        // app.listen(port, () => {
        //     console.log(`Server running at http://localhost:${port}`);
        // });
