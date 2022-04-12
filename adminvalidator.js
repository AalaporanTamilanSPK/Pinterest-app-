const {check,validationResult} = require('express-validator');
exports.validator=[
    check('username')
    .not()
    .isEmpty().withMessage('please file the username field')
    .isAlpha().withMessage('plesse file the alaphbets only'),
     
    check('password')
    .not()
    .isEmpty().withMessage('please file the Password field')
    .isLength({ min: 8 }).withMessage('please fill valid password'),

    check('email')
    .not()
    .isEmpty().withMessage('please file the email field')
    .isEmail().normalizeEmail(),

    check('id')
     .not()
     .isEmpty().withMessage('please file the id field')
     .isNumeric().withMessage('plesse file the id only'),

    check('Dob')
     .not()
     .isEmpty().withMessage('please file the dob field')
     .isNumeric().withMessage('plesse file the Dob only'),

     check('city')
     .not()
     .isEmpty().withMessage('please file the city field'),

];

exports.adminvalidation=(req,res,next)=>{
    const result= validationResult(req).array();
    if(!result.length)
    return next();

    const error=result[0].msg;
    res.send({success:false,message:error})
}