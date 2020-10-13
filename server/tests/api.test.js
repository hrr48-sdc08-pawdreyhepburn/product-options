const axios = require('axios');

const product = {
  id: expect.any(Number),
  name: expect.any(String),
  price: expect.any(Number),
  reviews: expect.any(Number),
  reviewCount: expect.any(Number)
}

const stock = {
  id: expect.any(Number),
  name: expect.any(String),
  location: expect.any(String),
  color: expect.any(String),
  size: expect.any(String),
  qty: expect.any(Number),
  productId: expect.any(Number)
}

test(`requesting all products to return an array with the defined properties`, () => {
return axios.get('http://localhost:3000/products')
  .then( response => {
    response.data.forEach( item => {
      expect(item).toMatchObject(product);
    })
  })
  .catch(err => {
    throw(err);
  })
})

test(`requesting a product's information to return only 1 product
with the defined properties`, () => {
    return axios.get(`http://localhost:3000/products/1`)
    .then( (results) => {
      expect(results.data).toMatchObject(product);
    })
    .catch((err) => {
      throw(err);
    })
})

test(`requesting all available stock should return an array objects
having the defined stock properties`, () => {
  return axios.get('http://localhost:3000/stock')
  .then( response => {
    response.data.forEach( item => {
      expect(item).toMatchObject(stock);
    })
  })
  .catch(err => {
    throw(err);
  })
})

test(`requesting a specific product's stock should return an array objects having
the requested products id and contain the stock information`, () => {
return axios.get('http://localhost:3000/stock/1')
  .then( response => {
    response.data.forEach( item => {
      expect(item.productId).toEqual(1);
      expect(item).toMatchObject(stock);
    })
  })
  .catch(err => {
    throw(err);
  })
})
