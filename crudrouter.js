var express =require('express')
var data= express.Router()
var bodyparser=require('body-parser');
data.use(bodyparser.json());

var crud =require('../helper/crud')

//crud
data.post('/find',crud.finduser)
data.post('/findall',crud.findall)
data.post('/delete',crud.deleteuser)
data.post('/update',crud.Updatauser)


module.exports=data