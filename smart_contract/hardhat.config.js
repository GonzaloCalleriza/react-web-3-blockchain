require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten:{
      url: 'https://eth-ropsten.alchemyapi.io/v2/-nP3rrRNXIYMqhgnFXGmzHUVcnS4Ouxs',
      accounts: ['969ed1deb8c19d59f8a3b1f16783a3f867c6a4cf931208595934708bf9edc5be']
    }
  }
}