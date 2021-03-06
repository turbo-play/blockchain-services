const ropstenInfuraProvider = require('../config.js').web3Provider;
const mnemonic = require('..config.js').mnemonic;
const HDWalletProvider = require('truffle-hdwallet-provider');
module.exports = {
  networks: {
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, ropstenInfuraProvider);
      },
      network_id: '3'
    },
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*', // Match any network id,
      gas: 6721975,
      gasLimit: 1000000000
    }
  },
  solc: {
    // Turns on the Solidity optimizer. For development the optimizer's
    // quite helpful, just remember to be careful, and potentially turn it
    // off, for live deployment and/or audit time. For more information,
    // see the Truffle 4.0.0 release notes.
    //
    // https://github.com/trufflesuite/truffle/releases/tag/v4.0.0
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
};
