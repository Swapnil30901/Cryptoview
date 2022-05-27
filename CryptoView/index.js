function convertToJson(response) {
    return response.json()
}

function showData(data) {
    const bitcoin_price_container = document.getElementById("bitcoin_price_container");
    const binance_price_container = document.getElementById("binance_price_container");
    const cardano_price_container = document.getElementById("cardano_price_container");
    const doge_price_container = document.getElementById("doge_price_container");
    const ethereum_price_container = document.getElementById("ethereum_price_container");
    const helium_price_container = document.getElementById("helium_price_container");
    const polkadot_price_container = document.getElementById("polkadot_price_container");
    const litecoin_price_container = document.getElementById("litecoin_price_container");
    const solana_price_container = document.getElementById("solana_price_container");
    const stellar_price_container = document.getElementById("stellar_price_container");
    const tether_price_container = document.getElementById("tether_price_container");

    bitcoin_price_container.innerText = data.bitcoin.inr;
    binance_price_container.innerText = data.binancecoin.inr;
    cardano_price_container.innerText = data.cardano.inr;
    doge_price_container.innerText = data.dogecoin.inr;
    ethereum_price_container.innerText = data.ethereum.inr;
    helium_price_container.innerText = data.helium.inr;
    polkadot_price_container.innerText = data.polkadot.inr;
    litecoin_price_container.innerText = data.litecoin.inr;
    solana_price_container.innerText = data.solana.inr;
    stellar_price_container.innerText = data.stellar.inr;
    tether_price_container.innerText = data.tether.inr;
    console.log(data);
}



fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Ctether%2Cpolkadot%2Cbinancecoin%2Chelium%2Ccardano%2Csolana%2Clitecoin%2Cstellar&vs_currencies=inr").then(convertToJson).then(showData);