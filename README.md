# Product options component

 Module to select quantity, color or size before adding an item to the registry.

#### Demo: (http://g.recordit.co/bhIaDImKTE.gif)

------

## Installation

### Server

#### Setup

Go into server folder

run  `npm install` to install dependencies

Make sure to have MySQL installed then run `MySQL` then run the following in a MySQL terminal:

`CREATE DATABASE options;USE options;`

run `npm run seed`

if getting any errors:


`USE options;SET FOREIGN_KEY_CHECKS = 0;TRUNCATE TABLE Stocks;TRUNCATE TABLE Products;TRUNCATE TABLE Stores;`

run `npm run seed` again

#### Endpoints

`/api/products`
* GET all products
* POST new product, needs `productName` and `price` keys in the request body

`/api/products/:id`
* DELETE product at that id
* PUT product updates, needs `productName` and / or `price` keys in the request body

## Client

Go into client folder

run  `npm install` to install dependencies
run `npm run build` to build the webpack

You should be all set!