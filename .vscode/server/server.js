// const express = require('express');
// const axios = require('axios');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();
// app.use(cors()); // Enable CORS for frontend requests

// const PORT = 3000;

// app.get('/api/orders', async (req, res) => {
//     const apiKey = process.env.SHOPIFY_API_KEY;
//     const password = process.env.SHOPIFY_API_PASSWORD;
//     const storeName = process.env.SHOPIFY_STORE_NAME;
//     const apiVersion = '2023-01';

//     const url = `https://${apiKey}:${password}@${storeName}.myshopify.com/admin/api/${apiVersion}/orders.json`;

//     try {
//         const response = await axios.get(url, {
//             params: {
//                 status: 'any',
//                 limit: 10, // Adjust limit as needed
//             },
//         });
//         const orders = response.data.orders.map(order => ({
//             id: order.id,
//             name: order.name,
//             customer: order.customer ? order.customer.first_name : 'Guest',
//         }));
//         res.json(orders);
//     } catch (error) {
//         console.error('Error fetching orders:', error);
//         res.status(500).send('Error fetching orders');
//     }
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });
