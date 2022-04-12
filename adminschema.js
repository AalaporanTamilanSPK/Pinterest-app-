 var mongoose =require('../config/dbconfig')

const adminYt=mongoose.Schema({ 
    username:{
        type:String,
        require:true,
        minlegth:3,
        maxlength:25,
    },
    
    password:{
        type:String,
        require:true
    },
     email:{
        type:String,
          lowercase:true,
          unique:true,
          require:true,
     },
    id:{
        type:Number,
        require:true
    },
    Dob:{
        type:Number,
        require:true
    },
    city:{
        type:String,
        require:true
    }
});
module.exports = mongoose.model('admin',adminYt);