require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace creek olympic short north rescue spawn pumpkin hunt lock bottom top'; 
let testAccounts = [
"0xe704f20706d0fe1711f9b4544919f5b7959409d67057ed588d2ebdc1c292df2d",
"0x996b7848741f9cbda5dde61a4a8d6009bf86ef1dbb34ca78edeafcc6c5dff087",
"0xca181d858aa3ac3f1acf8a9d3ba1e60807a6b4148aa2a27f3cb42147c7df86cb",
"0xe9bffc58acc085f72c680b6ccc8a2357313bcc58d6ea9899b063c5e3937de9be",
"0x74689706ceafb0e99eb4441b6c569933b4e582bf71a1090ff38e01200006a2e2",
"0x5faa5dbf4bd70d87a344ab05f941f7d56d60f61da9331e0059a7ee0064bebc13",
"0x9b48a20b837fef19d089ba2955657e140e050bc353b47221b6f5c9f6d0338e3c",
"0xbba3b71efb20182b4cda4a22f8fa33ee127cb9b04cca52eedfb381d14017ef3a",
"0xff6db0f9fcc8e69faf60b040f0583ef5cbbcba1794564df3d9589f2bd391aa49",
"0x19b21ebbdf8ff43e0218bd31020b84ef80e088d04d053d7d4b1642b8198c0414"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

