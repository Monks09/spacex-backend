const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

async function getCapsulesData(page, status, original_launch, type) {

    let perPage = 10;
    let offsetValue = (page - 1) * perPage;

    let url;

    // setting the url according to query params passed
    if (!status && !original_launch && !type) {
        url = `https://api.spacexdata.com/v3/capsules?limit=${perPage}&offset=${offsetValue}`;
    }
    else if (!status && !original_launch && type) {
        url = `https://api.spacexdata.com/v3/capsules?limit=${perPage}&offset=${offsetValue}&type=${type}`;
    }
    else if (!status && original_launch && !type) {
        url = `https://api.spacexdata.com/v3/capsules?limit=${perPage}&offset=${offsetValue}&original_launch=${original_launch}`;
    }
    else if (!status && original_launch && type) {
        url = `https://api.spacexdata.com/v3/capsules?limit=${perPage}&offset=${offsetValue}&original_launch=${original_launch}&type=${type}`;
    }
    else if (status && !original_launch && !type) {
        url = `https://api.spacexdata.com/v3/capsules?limit=${perPage}&offset=${offsetValue}&status=${status}`;
    }
    else if (status && !original_launch && type) {
        url = `https://api.spacexdata.com/v3/capsules?limit=${perPage}&offset=${offsetValue}&status=${status}&type=${type}`;
    }
    else if (status && original_launch && !type) {
        url = `https://api.spacexdata.com/v3/capsules?limit=${perPage}&offset=${offsetValue}&status=${status}&original_launch=${original_launch}`;
    }
    else {
        url = `https://api.spacexdata.com/v3/capsules?limit=${perPage}&offset=${offsetValue}&status=${status}&original_launch=${original_launch}&type=${type}`;
    }

    let response = await fetch(url);

    let data = await response.json();

    return data;
}

module.exports = { getCapsulesData }