const express = require('express');
const router = express.Router();

function routerInit(db){
    const securityApi = require('./security')(db);
    const thingsApi = require('./things')(db);

    router.get('/', (req, res, next)=>{
        res.status(200).json({"ok":"Api version 1"});
    });

    router.use('/security', securityApi);
    router.use('/things', thingsApi);

    return router;
}
module.exports = routerInit;