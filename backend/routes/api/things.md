const express = require("express");
var router = express.Router();
var ObjectID = require("mongodb").ObjectID;

function thingsInit(db) {
  var thingsColl = db.collection("things");

  var thingsStruct = {
    descripcion: "",
    fecha: 0,
    by: {},
  };

  router.get("/", (req, res, next) => {
    thingsColl.find().toArray((err, things) => {
      if (err) return res.status(200).json([]);
      return res.status(200).json(things);
    });
  });

  router.get("/page", (req, res, next) => {
    var by = { "by._id": new ObjectID(req.user._id) };
    getThings(1, 50, res, by);
  });

  router.get("/page/:p/:n", (req, res, next) => {
    var by = { "by._id": new ObjectID(req.user._id) };
    var page = parseInt(req.params.p);
    var items = parseInt(req.params.n);

    getThings(page, items, res, by);
  });

  async function getThings(page, items, res, by) {
    console.log("Cuarta");
    var query = by;
    var options = {
      limit: items,
      skip: (page - 1) * items,
      projection: {
        descripcion: 1,
      },
      sort: [["expenseDate", -1]],
    };
    let a = thingsColl.find(query, options);
    let totalThings = await a.count();
    a.toArray((err, things) => {
      if (err) return res.status(200).json([]);
      return res.status(200).json({ things, totalThings });
    });
  }

  router.get("/:id", (req, res, next) => {
    var query = { _id: new ObjectID(req.params.id) };
    thingsColl.findOne(query, (err, doc) => {
      if (err) {
        return res
          .status(401)
          .json({ Error: `Error al extraer el documento: ${err}` });
      }
      return res.status(200).json(doc);
    });
  });

  router.post("/", (req, res, next) => {
    var { _id, email } = req.user;
    var newElement = Object.assign({}, thingsStruct, req.body, {
      fecha: new Date().getTime(),
      by: {
        _id: new ObjectID(_id),
        email: email,
      },
    });

    thingsColl.insertOne(newElement, {}, (err, result) => {
      if (err) {
        return res.status(404).json({ Error: `No se pudo Insertar: ${err}` });
      }

      return res
        .status(200)
        .json({ n: result.inserteCount, obj: result.ops[0] });
    });
  });

  router.put("/:idElement", (req, res, next) => {
    var query = { _id: new ObjectID(req.params.idElement) };
    var update = { $set: req.body, $inc: { visited: 1 } };

    thingsColl.updateOne(query, update, (err, rst) => {
      if (err) {
        console.log(err);
        return res.status(400).json({ Error: `No se pudo actualizar: ${err}` });
      }

      return res.status(200).json(rst);
    });
  });

  router.delete("/:id", (req, res, next) => {
    var query = { _id: ObjectID(req.params.id) };
    thingsColl.removeOne(query, (err, result) => {
      if (err) {
        console.log(err);
        return res.status(400).json({ Error: `No se pudo eliminar ${err}` });
      }
      return res.status(200).json(result);
    });
  });

  return router;
}

module.exports = thingsInit;
