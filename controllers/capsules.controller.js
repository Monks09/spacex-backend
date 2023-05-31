const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

async function getCapsulesData(page, status, reuse_count, type) {

    let perPage = 6;
    let offsetValue = (page - 1) * perPage;

    let url;

    // setting the url according to query params passed
    if (!status && !reuse_count && !type) {
        url = `https://api.spacexdata.com/v3/capsules?limit=${perPage}&offset=${offsetValue}`;
    }
    else if (!status && !reuse_count && type) {
        url = `https://api.spacexdata.com/v3/capsules?limit=${perPage}&offset=${offsetValue}&type=${type}`;
    }
    else if (!status && reuse_count && !type) {
        url = `https://api.spacexdata.com/v3/capsules?limit=${perPage}&offset=${offsetValue}&reuse_count=${reuse_count}`;
    }
    else if (!status && reuse_count && type) {
        url = `https://api.spacexdata.com/v3/capsules?limit=${perPage}&offset=${offsetValue}&reuse_count=${reuse_count}&type=${type}`;
    }
    else if (status && !reuse_count && !type) {
        url = `https://api.spacexdata.com/v3/capsules?limit=${perPage}&offset=${offsetValue}&status=${status}`;
    }
    else if (status && !reuse_count && type) {
        url = `https://api.spacexdata.com/v3/capsules?limit=${perPage}&offset=${offsetValue}&status=${status}&type=${type}`;
    }
    else if (status && reuse_count && !type) {
        url = `https://api.spacexdata.com/v3/capsules?limit=${perPage}&offset=${offsetValue}&status=${status}&reuse_count=${reuse_count}`;
    }
    else {
        url = `https://api.spacexdata.com/v3/capsules?limit=${perPage}&offset=${offsetValue}&status=${status}&reuse_count=${reuse_count}&type=${type}`;
    }

    let response = await fetch(url);

    let data = await response.json();

    return data;
}

module.exports = { getCapsulesData }