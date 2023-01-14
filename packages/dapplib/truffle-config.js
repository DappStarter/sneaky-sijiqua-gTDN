require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict industry flame street name rifle pizza essay imitate prison equal giant'; 
let testAccounts = [
"0x7e4ea8bd11a3a8a83d33044b5b2b88776051b0af92ac726204075c6730faafb9",
"0x855b6970ce80a7212a39d34c632e6bf942ffb4e045d19dfb8010ce5f4fd081ba",
"0x50c06a5c65f423b3e4f5ff7742e810901fb35098717abd448c82a59b3873da6c",
"0x16bf031f6712128fa1b1ed44a432302b9e39989c150782fca866ec91315dd38f",
"0xdc85a1a4476e296620f259c78d8b8aa4fa1a826ae1c26a3f498bc9af85a8dd95",
"0x5a9175d76475ff5545f4ebeafa205580b10b9f34e56d4c422d38999ce91d1986",
"0xebb5b5cd4fdf2f6bfbb5ddcf828f01dfac87193e44cdbcf6341f9c22d50b0378",
"0x2ce27f6dee5571976027dbd8c28f1619c8b6e51536c25ed06b54ed4bcf7a4c08",
"0x3e3a09dcbae6f28b4dfcc7633f77bddf6437ace7237363adbaa2cf781654c29d",
"0xc896cce215367a518026914ed1a700a886325f18dd0ec8f942a162cd9395077f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

