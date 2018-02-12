import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xcC7e726F0d37B3518625c1D057D46Eda91A90AC4'
);

export default instance;

