var mongoose=require('mongoose')

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}) 
.then(()=>console.log('db connected'))
.catch((err)=>console.log(err))

mongoose.connect("mongodb://localhost:27017/You_ebut",(err)=>{
    if(err){
        console.log('dberror')
    }else{
        console.log('dbcreated')
    }
})

module.exports = mongoose