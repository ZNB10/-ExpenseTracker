const express = require('express');

var router = express.Router();
var ObjectId = require('mongodb').ObjectID;

function expensesBacklogInit(db){

    var expensesColl = db.collection('expenses');

    router.get('/page/:p/:n', (req, res, next)=>{
        var by = {"by._id": new ObjectID(req.user._id)}
        var page = parseInt(req.params.p);
        var items = parseInt(req.params.n);
        getExpenses(page, items, res, by);
    });//obtener por pagina

    router.get('/:id', (req, res, next)=>{
        var query = {"_id": new ObjectID(req.params.id)};
        expensesColl.findOne(query, (err, doc)=>{
            if(err){return res.status(401).json({"error": "Error al extraer el documento"});
        }
            return res.status(200).json(doc);
        });//Encontrar uno
    });//Obtener por id

    async function getExpenses(page, items, res, by){
        var query = by;
        var option = {
            "limit":items,
            "skip": ((page-1)*items),
            "projection":{
                "expenseDesc":1
            },
            "sort":[["expenseDate", -1]]
        };
        let a = getThingsColl.find(query, option);
        let totalExpenses= await a.count();
        a.toArray((err, expenses)=>{
            if(err) return res.status(200).json([]);
            return res.status(200).json({expenses, totalExpenses});
        });
    }
    return router;
}

module.exports = expensesBacklogInit;