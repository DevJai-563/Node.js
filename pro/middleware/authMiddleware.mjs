// Defining the authorization middleware function
const authmiddleware = (req, res, next) => {

     // Extracting the authorization token from the request headers
     const token = req.headers['authorization'];
     
     // If no token is found, sending a 401 response (Unauthorized)
     if (!token) {
          return res.status(401).send('Access Denied: No token provided');
     }
 
     // If token is invalid (doesn't match '12345'), send a 401 response
     if (token !== '12345') {
          return res.status(401).send('Access Denied: Invalid token provided');
     }
 
     // If token is valid, move to the next middleware or route handler
     next();
 }
 
 // Exporting authmiddleware to use in other files (like in index.mjs)
 export default authmiddleware;
 