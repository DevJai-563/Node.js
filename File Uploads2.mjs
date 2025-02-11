// File Uploads in Express.js (Using Multer) 
//Cloud Storage (AWS S3)

// Example 1: AWS S3 Ko Connect Karna

            import AWS from 'aws-sdk'; // AWS ka package import kar rahe hain

            // AWS credentials setup kar rahe hain
            AWS.config.update({
                accessKeyId: 'your-access-key',      // AWS IAM user ki Access Key
                secretAccessKey: 'your-secret-key',  // AWS IAM user ki Secret Key
                region: 'us-east-1'                  // Tumhara AWS region (yahi rakh sakte ho)
            });

            // AWS S3 ka object create kar rahe hain
            const s3 = new AWS.S3();

//Example 2: Simple File Upload (Manually)

            const fs = require('fs'); // File System module to read files

            // File ko read kar rahe hain
            const fileContent = fs.readFileSync('test-file.txt');

            // Upload karne ka function bana rahe hain
            const uploadParams = {
                Bucket: 'your-bucket-name',       // Tumhara S3 bucket ka naam
                Key: 'uploaded-file.txt',         // S3 me file ka naam kya hoga
                Body: fileContent,                // File ka actual content
                ACL: 'public-read'                // File ko publicly access kar sakte hain
            };

            // File ko upload kar rahe hain
            s3.upload(uploadParams, (err, data) => {
                if (err) {
                    console.log("Error:", err);
                } else {
                    console.log("File uploaded successfully!", data.Location);
                }
            });

//Example 3: Multer-S3 Setup

            const multer = require('multer');
            const multerS3 = require('multer-s3');
            const express = require('express');

            const app = express();

            // Multer-S3 ka storage setup kar rahe hain
            const upload = multer({
                storage: multerS3({
                    s3: s3,
                    bucket: 'your-bucket-name',
                    acl: 'public-read', // File publicly available hogi
                    metadata: (req, file, cb) => {
                        cb(null, { fieldName: file.fieldname });
                    },
                    key: (req, file, cb) => {
                        cb(null, Date.now().toString() + "-" + file.originalname); // Unique file name
                    }
                })
            });

            // Route: File Upload
            app.post('/upload', upload.single('file'), (req, res) => {
                res.send({ message: "File uploaded successfully!", url: req.file.location });
            });

            // Server start karna
            app.listen(3000, () => {
                console.log("Server started on port 3000");
            });

