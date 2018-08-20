# vendingMachineJS

This project's goal is to design a vending machine using only JavaScript.
To access the vending machine, clone the repository.

clone the repo

To run the tests, navigate to the `lib` directory. 

Type `npx jest vending machine` in the terminal.

To interact with the program, navigate to the `lib` directory. 

Insert coins, choose products, receive change. 

Explore the machine. Insert coins, choose products, collect change.

### Notes on development

#### step 0 - Test Driven Development

  Set up Jest for vendingMachine.js, coin.js, product.js etc ...

#### step 1 - Accept coins

Machine accepts valid coins
* nickels
* dimes
* quarters
* toonies
* loonies
  Machine reject invalid coins
* returns pennies
  
Coins have attributes
* value
* name
#### step 2 - Select a product
  user can select a product based on slot number
* coke - 2
* pepsi - 2
* sprite - 2
#### step 3 - Make Change

  If user inserts more money than the cost of the product
* deposit proper amount of coins in coin collection
* return change

#### step 4 - Sold out
If inventory is empty 
* Display SOLD OUT

