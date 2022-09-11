// // get coin list to fetch all the possible coins
// const { CoinList } = require('../../models');

// // Get current data for an individual coin
// // This only supports symbol for MVP (exp: symbol=BTC (and not bitcoin))
// const coin = async (coinSymbol) => {

//   // find the id for the coin symbol that user chose
//   const coinData = await CoinList.findOne({ where: { symbol: coinSymbol } });

//   if (!coinData) {
//     res
//       .status(400)
//       .json({ message: 'No such a coin' });
//     return;
//   } else {
//     console.log(coinData);
//   }

  


//   const response = await fetch('https://api.coingecko.com/api/v3/ping', {
//     method: 'GET',
//     headers: { 'Content-Type': 'application/json' },
//   });

//   if (response.ok) {
//     console.log(response);
//   } else {
//     alert(response.statusText);
//   }
// };

// document.querySelector('.coinTest').addEventListener('click', coin);

