const express = require('express');

var router = express.Router();
var ObjectID = require('mongodb').ObjectID;

function expensesInit(db){
    var expensesColl = db.collection('expenses');

    var expensesStruct = {
        "descripcion":'',
        "gasto":0,
        "by":{}
    };

    router.post('/', (req, res, next)=>{
        console.log('Utiliza esta ruta para insertar expenses');
        var {_id, email} = req.user;
        var newElement = Object.assign(
            {},
            expensesStruct,
            req.body,
            {
                "fecha": new Date().getTime(),
                "by":{
                    "_id": new ObjectID(_id),
                    "email": email

                }

            }
        );

        expensesColl.insertOne(newElement, {}, (err, result)=>{
            if(err){
                console.log("Ocurrio un error: "+ err);
                return res.status(404).json({"error":"No se pudo Insertar"});
            }

            return res.status(200).json({"n": result.inserteCount, "obj": result.ops[0]});
        });
    });//Insertar Things
    return router;
}
module.exports = expensesInit;