const express= require('express');
const app= express();
const cors= require('cors');
const inventoryRoutes= require('./routes/inventoryRoutes');

app.use(cors());

app.use(express.json());
app.use('/api/inventory',inventoryRoutes);
app.listen(3000, () => {
    console.log("Server Running on port: 3000");
});