const db = require('../db/connection');
const getInventoryDetails = (startDate, endDate, callback) => {
    const query = `
        SELECT i.id, i.purchase_dt, i.cost, d.inventory_details
        FROM invent i
        JOIN inventdetails d ON i.id = d.inventory_id
        WHERE i.purchase_dt BETWEEN ? AND ?
    `;

    db.query(query, [startDate, endDate], (err, results) => {
        if (err) return callback(err, null);
        return callback(null, results);
    });
};
module.exports = { getInventoryDetails };