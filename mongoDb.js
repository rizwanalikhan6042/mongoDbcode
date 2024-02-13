//Now in a separate file
const getData=require('./mongo1Db');


// async function getData (){
// let result=await client.connect();
// let db=result.db(dataBase);
// let collection=db.collection('products');
// let response = await collection.find({}).toArray();
// console.log(response);
// }
// //node ./mongoDb.js
// getData();
// async function getData (){
//     let result=await client.connect();
//     let db=result.db(dataBase);
//     return db.collection('products');
//     let response = await collection.find({name:"rizwan Ali Khan"}).toArray();
//     console.log(response);
//     }
    // If you want to search any particular database you can add it into curly brackets like above
   
    //Now we are creating separate functions for finding

    // async function getData (){
    //     let result=await client.connect();
    //     let db=result.db(dataBase);
    //     return db.collection('products');
       
    //     }
        //By promises then
    // getData().then((resp)=>{
    // resp.find({}).toArray().then((data)=>{
    //     console.log(data);
    // })
    // })
    // console.log(getData()) ;
    //Easier way Of doing same thing By async await

  const main = async ()=>{
  let data = await getData();
  data = await data.find().toArray();
  console.warn(data);


  }
  
  main()

    
   

