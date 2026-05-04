const db = require('../db/connection');

const deviceConfigNotification = (callback) => {

    const query = `
        SELECT id, device_ip, device_details
        FROM Devices
        WHERE config_changed = true
    `;

    db.query(query, (err, results) => {
        if (err) return callback(err, null);

        return callback(null, results);
    });
};

module.exports = { deviceConfigNotification };