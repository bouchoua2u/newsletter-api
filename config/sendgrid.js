const sendgridMail = require('@sendgrid/mail');
const dotenv = require('dotenv');

dotenv.config();

sendgridMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = sendgridMail;