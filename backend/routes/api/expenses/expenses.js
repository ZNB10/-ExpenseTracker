const express = require("express");

var router = express.Router();
var ObjectID = require("mongodb").ObjectID;

function expensesInit(db) {
  var expensesColl = db.collection("expenses");
  var expensesStruct = {
    expenseType: "",
    expenseDesc: "",
    expenseMoney: 0,
    expenseBy: {},
  };

  router.get("/", (req, res, next) => {
    expensesColl.find().toArray((err, expenses) => {
      if (err) return res.status(200).json([]);
      return res.status(200).json(expenses);
    });
  });

  router.get("/page", (req, res, next) => {
    var by = { "expenseBy._id": new ObjectID(req.user._id) };
    getExpenses(1, 50, res, by);
  });

  router.get("/page/:p/:n", (req, res, next) => {
    var by = { "expenseBy._id": new ObjectID(req.user._id) };
    var page = parseInt(req.params.p);
    var items = parseInt(req.params.n);
    getExpenses(page, items, res, by);
  });

  router.get("/query1", (req, res, next) => {
    var by = { "expenseBy._id": new ObjectID(req.user._id) };
    getOne(res, by);
  });

  function getOne(res, by) {
    var query = by;
    var option = {
      limit: 1,
      projection: {
        expenseType: 1,
        expenseDesc: 1,
        expenseMoney: 1,
      },
      sort: {
        expenseMoney: -1,
      },
    };
    let a = expensesColl.find(query, option);

    a.toArray((err, expenses) => {
      if (err) return res.status(200).json([]);
      return res.status(200).json({ expenses });
    });
  }

  router.get("/query3", (req, res, next) => {
    var by = { "expenseBy._id": new ObjectID(req.user._id) };
    getThree(res, by);
  });

  function getThree(res, by) {
    var query = by;
    var option = {
      limit: 3,
      projection: {
        expenseType: 1,
        expenseDesc: 1,
        expenseMoney: 1,
      },
      sort: {
        expenseMoney: -1,
      },
    };
    let a = expensesColl.find(query, option);

    a.toArray((err, expensess) => {
      if (err) return res.status(200).json([]);
      return res.status(200).json({ expensess });
    });
  }

  async function getExpenses(page, items, res, by) {
    var query = by;
    var option = {
      limit: items,
      skip: (page - 1) * items,
      projection: {
        expenseType: 1,
        expenseDesc: 1,
      },
      sort: [["expenseDate", -1]],
    };

    let a = expensesColl.find(query, option);
    let totalExpenses = await a.count();

    a.toArray((err, expenses) => {
      if (err) return res.status(200).json([]);
      return res.status(200).json({ expenses, totalExpenses });
    });
  }

  router.get("/:id", (req, res, next) => {
    var query = { _id: new ObjectID(req.params.id) };
    expensesColl.findOne(query, (err, doc) => {
      if (err) {
        return res.status(401).json({ error: "Error al extraer el documento" });
      }
      return res.status(200).json(doc);
    });
  });

  router.post("/", (req, res, next) => {
    console.log("Utiliza esta ruta para insertar expenses");
    var { _id, email } = req.user;
    var newElement = Object.assign({}, expensesStruct, req.body, {
      expenseDate: new Date().getTime(),
      expenseBy: {
        _id: new ObjectID(_id),
        email: email,
      },
    });

    expensesColl.insertOne(newElement, {}, (err, result) => {
      if (err) {
        console.log("Ocurrio un error: " + err);
        return res.status(404).json({ error: "No se pudo Insertar" });
      }

      return res
        .status(200)
        .json({ n: result.inserteCount, obj: result.ops[0] });
    });
  });

  router.put("/:idElement", (req, res, next) => {
    console.log("Utiliza esta ruta para actualizar");
    var query = { _id: new ObjectID(req.params.idElement) };
    var update = { $set: req.body, $inc: { visited: 1 } };

    expensesColl.updateOne(query, update, (err, rst) => {
      if (err) {
        console.log(err);
        return res
          .status(400)
          .json({ Error: "Error al actualizar el documento" });
      }

      return res.status(200).json(rst);
    });
  });

  router.delete("/:id", (req, res, next) => {
    var query = { _id: ObjectID(req.params.id) };
    expensesColl.removeOne(query, (err, result) => {
      if (err) {
        console.log(err);
        return res
          .status(400)
          .json({ Error: "Error al eliminar el documento" });
      }
      return res.status(200).json(result);
    });
  });

  return router;
}
module.exports = expensesInit;
