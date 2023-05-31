const express = require('express');

const { getCapsulesData } = require('../controllers/capsules.controller');

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        let page = req.query.page || 1;
        let { status, reuse_count, type } = req.query;
        let data = await getCapsulesData(page, status, reuse_count, type);

        res.status(200).send({
            'message': 'Here are all the capsules',
            capsules: data,
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).send('Something went wrong');
    }
})

module.exports = router;