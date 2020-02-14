export default async (coin, c) => {
    console.log(coin, c)
    return await fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coin}&tsyms=${c}`) //coin=> BTC | c => USD,EUR,RUB
        .then(r => r.json())
        .then(r => r)
}

//https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD,EUR,RUB