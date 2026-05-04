const service = require('../services/deviceService');

const deviceConfigNotification = (req, res) => {

    service.deviceConfigNotification((err, result) => {

        if (err) {
            return res.status(500).json({ error: err.message });
        }

        // If no devices changed
        if (result.length === 0) {
            return res.json({
                message: "No configuration changes detected"
            });
        }

        // Notification response
        res.json({
            notification: "Device configuration changed",
            devices: result
        });
    });
};

module.exports = { deviceConfigNotification };