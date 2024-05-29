// subscriberController.js
const userService = require('../service/userService');
require('../service/emailService'); 

class SubscriberController {
    async subscribe(req, res) {
        const { email } = req.body;

        try {
            const userPersisted = await userService.findAndPersistUser(email);

            if (userPersisted) {
                res.status(200).send({ message: `Subscription successful.`, email: email });
            } else {
                res.status(409).send({ message: `User with email ${email} already exists.` });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}

module.exports = new SubscriberController();