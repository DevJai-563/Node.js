// File Uploads in Express.js (Using Multer) 
//Local Storage Setup (Multer ke saath)

// File upload ka matlab hai ki user apne system se koi file (image, PDF, video, etc.) ko server par bhej sake. 
// Express.js me file upload karne ke liye Multer middleware ka use hota hai.
// File Uploads Kyu Zaroori Hai?

    // User ko images, documents ya videos upload karne dena.
    // Form submissions me file attachments allow karna.
    // Profile pictures, resumes, ya koi bhi media store karna.

// Multer Kya Hai?

    // Multer ek middleware hai jo multipart/form-data requests handle karta hai.
    // Yeh uploaded files ko memory ya disk storage me save kar sakta hai.
    // Express ke sath use karke hum files ko local system ya cloud storage (AWS, Cloudinary) me store kar sakte hain.

    //Multer Storage Setup

        // DiskStorage: Files ko local system me store karne ke liye.
        // MemoryStorage: Files ko memory me store karne ke liye.
        // CloudStorage: Files ko cloud storage me store karne ke liye. 

        import express from "express";
        import multer from "multer";
        import fs from "fs";
        

        const app = express();        

        const storage = multer.diskStorage({
          destination: (req, file, cb) => {
            cb(null, "new/uploads/"); // File ko kaha store karna hai wo path dena hai
          },
          filename: (req, file, cb) => {
            cb(null, Date.now() + "-" + file.originalname); // Unique naam dene ke liye timestamp use kiya
          },
          });
          
          const upload = multer({ storage: storage });

          app.post('/', upload.single('file'), (req, res) => {
            
            if (!req.file) {
                return res.status(400).send('No file uploaded.');
            }
            
            res.send('File uploaded successfully!');
        });
        app.listen(3000, () => {
            console.log("Server is running on http://localhost:3000");
        });
        
        
          