import express from 'express';
const app = express();

// Importing authMiddleware 
import authmiddleware from './middleware/authMiddleware.mjs';

const port = 3000;  

// Using the authmiddleware 
app.use(authmiddleware);


app.get('/', (req, res) => {
    res.send('Hello World!');  // Sending message as response
});

// Starting the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`); 
});

