//1.Importing
const express = require ("express");
const libModel = require("./model/booksDb");
const cors = require('cors');

//2.Initialisation
const app = new express();

//3.Middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
//Api creation
//to post data
app.post('/addbooks',async (req,res)=>{
    var data = await libModel(req.body);
    data.save();
    res.send({status:"data saved"})
})

//to view all books
app.get('/viewbooks',async(req,res)=>{
   var data = await libModel.find();
   res.json(data);
})
//to view one book
app.get('/viewonebook/:id',async(req,res)=>{
    let id = req.params.id
    var data = await libModel.findById(id)
    res.json(data)
})

//to delete books
app.delete('/deletebooks/:id',async(req,res)=>{
     console.log(req.params)
     let id = req.params.id;
     await libModel.findByIdAndDelete(id);
     res.json({status:"deleted"})
})

//to update
app.put('/edit/:id',async(req,res)=>{
    let id = req.params.id
    try {
        var data = await libModel.findByIdAndUpdate(id,req.body)
        res.json({status:"updated"})
    }
    catch(err){
        res.status(500).send(err)
    }
})
//port
app.listen(3008,()=>{
    console.log("App is Running!!!")
})