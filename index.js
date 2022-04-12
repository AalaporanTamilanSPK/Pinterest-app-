var express =require('express')
var app = express()
var dbcon=require('mongoose')
var dotenv=require('dotenv')
dotenv.config()

//dbconnect
var dbcon=require('./Pinterest/config/dbconfig')

//regsiterrouter
var userinfo =require('./Pinterest/controller/admin')

// crudrouter
var admininfo =require('./Pinterest/controller/crudrouter')

//optionrouter
var adminop =require('./Pinterest/controller/onitpo')

app.use('/admin',userinfo)
app.use('/userdetails',admininfo)
app.use('/useroption',adminop)

app.use(express.json())
app.use('/user',require('./Pinterest/helper/user'))//direct call router

app.listen(9090,()=>{
    console.log('Server Running Successfully')
});