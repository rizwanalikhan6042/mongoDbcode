const dbConnect = require('./mongo1Db');



// const deleteData = async () =>{
//     let data = await dbConnect();
//     let result = await data.deleteOne({name:"imran khan"});
//     console.log(result);
// }

// deleteData();

//For deleting all data matching with condition
const deleteData = async () =>{
        let data = await dbConnect();
        let result = await data.deleteMany({name:"imran Ali Khan"});
        console.log(result);
    }
    deleteData();
