'use strict';

const mongoose= require ('mongoose');
const RepoModel = require('./moduleOneEntity').Model;


const postDataIntoFile= function(req,callback) {
    RepoModel.insertMany(req.body, (err,result) => {
         if(err){
             console.log(err);
             callback(err,{});
         }
         console.log(req.body);
         callback(null,{});

     });
    }

const sendData=function (req,callback){
RepoModel.find(function(err,data){
    console.log(data);
    try {
        if (err) {
        throw(err);
        }
      
    }

    catch(err){
        console.log("caught the error in catch block");
        return callback(err,{});
      
    }
    console.log(data);
    callback(null,data);

});
};

const deleteData=function(req,callback){
    RepoModel.remove({"id":req.params.id}, (err,result)=>{
        if(err){
            console.log(err);
            callback(err,{});
        }
        callback(null,{});

    });
   };



module.exports={
    postDataIntoFile:postDataIntoFile,
    sendData:sendData,
    deleteData:deleteData

}
