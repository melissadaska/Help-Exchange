const { Schema, model } = require('mongoose');
const moment = require('moment');
const volunteerSchema = require('./Volunteer');

const requestSchema = new Schema(
    {
        title: {
            type: String,
            required: 'You must leave a request!',
            trim: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => moment(timestamp).format('MMM Do, YYY [at] hh:mm a')
        },
        username: {
            type: String,
            required: true
        },
        volunteers: [volunteerSchema]
    },
    {
        toJSON: {
          getters: true
        }
    }
);

requestSchema.virtual('volunteerCount').get(function() {
    return this.volunteers.length;
});

const Request = model('Request', requestSchema);

module.exports = Request;
