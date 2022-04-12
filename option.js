var admindata=require('../model/imageschema')
var express=require('express')
var app=express()
var bodyparser=require('body-parser')
app.use(bodyparser.json())

exports.commentsimg=function(req,res){
    const img =new admindata()
    img.image_id=req.body.image_id
    img.like = req.body.like
    img.dislike = req.body.dislike
    img.comments = req.body.comments
    img.share = req.body.share
    img.save((err)=>{
        if(err){
            res.send('Save.Error..')
        }else{
            res.send(' Success..')
        }
    })
}