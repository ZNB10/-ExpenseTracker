const express = require('express');
var router = express.Router();

function thingInit(db){

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
        res.status(400).json({"module":thingsCollection});
    });

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
        thingsCollection.push(newElement);
        res.status(200).json({newElement});
    });


    router.put('/:idElement', (req, res, next)=>{
        var id = parseInt(req.params.idElement);
        var update = req.body;
        var modifiedObject = {};
        var originalObject = {};

        thingsCollection = thingsCollection.map((e, i)=>{
            if(e.id === id){
                originalObject = Object.assign({}, e);
                return Object.assign(modifiedObject, e, req.body);
            }
            return e;
        });
        res.status(200).json({"O":originalObject, "M":modifiedObject});
    });

    router.delete('/:id', (req,res,next)=>{
        var id = parseInt(req.params.id);
        thingsCollection = thingsCollection.filter((e, i)=>{
            return (e.id !== id);
        });

        res.status(200).json({'msg': "Elemento "+ id +" fue eliminado"});
    });


    return Router;
}

module.exports = thingInit;