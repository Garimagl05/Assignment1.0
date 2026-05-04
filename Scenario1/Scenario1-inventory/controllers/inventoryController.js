const ap = require('../services/inventoryService');

const getdetails = (req, res) => {
    const { startDate, endDate } = req.query;
    ap.getInventoryDetails(startDate, endDate, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(result);
    });
};
module.exports = { getdetails };