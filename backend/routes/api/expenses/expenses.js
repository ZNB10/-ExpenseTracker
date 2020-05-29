const express = require('express');

var router = express.Router();
var ObjectID = require('mongodb').ObjectID;

function expensesInit(db){
    var expensesColl = db.collection('expenses');
//expenseDesc, expenseMoney
    var expensesStruct = {
        "expenseType":'',
        "expenseDesc":'',
        "expenseMoney":0,
        "expenseBy":{}
    };

    router.post('/', (req, res, next)=>{
        console.log('Utiliza esta ruta para insertar expenses');
        var {_id, email} = req.user;
        getTimet()
        var newElement = Object.assign(
            {},
            expensesStruct,
            req.body,
            {
                "expenseDate": getTimet(),
                "expenseBy":{
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

    function getTimet(){

        var fecha = new Date();
        var year = fecha.getFullYear();
        var mes = fecha.getMonth();
        var dia = fecha.getDate(); 
        
        return (year +'-'+ (mes + 1) +'-'+ dia);
    };
    return router;
}
module.exports = expensesInit;