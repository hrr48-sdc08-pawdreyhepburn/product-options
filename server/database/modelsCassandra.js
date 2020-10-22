const db = require('./indexC.js');

const Stock = db.loadSchema('stock', {
  fields: {
      product_id: "int",
      uniq_id: "uuid",
      name: "text",
      location: "text",
      color: "text",
      colorurl: "text",
      size: "text",
      qty: "int"
  },
  key: [["product_id"], "name"],
  clustering_order: {"name": "desc"}
});

const Products = db.loadSchema('products', {
  fields: {
    id: "int",
    name: "text",
    price: "decimal",
    reviews: "decimal",
    reviewcount: "int"
  },
  key: ["id"]
});

const Stores = db.loadSchema('stores', {
  fields: {
    id: "int",
    location: "text"
  },
  key: ["id"]
});
// Stock.syncDB(function(err, result) {
//   if (err) throw err;
//   // result == true if any database schema was updated
//   // result == false if no schema change was detected in your models
// });

const models = { Stock, Products, Stores };

module.exports = models;