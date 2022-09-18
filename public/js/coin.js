// API routes:
// Get only the latest coins and their data
const coinAPIKey = process.env.APIKEY;
const coinLatestRoute = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${coinAPIKey}`;
// Get information for a single coin by providing its id
const coinSingleRoute = `https://api.coingecko.com/api/v3/coins/`;


// Get only the latest coin
const coinLatest = async () => {
    const response = await fetch(coinLatestRoute, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    if (response.ok) {
        const json = await response.json();
        let data = json.data
        console.log(data);
        return data;
    } else {
        alert('The action could not be completed. Please try again later.');
    }
}


// Get all the info for one coin
const coinSingle = async (id) => {
    const response = await fetch(`${coinSingleRoute}${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    if (response.ok) {
        const json = await response.json();
        console.log(json);
        return json;
    } else {
        alert('The action could not be completed. Please try again later.');
    }
}


// Testing
// document.querySelector('.coinTest').addEventListener('click', coinLatest);
// document.querySelector('.coinTest').addEventListener('click', function () { coinSingle("ethereum") });

