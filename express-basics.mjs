// Routing Basics
    // Express uses routes to handle HTTP requests. Let’s add some routes to our app.js.

                import express from "express";
                const app = express();
                const port = 3000;

                app.get('/',(req,res)=>{
                    res.send("Hello Expressjs")
                })
                app.get('/bye',(req,res)=>{
                    res.send("bye Expressjs")
                })
// Middleware in Express
    //Middleware is a powerful concept in Express. It allows you to run functions between the request and response cycle.
                app.use((req, res, next) => {                               //Middleware is a function that runs before your route handlers. It processes requests and modifies responses.
                    const date = new Date()
                    console.log(`${date.toLocaleTimeString()} :: ${req.method} ${req.url}`);
                    next();                                                // Pass control to the next middleware
                });

                app.use(express.json()); // Parses incoming requests with JSON payloads

                app.post('/data', (req, res) => {
                    res.send('Data received');
                    console.log(req.body);               // Logs the received data
                });
    
// Dynamic Routes   
    // You can also create dynamic routes using parameters. For example, let's create a user profile route where the user ID is dynamic:

                app.get('/search', (req, res) => {                             
                    const query = req.query.q;                               //Query parameter/search?q=jobhihoga
                    res.send(`You searched for: ${query}`);
                });
                app.get('/userid/:id', (req, res) => {                        //:id = variable hai jisme user req store hogi
                    const userId = req.params.id;                               // route parameter
                    res.send(`User ID is: ${userId}`);
                });
                app.get('/username/:name',(req,res)=>{
                    const userName = req.params.name;
                    res.send(`Hello ${userName}`)
                })
// Error Handling
    // Aap ek middleware bana sakte ho jo errors ko handle kare. Express me built-in error-handling mechanism hota hai.
                app.get('/error', (req, res, next) => {
                    throw new Error('This is a forced error!');
                    next(error);
                });


                app.use((req, res, next) => {
                    res.status(404).send('Route not found!');
                });

                // app.get('/async-error', (req, res, next) => {
                //     // Simulate an async operation error
                //     const error = new Error('An async error occurred!');
                //     next(error); // Pass the error to the error-handling middleware
                // });

                // app.use((err, req, res, next) => {                             //error handling
                //     console.error(err.stack);
                //     res.status(500).send('Something broke!');
                // });


    app.listen(port,()=>{
        console.log(`Server at http://127.0.0.1:${port}`);
    })


// Express provides several built-in middleware functions like express.json() and express.static().
//  Let’s use the JSON middleware.
    
