const faker = require('faker');

const db = require('../config/connection');
const { User } = require('../models');

db.once('open', async () => {
    // await User.remove({});
    // await Request.remove({});
    // await Volunteer.remove({});

    // create user data
    const userData = [];

    for (let i = 0; i < 10; i += 1) {
        const username = faker.internet.userName();
        const email = faker.internet.email(username);
        const password = faker.internet.password();
        const location = faker.address.streetAddress();
        const number = faker.phone.phoneNumber();
        const name = faker.name.findName();

        userData.push({ username, email, password, location, number, name });
    }

    const createdUsers = await User.insertMany(userData);

    console.log('all done!');
    process.exit(0);
});