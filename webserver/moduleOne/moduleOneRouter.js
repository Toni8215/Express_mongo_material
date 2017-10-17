'use strict';
const express=require("express");
const controller=require('./moduleOneController.js');
const router= express.Router();


router.post('/saved',(req,res) =>{
   console.log("post method");
    
     controller.postDataIntoFile(req, (err,result) =>{
         console.log(err);
        if(err){
            res.status('500').send("cannot post to repos");
        }
        else
        res.send(req.body);
     });

       
        

});
router.get('/saved',(req,res,next) =>{
    console.log("get method");
    controller.sendData(req, (err,result) =>{
        if(err){
            res.status('500').send("cannot get repos");
        }
        else
    res.json(result);
    });
    
   
});
// router.put('/saved/:id',(req,res) =>{
//     console.log("put method");
//     controller.updateData(req, (err,result) =>{
//         if(err){
//             res.status('500').send("cannot get repos");
//         }
//         else
//     res.json("updated  succesfully");
//     });

   
// });
router.delete('/saved/:id',(req,res) =>{
    console.log("delete method");
    controller.deleteData(req, (err,result) =>{
        if(err){
            res.status('500').send("cannot delete repos");
        }
        else
    res.json("deleted succesfully");
    });
});

module.exports=router;
