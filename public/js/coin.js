// API routes variables
// Get only the latest coins and their data
const coinLatestRoute = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=e3efea13-b74b-49bc-9eec-95f5d0473a69`;
// Get information for a single coin by providing its id
const coinSingleRoute = `https://api.coingecko.com/api/v3/coins/`;

// GET fetch only the latest coin
const coinLatest = async () => {
    const response = await fetch(coinLatestRoute, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    if (response.ok) {
        const json = await response.json();
        let data = json.data;
        console.log(data);
        return data;
    } else {
        alert('The action could not be completed. Please try again later.');
    }
};

// GET all the info for one coin
const coinSingle = async (id) => {
    const response = await fetch(`${coinSingleRoute}${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    if (response.ok) {
        const json = await response.json();
        console.log(json);
        return json;
    } else {
        alert('The action could not be completed. Please try again later.');
    };
};
