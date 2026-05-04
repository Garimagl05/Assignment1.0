const express = require('express');
const cors = require('cors');

const deviceRoutes = require('./routes/deviceRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/device', deviceRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});