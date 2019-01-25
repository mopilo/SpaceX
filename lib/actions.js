
//all fares is in BTC

module.exports = {
    royalty:  async function (wallet, fare){
        return wallet - fare
    },
    sameLocation: async function (wallet, fare){
        return wallet - fare
    },
    crossOrbit: async function (wallet, fare){
        return wallet - fare
    }
}


