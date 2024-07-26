require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["0x17debb8e887f234ac1d6aae3a240f8fd6a62eaaf23627fd169a5332fdc9f8a2f"]
    },
  },
};
