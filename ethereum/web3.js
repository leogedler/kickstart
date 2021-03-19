import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // We are in the browser
    web3 = new Web3(window.web3.currentProvider);
}else{
    // We are on the server or the user is not running metmask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/2d2caf20b1ee44b7a6e172ed46e24510'
    );

    web3 = new Web3(provider);
}

export default web3;