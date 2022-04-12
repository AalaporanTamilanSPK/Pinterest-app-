var express=require('express')
var router=express.Router()
var cloudinary=require('../utils/cloudinary')
var upload=require('../utils/multer')

var model=require('../model/coludschema')


router.post('/upload',upload.single('image'),async(req,res)=>{
    
    try {
        const result = await cloudinary.uploader.upload(req.file.path)
        //create instance of user
        let user = new model({
            name: req.body.name,
            cloudname: result.secure_url,
            cloudinaryid: result.public_id,
        })//save user
        user.save()
        res.json(user)
    } catch (err) {
        console.log(err)

    }
});

router.post('/find', (req, res) => {
    model.find(function (err, data) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(data);
        }
    });
});

router.post("/remove", async (req, res) => {
    try {
        let user = await model.findById(req.body._id)
         cloudinary.uploader.destroy(user.cloudinary_id)//delete cloude_id
         user.remove()//remove database
        res.json(user)
    } catch (error) {
        console.log(error)
    }
})



module.exports=router
