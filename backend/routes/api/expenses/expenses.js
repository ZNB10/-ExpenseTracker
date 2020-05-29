const express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;

function expensesInit(db){
    var expensesColl = db.collection('expenses');

}