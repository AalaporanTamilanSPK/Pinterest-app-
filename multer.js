var multer=require('multer')
var path=require('path')

//multer_config
module.exports = multer({
    storage:multer.diskStorage({}),
    fileFilter:(req,file,cb)=>{
        // destination: 'images' 
        let ext=path.extname(file.originalname)
        if(ext!==".jpg"&&ext!==".jpeg"&&ext!==".png"&&ext!==".pdf"){
            cb(new Error ('file type not support'),true)
            return
        }
        cb(null, true)
    }
})