const userDetail = {
    user: "Tata",
    id : 2530,
    validity : "4 months"
}

//*****************************From Module.js File (which is part of CommonJS module system)***************************************
//Method 1
// const m1 = require("./module")                 //thats how we can import functions of module in main  

// let user = m1.getUser(userDetail)              //and use them like this
// console.log(user);

//Method 2 
// const {getUser,getId} = require("./module")        //we got both function in given variable respectively

// let user = getUser(userDetail)                     //and use them directly
// console.log(user);

// let id = getId(userDetail)
// console.log(id)

//*****************************From Module.js File (ES Modules ,required package.json file with type:"module")***************************************
import bye,{getValidity} from "./module2.js";
let validity = getValidity(userDetail)
console.log(validity);

bye()                                          //use default in module2.js so now we can directly call bye function
