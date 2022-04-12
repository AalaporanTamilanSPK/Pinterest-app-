var mongoose =require('../config/dbconfig')

const youtubeoption=mongoose.Schema({

    image_id:{
        type:String,
        require:true
    },
    like:{
        type:Number,
        require:true
    },
    dislike:{
        type:Number,
        require:true
    },
    comments:{
        type:String,
        require:true
    },
    share:{
        type:Number,
        require:true
    } ,
})
module.exports = mongoose.model('options', youtubeoption)