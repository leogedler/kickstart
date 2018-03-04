#Kickstart complete Ethereum - React Project

This is a Crowdfunding app, It's in the early state, but functional. It Uses the Rinkeby test network to generate campaigns and get ETH. Its like kickstart but using Ethereum!.

### Development

- Two smart contract written with Solidity. One for create a Campaign other to deploy the Campaign into the network.
- Compiled using Solc v0.4.19.
- It used web3 dependency injection to get access to the user MetaMask account.
- Tested using mocha and ganache.
- The frontend uses react with Next.js.

### Usage

- An user can create a Campaign and specify the manager.
- Users can contribute to the Campaign sending ETH to the Campaign contract.
- The manager can generate requests to use the ETH in the Campaign.
- The users that had contribuite to the Campaign can vote whether they agree or not to the resquest made by the manager.