const express = require('express');

const passport = require('passport');
const locStrat = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');

var router = express.Router();

function initSecurity(db) {

    var userModel = require('./users')(db);

    //localPassport
    passport.use(

        new locStrat({
                usrField: 'email',
                passField: 'password'
            },
            (email, pswd, next) => {
                //--
                if ((email || 'na') === 'na' || (pswd || 'na') === 'na') {
                    console.log("Correo y contraseña no ingresados");
                    return next(null, false, { "Error": "El correo y la contraseña son necesarios" });
                }
                userModel.getByEmail(email, (err, user) => {
                    if (err) {
                        console.log(err);
                        console.log("Ocurrio un error al tratar de iniciar sesion ERR:EA-I" + email);
                        return next(null, false, { "Error": "El correo y la contraseña son necesarios" });

                    }
                    if (!user.active) {
                        console.log("Ocurrio un error al tratar de iniciar sesion ERR:EA-U" + email);
                        return next(null, false, { "Error": "El correo y la contraseña son necesarios" });

                    }
                    if (userModel.comparePassword(pswd, user.password)) {
                        console.log("Ocurrio un error al tratar de iniciar sesion ERR:EC-I" + email);
                        return next(null, false, { "Error": "El correo y la contraseña son necesarios" });

                    }

                    delete user.password;
                    delete user.lastPassword;
                    delete user.active;
                    delete user.dateCreate;

                    return next(null, user, { "msg": "Se logeo correctamente" });

                });
                //--
            }
        )

    );


    router.post('/login', (req, res, next) => {
        passport.authenticate('local', { session: false }, (err, user, i) => {
            if (user) {
                req.login(user, { session: false }, (err) => {
                    if (err) {
                        return res.status(400).json({ "msg": "No se pudo iniciarsesion" });
                    }
                    var token = jwt.sign(user, 'acklendavenuechallenge');
                    return res.status().json({ user, token });
                });

            } else {
                return res.status(400).json({ info });
            }

        })(req, res);

    });


    router.post('/signin', (req, res, next) => {
        var email = req.body.email || 'na';
        var pswd = req.body.password || 'na';

        if (email === 'na' || pswd === 'na') {
            return res.status(400).json({ "Error": "El correo y la contraseña son necesarios" });
        }
        if (!(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i).test(email)) {
            return res.status(400).json({ "Error": "Correo electronico invalido" });

        }
        if (!(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%])[0-9A-Za-z!@#$%]{8,32}$/).test(pswd)) {
            return res.status(400).json({ "Error": "Necesarios 1 mayuscula, una minuscula, numero y un signo especial" });
        }

        userModel.addNew(email, pswd, (err, newUser) => {
            if (err) {
                return res.status(400).json({ "Error": "No se logro crear una nueva cuenta" });

            }

            delete newUser.password;
            return res.status(200).json(newUser);
        });

    }); //signin
    return router;
}
module.exports = initSecurity;