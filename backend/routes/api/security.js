const express = require('express');
var router = express.Router();

function initSecurity(db){
    var userModel = require('./users')(db);


    router.post('/login', (req, res, next)=>{
        var user = userModel.getByEmail(req.body.email, (err, user)=>{
            if(err){
                return res.status(400).json(err);
            }
            return res.status(200).json(user);
        });
    });
    router.post('/signin', (req, res, next)=>{
        var email = req.body.email;
        var pswd = req.body.password;
    });
    return router;
}
module.exports = initSecurity;

