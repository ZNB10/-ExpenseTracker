const express = require('express');
const router = express.Router();

const passport = require('passport');
const passportJWT = require('passport-jwt');
const ExtractJWT = passportJWT.ExtractJwt;
const JWTStrategy = passportJWT.Strategy;


function routerInit(db) {

    passport.use(
        new JWTStrategy({
                jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
                secretOrKey: "acklendavenuechallenge"
            },
            (payload, next) => {
                var user = payload;
                return next(null, user);
            }

        )
    );

    const securityApi = require('./security/security')(db);
    const expensesApi = require('./expenses/expenses')(db);
    const thingsApi = require('./things')(db);
    //const thingsApi = require('./things', passport.authenticate('jwt', { session: false }), thingsApi)(db);

    router.get('/', (req, res, next) => {
        res.status(200).json({ "ok": "Api version 1" });
    });

    router.use('/security/security', securityApi);
    router.use('/things', passport.authenticate('jwt', { session: false }), thingsApi);
    router.use('/expenses/expenses', passport.authenticate('jwt', { session: false}) ,expensesApi);

    return router;
}
module.exports = routerInit;