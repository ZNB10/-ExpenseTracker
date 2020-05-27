const express = require('express');
const router = express.Router();
const passport = require('passport');
const passportJWT = require('passport-jwt');
const ExtractJWT = passportJWT.ExtractJwt;
const jwtStrategy = pportJWT.Strategy;


function routerInit(db) {

    pport.use(
        new jwtStrategy({
                jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToekn(),
                secretOrKey: "acklendavenuechallenge"
            },
            (payload, next) => {
                var user = payload;
                return next(null, user);
            }
        )
    );

    const securityApi = require('./security')(db);
    const thingsApi = require('./things')(db);

    router.get('/', (req, res, next) => {
        res.status(200).json({ "ok": "Api version 1" });
    });

    router.use('/security', securityApi);
    router.use('/things', thingsApi);

    return router;
}
module.exports = routerInit;