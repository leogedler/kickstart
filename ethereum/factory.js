import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x64c81aB63162b843b3102F0E6b464D30a011f530'
);

export default instance;

