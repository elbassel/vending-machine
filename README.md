# Appetito
Coding challenge
## The problem:
Task: Vending Machine:
1. implement a vending machine that has a bunch of products like chocolate , candy , cold-drinks and accept coins and paper money
2. make sure that when you insert money you get your product back


## The solution:
Focuses on Backend only

## Functionalities through API:
- Loading products
- Placing order

## Technologies
Nodejs, Expressjs, MongoDB, Mongoose, Mocha, Sinon, Docker, Docker Compose

## Technical descisions:
- Most of the classes depends on the Single responsibility concept.
- Generated unique key based bcrypt package.
- Express, is a very lightweight web framework.
- MongoDB one of the most famous document database.
- Mocha, Sinon for unit testing.
- Express generator, to generate a simple boiler plate

## Linked:
https://www.linkedin.com/in/ahmed-elbassel/


## API Documentation
localhost:3000/docs



## Initial data
A script is used to store 20 products for the first time app runs to allow you to use rest of APIs.

## Run App
- Clone the repo, and go inside it then the below command, if the commands don't run, try it with sudo:
```
git@github.com:elbassel/vending-machine.git
cd vending-machine
docker-compose build
docker-compose up
```
- Check localhost:3000/docs for API documentation

## Run tests
```
npm run test
```
##Run COde coverage:
Yoy can find the result under coverage folder
```
npm run coverage
```

