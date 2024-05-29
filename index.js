const express = require('express');
const serverless = require('serverless-http');
const connectDB = require('./config/database');
const subscriberRoutes = require('./routes/subscriberRoutes');
require('./service/emailService');
require('./service/userService');
const dotenv = require('dotenv');
const apiVersion = process.env.API_VERSION || 'v1';
dotenv.config();

const app = express();
app.use(express.json());

connectDB();

app.get('/test', (req, res) => {
    res.send('OK');
});
app.use('/'+apiVersion, subscriberRoutes);


if (process.env.IS_SERVERLESS) {
    module.exports.handler = serverless(app);
  } else {
    app.listen(3000, () => console.log('Server running on port 3000'));
  }