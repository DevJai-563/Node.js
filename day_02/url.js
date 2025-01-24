// ++++++++++++++++==>> URL <<==+++++++++++++++++++++
//for Comon JS use ==>> const url = require('url'); AND for ECMA script 6 use ==>> import url from "url";

//1. URL Module 
    // url.parse() method ek URL ko parts mein tod deta hai. Isse aap protocol, hostname, pathname, aur query parameters ko alag-alag extract kar sakte ho.
            
            // const url = require('url');
            // const myURL = "https://www.example.com:8080/pathname?search=query#hash";

            // const parsedURL = url.parse(myURL);

            // console.log(parsedURL);

    // url.resolve() ka use relative URLs ko absolute URLs mein convert karne ke liye hota hai.

            // const url = require('url');

            // const resolvedUrl = url.resolve('https://example.com/', '/subpath');
            // console.log(resolvedUrl); // https://example.com/subpath


//2. Modern URL Class
    //URL class built-in global object hai. Ye zyada flexible aur secure hai.

            // const myURL = new URL("https://www.example.com:8080/pathname?search=query#hash");

            // console.log(myURL.protocol); // 'https:'
            // console.log(myURL.hostname); // 'www.example.com'
            // console.log(myURL.port);     // '8080'
            // console.log(myURL.pathname); // '/pathname'
            // console.log(myURL.search);   // '?search=query'
            // console.log(myURL.hash);     // '#hash'
            // console.log(myURL.href);     // Full URL

    //Common Operations:
        // Get a Query Parameter:
        
            // const url = new URL('https://example.com?name=dev&age=25');
            // console.log(url.searchParams.get('name')); // dev

        // Set or Update a Query Parameter:

            // url.searchParams.set('name', 'jai');
            // console.log(url.toString()); // https://example.com?name=jai&age=25

        // Delete a Query Parameter:

            // url.searchParams.delete('age');
            // console.log(url.toString()); // https://example.com?name=jai

        // Loop Through Query Parameters:

            // url.searchParams.forEach((value, key) => {
            // console.log(`${key}: ${value}`);
            // });

    // Construct a URL
        // Backend APIs mein naye URLs create karna common kaam hai.

            // const myUrl = new URL('https://example.com');
            // myUrl.pathname = '/api/users';
            // myUrl.searchParams.append('id', '123');
            // console.log(myUrl.toString()); // https://example.com/api/users?id=123

    // Validation (Check if URL is Valid)

            // try {
            //     const myUrl = new URL('invalid-url');
            //   } catch (error) {
            //     console.log('Invalid URL'); // Invalid URL
            //   }