 var mongoose = require('../config/dbconfig')
 
const usercloudinary = new mongoose.Schema({
    name: {
        type: String,
        require:true
    },
    cloudname: {
        type: String,
        require:true
    },
    cloudinaryid: {
        type: String,
        require:true
    },

    
})
module.exports = mongoose.model('User', usercloudinary)