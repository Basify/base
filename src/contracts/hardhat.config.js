require('@nomicfoundation/hardhat-toolbox');
require('@nomiclabs/hardhat-ethers');
require('@openzeppelin/hardhat-upgrades');

/** @type import('hardhat/config').HardhatUserConfig */
require('dotenv').config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const BSC_MAINNET_KEY = process.env.BSC_MAINNET_KEY;
const POLYGON_API_KEY = process.env.POLYGON_API_KEY;
const MAINNET_API_KEY = process.env.MAINNET_API_KEY;
module.exports = {
  solidity: {
    version: '0.8.18',
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  etherscan: {
    apiKey: {
      bscTestnet: BSC_MAINNET_KEY,
      polygon: POLYGON_API_KEY,
      mainnet: 'fb394902-fd60-4a94-aa35-729ac1148662',
      bsc: BSC_MAINNET_KEY,
      sepolia: MAINNET_API_KEY,
    },
  },

  networks: {
    hardhat: {
      gas: 'auto',
    },

    ganache: {
      url: 'HTTP://127.0.0.1:8545',
      chainId: 1337,
      accounts: [PRIVATE_KEY],
      gas: 'auto',
    },

    bsc: {
      url: 'https://bsc-dataseed.binance.org/',
      chainId: 56,
      accounts: [PRIVATE_KEY],
    },

    bscTestnet: {
      url: 'https://data-seed-prebsc-1-s3.binance.org:8545/',
      chainId: 97,
      accounts: [PRIVATE_KEY],
    },
    polygon: {
      url: 'https://rpc.ankr.com/polygon',
      chainId: 137,
      accounts: [PRIVATE_KEY],
    },

    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/fQWpTJS6NYccPtDrvODYo64Be-EEA6Sf',
      chainId: 11155111,
      accounts: [PRIVATE_KEY],
    },
  },
};
