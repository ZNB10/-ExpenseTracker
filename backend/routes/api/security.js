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
        var email = req.body.email  || 'na';
        var pswd = req.body.password || 'na';

        if(email === 'na' || pswd === 'na'){
            return res.status(400).json({"Error": "El correo y la contraseña son necesarios"});
        }
        if(!(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i).test(email)){
            return res.status(400).json({"Error": "Correo electronico invalido"});

        }
        if(!(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%])[0-9A-Za-z!@#$%]{8,32}$/).test(pswd)){
            return res.status(400).json({"Error": "Necesarios 1 mayuscula, una minuscula, numero y un signo especial"});
        }

        userModel.addNew(email, pswd, (err, newUser)=>{
            if(err){
                return res.status(400).json({"Error": "No se logro crear una nueva cuenta"});

            }

            delete newUser.password;
            return res.status(200).json(newUser);
        });

    });//signin
    return router;
}
module.exports = initSecurity;

