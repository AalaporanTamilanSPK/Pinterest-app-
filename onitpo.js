var express =require('express')
var optionpost= express.Router()
var bodyparser=require('body-parser');
optionpost.use(bodyparser.json());

var opto =require('../helper/option')

//option
optionpost.post('/option',opto.commentsimg)

module.exports=optionpost