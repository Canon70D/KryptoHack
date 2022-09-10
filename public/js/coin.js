const coin = async () => {
    const response = await fetch('https://api.coingecko.com/api/v3/ping', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      console.log(response);
    } else {
      alert(response.statusText);
    }
  };
  
  document.querySelector('.coinTest').addEventListener('click', coin);

// //1. Import coingecko-api
// const CoinGecko = require('coingecko-api');

// //2. Initiate the CoinGecko API Client
// const CoinGeckoClient = new CoinGecko();

// //3. Make calls
// var func = async() => {
//   let data = await CoinGeckoClient.ping();
// };

