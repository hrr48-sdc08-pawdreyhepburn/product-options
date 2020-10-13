## Product options component

 Module to select quantity, color or size before adding an item to the registry.

#### Demo: (http://g.recordit.co/bhIaDImKTE.gif)

------

### Installation

#### Server:

Go into server folder

run  `npm install` to install dependencies

Make sure to have MySQL installed then run `MySQL` then run the following in a MySQL terminal:

`CREATE DATABASE options;USE options;`

run `npm run seed`

if getting any errors:


`USE options;SET FOREIGN_KEY_CHECKS = 0;TRUNCATE TABLE Stocks;TRUNCATE TABLE Products;TRUNCATE TABLE Stores;`

run `npm run seed` again


#### Client:

Go into client folder

run  `npm install` to install dependencies
run `npm run build` to build the webpack

You should be all set!