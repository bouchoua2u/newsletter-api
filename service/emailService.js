const myEmitter = require('../events/eventEmitter');
const sendgridMail = require('../config/sendgrid');

class EmailService {
    constructor() {
        myEmitter.on('sendEmail', this.sendConfirmationEmail);
    }

    sendConfirmationEmail({ email }) {
        const msg = {
            to: email,
            from: process.env.EMAIL_FROM,
            subject: 'Subscription Confirmation',
            text: `Thank you for subscribing to our newsletter.`,
            html: `<strong>Thank you for subscribing to our newsletter.</strong>`,
        };

        sendgridMail.send(msg)
            .then(() => {
                console.log(`Email sent to ${email}`);
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });
    }
}

module.exports = new EmailService();