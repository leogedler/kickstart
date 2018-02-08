const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
    'under reopen child knee horn silver trim cannon brief heart wish witness',
    'https://rinkeby.infura.io/qCPxJQV2ZokAOV6SzbMG'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Deployment Account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: compiledFactory.bytecode })
        .send({ gas: '1000000', from: accounts[0]});

    console.log('Contract deployed to:', result.options.address); 
    
};
deploy();

// Contract address
// 0x64c81aB63162b843b3102F0E6b464D30a011f530