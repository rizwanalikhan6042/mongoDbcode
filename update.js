const dbConnect = require('./mongo1Db');

// 
// const updateData = async () =>{
//     let data = await dbConnect();
//     let result = await data.updateOne(
//         { name : "imran Ali Khan"} , {
//        $set: { name: "Wajida"}
//     }
//     );
//     console.log(result);
// }

// updateData();

//Now again for practice
const updateData = async () =>{
    let data = await dbConnect();
    let result = await data.updateMany({name:"Wajida"},
    {$set : {name: "imran khan"   }});
    console.log(result);


}
updateData();

