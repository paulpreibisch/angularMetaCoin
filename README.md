# Angular Truffle Meta Coin 
This repo is a good starting point for angular developers interested in creating
smart contracts on the Ethereum Blockchain.

What I have done is simply wrap the code generated by the [Truffle](https://github.com/ConsenSys/truffle)
framework, from their command "truffle init" into an AngularJs application.

The reason I did this, is because creating front-end logic using Angular is much easier than 
using the plain old Javascript, that Truffle generates. 

Hopefully, this will help in kickstarting your Smart Contract Development in Angular! 

## Dependencies
* [Node.js & npm](https://nodejs.org)
* [Truffle](https://github.com/ConsenSys/truffle)
* [Geth](https://github.com/ethereum/go-ethereum/wiki/geth) or [testrpc](https://github.com/ethereumjs/testrpc)
* [Bower](https://bower.io/)

## Build
Before you are able to run the Angular app, you will need run the following
* cd truffle/app
* bower install

This will install all the angular dependencies in truffle/app/bower_components 

## Run
To run
*  `truffle build`
*  `truffle serve`
Then go to: http://localhost:8080

Note: If you get a port error, you can run truffle on a different port
*  `truffle -p 8081 serve`

## Preview


## Todo

## License
[MIT](https://github.com/paulpreibisch-io/angular_blockchain_marketplace/blob/master/LICENSE)
