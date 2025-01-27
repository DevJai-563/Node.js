// readline module
    // readline ek built-in Node.js module hai jo command-line interface (CLI) applications mein user se input lene ke liye use hota hai.
    //  Is module ka use tum command-line tools ya interactive scripts banate waqt karte ho.

// readline Interface Create Karna
    // Agar tumhe user se input lena hai, toh readline module ka createInterface method use karte hain. 
    // Yeh ek interface create karta hai jo input (keyboard se) aur output (screen par) ko handle karta hai.

                    // const readline = require('readline');

                    // const rl = readline.createInterface({
                    // input: process.stdin,  // User se input lena
                    // output: process.stdout // Output screen par dikhana
                    // });


        //readline ka sabse basic use yeh hota hai ki tum user se question poochho aur uske response ko handle karo. 
        //Tum question method ka use karte ho.

                    // rl.question("What is your name? ", (answer) => {
                    // console.log(`Hello, ${answer}!`); // User ka response dikhana
                    // rl.close(); // Interface band karna
                    // });

            //MUltiple questions
                    // rl.question("What is your name? ", (name) => {
                    // rl.question("How old are you? ", (age) => {
                    // console.log(`Hello, ${name}! You are ${age} years old.`);
                    // rl.close(); // Interface band karna
                    // });
        
                // Error Handling
                //     Agar input valid nahi hai, toh tum error handling bhi kar sakte ho. 
                //     Jaise, agar tum user se number pooch rahe ho aur wo text de raha hai, toh tum error message de sakte ho.

                            // rl.question("Enter a number: ", (input) => {
                            // const number = parseInt(input);
                            // if (isNaN(number)) {
                            // console.log("Please enter a valid number!");
                            // } else {
                            // console.log(`You entered the number: ${number}`);
                            // }
                            // rl.close();
                            // });

                