const express = require('express');
var router = express.Router();

function initSecurity(db){
    router.get('/', (req, res, next)=>{
    res.status(200).json({"module":"security"});
    });

    return router
}
module.exports = initSecurity;

