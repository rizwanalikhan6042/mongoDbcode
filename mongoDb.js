const { MongoClient, Collection } =require('mongodb');
const url='mongodb://localhost:27017';
const dataBase='E-comm';
const client=new MongoClient(url);

async function getData (){
let result=await client.connect();
let db=result.db(dataBase);
let collection=db.collection('products');
let response = await collection.find({}).toArray();
console.log(response);
}
//node ./mongoDb.js
getData();

