const express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;

function thingsInit(db){

    var thingsColl = db.collection('things');

    var thingsCollection = [];

    var thingsStruct = {
        "id":0,
        "descripcion":"",
        "fecha":0,
        "by":""
    };

    thingsCollection.push(
        Object.assign(
            {},
            thingsStruct, {
            "id":1, 
            "descipcion":"Mi Primer Thing", 
            "fecha": new Date().getTime(), 
            "by": "Yonathan Cruz"
        })
    );

    router.get('/', (req, res, next)=>{
        thingsColl.find().toArray((err, things)=>{
            if(err) return res.status(200).json([]);
            return res.status(200).json(things);
        });

    });//getAll

    router.get('/page', (req, res, next)=>{
        getThings(1, 50, res);

    });//getPage

    router.get('/page/:p/:n', (req, res, next)=>{
        var page = parseInt(req.params.p);
        var items = parseInt(req.params.n);
        getThings(page, items, res);
    });//getPage(Pages, items)

    function getThings(page, items, res){
        var query = {};
        var options = {
            "limit": items,
            "skip": ((page-1) * items),
            "projection":{
                "descripcion":1
            }
        };
        thingsColl.find(query, options).toArray((err,things)=>{
            if(err) return res.status(200).json([]);
            return res.status(200).json(things);
            
        });
    }

    router.get('/:id', (req, res, next)=>{
        var query = {"_id": new ObjectID(req.params.id)};
        thingsColl.findOne(query, (err, doc)=>{
            if(err) {
                console.log(err);
                return res.status(401).json({"error": "Error al extraer el documento"});
            }
            return res.status(200).json(doc);
        });//findOne
    });//getById

    router.post('/', (req, res, next)=>{
        var newElement = Object.assign(
            {},
            thingsStruct,
            req.body,
            {
                "fecha": new Date().getTime(),
                "id": new Date().getTime()
            }
        );

        thingsColl.insertOne(newElement, {}, (err, result)=>{
            if(err){
                console.log("Ocurrio un error: "+ err);
                return res.status(404).json({"error":"No se pudo Insertar"});
            }

            return res.status(200).json({"n": result.inserteCount, "obj": result.ops[0]});
        });
    });


    router.put('/:idElement', (req, res, next)=>{
        var query = {"_id": new ObjectID(req.params.idElement)};
        var update = {"$set": req.body, "$inc":{"visited":1}};
        
        thingsColl.updateOne(query, update, (err, rst)=>{
            if(err){
                return res.status(400).json({"Error": "Error al actualziar el documento"});
            }

            return res.status(200).json(rst);
        }); //updateOne


    });

    router.delete('/:id', (req,res,next)=>{

        var query = {"_id": ObjectID(req.params.id)}
        thingsColl.removeOne(query, (err, result)=>{
            if(err){
                console.log(err);
                return res.status(400).json({"Error": "Error al eliminar el documento"});

            }else{
                return res.status(200).json(result);
            }
        });

      });


    return router;
}

module.exports = thingsInit;