const express = require('express');

var router = express.Router();
var ObjectId = require('mongodb').ObjectID;

function expensesBacklogInit(){
    return router;
}

module.exports = expensesBacklogInit;