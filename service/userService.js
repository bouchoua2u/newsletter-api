const Subscriber = require('../models/subscriber');
const myEmitter = require('../events/eventEmitter');

class UserService {
    async findAndPersistUser(email) {
        const user = await Subscriber.findOne({ email });

        if (user) {
            return false;
        } else {
            const newUser = new Subscriber({ email });
            await newUser.save();
            myEmitter.emit('sendEmail', { email });
            return true;
        }
    }
}

module.exports = new UserService();