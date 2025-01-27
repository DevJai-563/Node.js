// HTTP module.
  // HTTP module ka use Node.js me web servers banane aur client-server communication ko handle karne ke liye hota hai.

// 1. Create Server
          // const { createServer } = require('http');   //import http

          // const hostname = '127.0.0.1';               //local host       
          // const port = 3000;                          //port 3000, 5000 or 8080

          // const server = createServer((req, res) => {   //create server
          //   res.statusCode = 200;                         //evrything is ok 
          //   res.setHeader('Content-Type', 'text/plain');  
          //   res.end('Hello World');     
          // });

          // server.listen(port, hostname, () => {                //Server listener
          //   console.log(`Server running at http://${hostname}:${port}/`);
          // });

// 2. Request (req) aur Response (res)
  //req (Request): Client ki taraf se server ko jo request aati hai, uski details is object me hoti hain. Jaise URL, HTTP method, headers, etc.
  //res (Response): Server client ko jo data wapas bhejta hai, wo res object se control hota hai.
    
    //Request Handling
      //1. req.url: Requested URL ka path.
      //2. req.method: HTTP method (GET, POST, etc.).
      //3. req.headers: Client ke request headers.

      //1. Different URLs Ko Handle Karna
        
          // const http = require('http')
          // const hostname = '127.0.0.1'
          // const port = 3000

          // const server = http.createServer((req,res)=>{
              
          //     res.setHeader("Content-Type","text/html")
          //     if(req.url === "/"){
          //       res.end("Hey Welcome to my page")
          //     }if(req.url === "/about"){
          //       res.end("<h1>About</h1> <br> Hey i mfrom about")
          //     }else if( req.url === "/help"){
          //       res.end("<h1>Help Desk</h1> <br> <p>Hello Sir, how can i help you</p>")
          //     }else{
          //       res.statusCode = 404
          //       res.end (" <h1>404 Page not found</h1>")
          //     }
          // })      
          
          // server.listen(port,hostname,()=>{
          //   console.log(`Server at http://${hostname}:${port}/`)
          // })
      
      //2. HTTP Methods Ko Samajhna (GET, POST, etc.)
        //Server par different methods handle karne ke liye req.method ka use hota hai.
          
          // const http = require('http');

          // const server = http.createServer((req, res) => {
          //     if (req.method === 'GET') {                       //Get method => Browser se request karne par by default GET request hoti hai.
          //         res.end('This is a GET request!');
          //     } else if (req.method === 'POST') {               //Post method =>POST request manually send karni hoti hai, ya to form ke through ya kisi tool ke through (e.g., Postman, curl).
          //         res.end('This is a POST request!');
          //     } else {
          //         res.statusCode = 405; // Method Not Allowed
          //         res.end('Method not supported!');
          //     }
          // });
          
          // server.listen(3000, () => {
          //     console.log('Server is running on http://localhost:3000');
          // });
    
    //Response Object 
      // res.write(data): Response body me data likhne ke liye.
      // res.setHeader(key, value): Response ke headers set karne ke liye.
      // res.end(data): Response complete aur connection close karne ke liye.

          // res.statusCode = 200;
          // res.setHeader('Content-Type', 'text/html'); // HTML response
          // res.write('<h1>Hello, World!</h1>'); // Response body
          // res.end('<p>Welcome to my Node.js server.</p>'); // Response end

    //JSON Response.Server JSON format me data bhej kar APIs provide kar sakta hai.
          // const http = require('http');

          // const server = http.createServer((req, res) => {
          //   const data = {
          //       name: 'Node.js',
          //       version: '16.0.0',
          //       description: 'Server-side JavaScript runtime'
          //   };

          //   res.setHeader('Content-Type', 'application/json');
          //   res.end(JSON.stringify(data)); // Object ko JSON string me convert karo
          // });

          // server.listen(3000, () => {
          //   console.log('Server running...');
          // });

// 3. HTTP Module ke Saath Try-Catch 

          //   const http = require('http')

          //   const hostname = "127.0.0.1"
          //   const port = 3000

          //   const server = http.createServer((req,res)=>{
          //     try {
          //       if (req.url === '/error') {
          //           throw new Error('Intentional Error!'); // Error throw karna
          //       }
        
          //       res.statusCode = 200;
          //       res.setHeader('Content-Type', 'text/plain');
          //       res.end('Hello, World!');
          //   } catch (err) {
          //       console.error('Error:', err.message); // Error log karna
          //       res.statusCode = 500; // Internal Server Error
          //       res.end('Something went wrong!');
          //   }
          //   })
          //   server.listen(port,hostname, () => {
          //     console.log('Server running at http://127.0.0.1:3000/');
          // });

