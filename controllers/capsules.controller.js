const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

async function getCapsulesData(page) {

    let perPage = 10;
    let offsetValue = (page - 1) * perPage;

    let response = await fetch(`https://api.spacexdata.com/v3/capsules?limit=${perPage}&offset=${offsetValue}`);

    let data = await response.json();

    return data;
}

module.exports = { getCapsulesData }