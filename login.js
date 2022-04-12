var admindata=require('../model/adminschema')
var express=require('express')
var jsonwebtoken=require('jsonwebtoken')
var app=express()
var bodyparser=require('body-parser')

app.use(bodyparser.json())

exports.adminad=function(req,res){
    const adm =new admindata()
    adm.username = req.body.username
    adm.password = req.body.password
    adm.email = req.body.email
    adm.id=req.body.id
    adm.Dob=req.body.Dob
    adm.city=req.body.city
    adm.save((err)=>{
        if(err){
            res.send('Save.Error..')
            console.log('err')
        }else{
            res.send('register Success..')
        }
    })
}

exports.login=function(req,res){
    admindata.find({username:req.body.username},{id:1},function(err,data){
        if(data==0){
            res.send("wrong input!!")
        }else{
            const admindata={
                admin_id:data,
            }
        
        if(admindata.admin_id==data){
        const token=jsonwebtoken.sign({username:req.body.username},
            "secretkey",{expiresIn:'60s'})
            res.json({data:data,token:token})
        }else{
            res.send('You are not wrongadmin')
        }
    }
    })
}

exports.verify=function(req,res) {

    const bearerHeader = req.headers["authorization"];
  
    if (typeof bearerHeader !== "undefined") {
      const bearerToken = bearerHeader.split(" ")[1];
      req.token = bearerToken;

    jsonwebtoken.verify(req.token,"secretkey",(err,authData)=>{
        if(err){
            res.sendStatus(403);
        }
        else{
            res.json({
                message:" You Account Created",
                verify:"you are login user"
            });
        }
    })
}
else{
      res.sendStatus(403);
}
}