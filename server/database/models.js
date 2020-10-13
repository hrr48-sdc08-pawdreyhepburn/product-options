const db = require('./index.js');
const {Sequelize, DataTypes} = require('sequelize');


const Product = db.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  reviews: {
   type: DataTypes.FLOAT,
    defaultValue: 0
  },
  reviewCount: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
})
const Store = db.define('Store', {
  location: {
    type: DataTypes.STRING,
    allowNull: false,
    // unique: true
  }
});

const Stock = db.define('Stock', {
  color: {
    type: DataTypes.STRING
  },
  colorUrl: {
    type: DataTypes.STRING
  },
  size: {
    type: DataTypes.STRING
  },
  qty: {
   type: DataTypes.INTEGER,
    defaultValue: 0
  }
});

// set up foreign keys and two way association
Product.hasMany(Stock);
Store.hasMany(Stock);
Stock.belongsTo(Product);
Stock.belongsTo(Store);


Product.sync();
Stock.sync();
Store.sync();

const models = {Product, Stock, Store};

module.exports = models;
