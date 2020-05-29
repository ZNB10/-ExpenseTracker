const express = require('express');

var router = express.Router();
var ObjectId = require('mongodb').ObjectID;

function expensesBacklogInit(db){

    var expensesColl = db.collection('expenses');

    router.get('/page/:p/:n', (req, res, next)=>{
        var by = {"by._id": new ObjectID(req.user._id)}
        var page = parseInt(req.params.p);
        var items = parseInt(req.params.n);
        
    });//obtener por pagina

    async function getThings(page, items, res, by){
        var query = by;
        var option = {
            "limit":items,
            "skip": ((page-1)*items),
            "projection":{
                "expenseDesc":1
            },
            "sort":[["expenseDate", -1]]
        };
        let a = getThingsColl
    }
    return router;
}

module.exports = expensesBacklogInit;