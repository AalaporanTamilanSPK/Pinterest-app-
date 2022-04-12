var admindata=require('../model/adminschema')
var express=require('express')
var app=express()
var bodyparser=require('body-parser')

app.use(bodyparser.json())


//find
exports.finduser=function(req,res){
    admindata.findOne({id:20037},function(err,userdata){
        if(userdata==0){
            res.send('find error');
        }else{
            res.send(userdata)
        }
    })  
} 

//find all
exports.findall=function(req,res){
    admindata.find(function(err,userdata){
        if(userdata==0){
            res.send('find error');
            console.log("error")
        }else{
            res.send(userdata)
        }
    })
}

//delete
exports.deleteuser=function(req,res){
    admindata.deleteOne({id:20038},{name:1},function(err,userdata){
        if(userdata==0){
            res.send('find error');
        }else{
            res.send(userdata)
        }
    })
}

//update
exports.Updatauser=function(req,res){
    admindata.updateOne({id:20034},{username:"premkumar"},function(err,userdata){
         if(userdata==0){
             res.send('update error')
         }else{
             res.send('update success')
         }
    })
}
