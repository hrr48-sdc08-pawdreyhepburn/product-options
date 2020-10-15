const express = require('express');
const app = express();
const port = 3002;

const db = require('./database/models');
const data = require('./data/testData.js');
const path = require('path');
const { QueryTypes } = require('sequelize');
const sequelize = require('./database/index.js');
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, '../client/public/dist')))


// getting all products data from DB
app.get('/products', async (req, res) => {
    try {
      const data = await db.Product.findAll({
        attributes: {exclude: ['createdAt', 'updatedAt']}
      })
      res.send(data);
    } catch (e) {
    console.error(e)
    }
})





  // getting a specific product's data from the DB
app.get('/products/:productId', async (req, res) => {
  const data = await db.Product.findAll({
    where: {
      id: req.params.productId
    },
    attributes: {exclude: ['createdAt', 'updatedAt']}
  })
    res.send(data[0]);
  })


// get all available stock using raw SQL query with inner joins
app.get('/stock', async (req, res) => {
  try {

  const stocks = await sequelize.query("\
  SELECT Stocks.id, Products.name, Stores.location, Stocks.color, \
  Stocks.size, Stocks.qty, Products.id as productId \
  FROM Stocks INNER JOIN Stores ON Stores.id = Stocks.storeId \
  INNER JOIN Products ON Stocks.productId = Products.id",
  {type: QueryTypes.SELECT});

    await res.send(stocks);
  } catch (e) {
    console.log(e);
  }

  })


  // get a specific product's stock using raw SQL query with inner joins
app.get('/stock/:productId', async (req, res) => {

  const stocks = await sequelize.query(`\
  SELECT Stocks.id, Products.name, Stores.location, Stocks.color, \
  Stocks.colorUrl, Stocks.size, Stocks.qty, Products.id as productId \
  FROM Stocks INNER JOIN Stores ON Stores.id = Stocks.storeId \
  INNER JOIN Products ON Stocks.productId = Products.id \
  WHERE Stocks.productId = ${[req.params.productId]}`,
  {type: QueryTypes.SELECT});

    await res.send(stocks);
  })

  // getting all Stores data from DB
app.get('/stores', async (req, res) => {
  const data = await db.Store.findAll({
    attributes: {exclude: ['createdAt', 'updatedAt']}
  })
    res.send(data);
  })

  // get a store's data
app.get('/stores/:storeId', async (req, res) => {
  const data = await db.Store.findAll({
    where: {
      id: req.params.storeId
    },
    attributes: {exclude: ['createdAt', 'updatedAt']}
  })
    res.send(data[0]);
})



  // ------------------ getting stock data using sequelize methods ----------------
  // app.get('/stock', async (req, res) => {
  //     const data = await db.Stock.findAll({
  //   attributes: {exclude: ['createdAt', 'updatedAt']},
  //   include: [{
  //     model: db.Store,
  //     attributes: {exclude: ['createdAt', 'updatedAt']},
  //     required: false,
  //   }, {
  //         model: db.Product,
  //         attributes: {exclude: ['createdAt', 'updatedAt']},
  //         require: false
  //       }]
  // })
  //     await res.send(data);
  //   })



  // ------------------ added CRUD endpoints ------------------ //

app.get('/api/products', (req, res) => {
  db.Product.findAll()
    .then((products) => {
      res.send(products);
    })
    .catch((err) => {
      console.log(err);
      res.send('Error in getting all products.');
    });
});

app.post('/api/products', (req, res) => {
  db.Product.create({
    name: req.body.productName,
    price: req.body.price
  })
    .then((results) => {
      console.log('Product added!');
      res.send(results);
    })
    .catch((err) => {
      console.log(err);
      res.send('Error creating new product.');
    });
});

app.delete('/api/products', (req, res) => {
  db.Product.destroy({
    where: {
      id: req.body.id
    }
  })
    .then(() => {
      console.log('Product deleted!');
      res.json('Product deleted!');
    })
    .catch((err) => {
      console.log(err);
      res.send('Error deleting new product.');
    });
});

app.put('/api/products/:id', (req, res) => {
  db.Product.update({
    name: req.body.productName,
    price: req.body.price
  }, {
    where: {
      id: req.params.id
    }
  })
    .then((updatedItem) => {
      console.log('Product updated!')
      res.send(updatedItem);
    })
    .catch((err) => {
      console.log(err);
      res.send('Error in updating product!')
    })
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
});
