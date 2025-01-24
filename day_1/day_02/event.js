// events  module


// EventEmitter Class Samajhna

    // EventEmitter class ke through tum events ko emit (trigger) kar sakte ho aur unko handle (listen) kar sakte ho.
        // EventEmitter class ka use kar ke tum events ko create karte ho.
        // Tum events ko emit karte ho (fire karte ho) aur kisi specific listener ko us event ke hone par call karte ho.

            // const EventEmitter = require('events');
            // const emitter = new EventEmitter();
            // emitter.off('event',()=>{
                // console.log("hey i m from emitter event")
            // })
            // emitter.listeners('even')


    // on() aur emit() Methods
        // on(): Yeh method tumhe event ke liye listener set karne ka option deta hai.
        // emit(): Yeh method event ko trigger (fire) karta hai.

            // const EventEmitter = require('events');
            // const emitter = new EventEmitter();

            // emitter.on('msg',(value)=>{
            //     console.log("Recived :",value)
            // })
            // emitter.emit('msg','I will be there in 5 mints')
    //Multiple Listeners
        // Tum multiple listeners ko ek event ke liye attach kar sakte ho. Jab event emit hota hai, toh saare listeners execute hote hain.
            // const EventEmitter = require('events');
            // const emitter = new EventEmitter();

            // emitter.on('msg',()=>{
            //     setTimeout(() => {
            //         console.log("Message recived successfully");
            //     }, 2000);
            // })

            // emitter.on('msg',(data)=>{
            //     console.log("msg is : ",data)
            // })

            // emitter.emit('msg','You have to submitt it on Monday')
            
    // once() Method
        // Agar tum chahte ho ki ek listener sirf ek baar execute ho, toh tum once() method ka use kar sakte ho. Yeh method event ke sirf ek baar fire hone ke baad listener ko automatically remove kar deta hai.
            
            // const EventEmitter = require('events');
            // const emitter = new EventEmitter();

            // emitter.once('msg',(value)=>{                   
            //     console.log("Recived :",value)
            // })
            // emitter.emit('msg','I will be there in 5 mints')
            // emitter.emit('msg','reached ')

    // Handling Multiple Arguments
    // Removing Listeners (removeListener() / off())
        // Kabhi kabhi tumhe listeners ko remove karna padta hai, yeh removeListener() ya off() methods se kiya jaa sakta hai.
            // const EventEmitter = require('events')
            // const emitter = new EventEmitter()
            // const greeting = () =>{
            //     console.log("Good Morning to all of you ");
            // }

            // emitter.on('greet',greeting)

            // emitter.emit('greet')
            // // emitter.removeListener('greet',greeting)
            // emitter.off('greet',greeting)
            // emitter.emit('greet')


    // EventEmitter Class Ke Built-in Events
        // EventEmitter class mein kuch built-in events bhi hote hain, jaise:
          // newListener: Jab koi naya listener add hota hai.
          // removeListener: Jab koi listener remove hota hai.

            // const EventEmitter = require('events')
            // const emitter = new EventEmitter();

            // emitter.on('newListener', (eventName, listener) => {
            //     console.log(`A new listener is added for event: ${eventName} \n ${listener}`);
            // });
            
            // emitter.on('mess',()=>{
            //     console.log("new listener");
            // })
            
    //Event-driven Programming Ka Example:
        // Event-driven programming mein ek common example hota hai file reading ya server requests. Jaise tumko file read karte waqt events trigger karne ho.
            // const fs = require('fs');
            // const EventEmitter = require('events');
            // const emitter = new EventEmitter();

            // emitter.on('data',(data)=>{
            //     console.log("File read done :",data);
            // })
            // emitter.on('error',(error)=>{
            //     console.log("Here something wrong :",error);
            // })

            // fs.readFile('day_02/eg.txt','utf8',(error,data)=>{
            //     if(data){
            //         emitter.emit('data', data)
            //     }else{
            //         emitter.emit('error', error)
            //     }
            // })
            
           