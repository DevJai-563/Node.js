////========>>> Operating System Module -->> 
// const os = require('os');
// console.log(os.cpus());    //available CPUs details 
// console.log(os.freemem());    //free memory in bytes
// console.log(os.totalmem());    //total memory in bytes
// console.log(os.uptime());    //time since system last started in seconds
// console.log(os.hostname())   //return hostname
// console.log(os.arch())       //return architecture(like 'x64', 'arm', etc.)
// console.log(os.platform())    //operating system platform (like 'linux', 'darwin', 'win32', etc.)
// console.log(os.networkInterfaces())  // information about network interface

////=========>> Path Moudule -->>

// const path = require('path');

// console.log(path.join('/d', 'cap', 'boot/asdf', 'quik', '..'));   //single normalized pat
// console.log(path.resolve('foo', 'bar', 'baz'));                  // /*current/working/directory*/foo/bar/baz
// console.log(path.basename('/foo/bar/baz/quux.html'));            //return last file name 
// console.log(path.dirname('/foo/bar/baz/quux.html'));            //return path of parent directory name
// console.log(path.extname('/foo/bar/baz/quux.html'));            //return file extension 
// console.log(path.parse('/foo/bar/baz/quux.html'));            //return root, dir, base, ext , name

// let formt = {
//     root: '/',
//     dir: '/foo/bar/baz',
//     base: 'quux.html',
//     ext: '.html',
//     name: 'quux'
//   }
// console.log(path.format(formt));                     //return path string (root, dir, base, ext , name)
// console.log(path.isAbsolute('/foo/bar'));           //check is path absolute

//// =============>> File System module --->>
const fs = require('fs');

// fs.readFile('example.txt', 'utf8', (err, data) => {     //read data of given file
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

// fs.writeFile('heyybro.txt',"Heyy big boss good morning", (error)=>{      // write file
//     if (error) {
//         console.error(error);
//         return
//     }
//     console.log("File has been written")
// })

// fs.appendFile('heyybro.txt', '\n let me come after you.', (err) => {         //apend data in existing file
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log('Data has been appended');
//   });

// fs.unlink('heyybro.txt', (err) => {                           // remove file
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log('File deleted');
//   });

// fs.rename(oldPath, newPath, callback)  //rename existing file
// fs.mkdir(path[, options], callback)  // create new directory
// fs.rmdir(path[, options], callback)  // delete empty directory