const { Schema, model } = require('mongoose');
const bcrypt = require('bcyrpt');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.\..+/, 'Must match an email address!']
        },
        password: {
            type: String,
            required: true,
            minlength: 6
        },
        name: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        number: {
            type: Number,
            required: true
        },
        requests: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Request'
            }
        ],
        volunteer: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Volunteer'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// compare password with hashed password
userSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;