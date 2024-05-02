require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
    defaultNetwork: "matic",
    networks: {
      hardhat: {},
      polygon_mumbai: {
        url: "https://polygon-mainnet.g.alchemy.com/v2/0LnmxZwHbHtbvQCiGDpRziHxWNLbsRz-",
        accounts: [`0x${"912c43b32ed0483f5fad1cf4b6d7ebf5aacee55658aa6f0cc5503c3997052635"}`],
      },
    },
};
