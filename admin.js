var express =require('express')
var userreg= express.Router()
var bodyparser=require('body-parser');
userreg.use(bodyparser.json());

var user =require('../helper/login')

const {validator,adminvalidation}=require('../middleware/adminvalidator')

userreg.post('/adminuser',validator,adminvalidation,user.adminad)
userreg.post('/adminlogin',user.login)
userreg.post('/verifyuser',user.verify)

module.exports=userreg