const express = require('express');
const router = express.Router();

function routerInit(db){
    const securityApi = require('./security');
    const thingsApi = require('./things')(db);

    router.get('/', (req, res, next)=>{
        res.status(200).json({"ok":"El api funciona"});
    });

    router.use('/security', securityApi);
    router.use('/things', thingsApi);

    return router;
}
module.exports = routerInit;