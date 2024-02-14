const getData = require('./mongo1Db');


// const insert = async () =>{
//     const db = await getData();

//     const result = await db.insertOne({name:"imran Ali Khan", age:31,PhoneNo:"9759308663"});
//     if(result.acknowledged){
//         console.log("inserted");
//     }
// }
// insert();
//nodemon --delay 3000 server.js 
//We have done this to avoid frequent running of nodemon 

//Now we will insert multiple objects
const insert = async () =>{
    const db = await getData();

    const result = await db.insertMany([
        {name:"imran Ali Khan", age:31,PhoneNo:"9759308663"},
        {name:"rizwan Ali Khan", age:27,PhoneNo:"9759308663"},
        {name:"gufran Ali Khan", age:41,PhoneNo:"9759308663"},
]);
    if(result.acknowledged){
        console.log("inserted");
    }
}
insert();


