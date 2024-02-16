const express=require('express');
require('./config');
const Product= require('./product');


const app = express();
app.use(express.json());
app.post('/create',async (req,resp)=>{
    let data =new Product(req.body);
    let result = await data.save();
    console.log(result);
    resp.send(result);
})
app.get('/list',async (req,resp)=>{
    let data = await Product.find({_id: '65cb4647aea12ea113f29e8d'});
    resp.send(data);
    console.log(data);
})

app.delete('/delete/:_id',async (req,resp)=>{
    console.log(req.params);
    let data = await Product.deleteOne(req.params);
    resp.send(data);
})

app.put('/update/:_id',async (req,resp)=>{
    console.log(req.params);
    let data=await Product.updateOne(req.params,{$set:req.body
        
    });
   resp.send(data);

})
app.listen(3200);