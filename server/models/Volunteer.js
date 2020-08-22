const { Schema, model } = require('mongoose');
const moment = require('moment');

const volunteerSchema = new Schema(
    {
        username: {
            type: String,
            required: true
        },
        available: {
            type: Date,
            default: Date.now,
            get: timestamp => moment(timestamp).format('MMM Do, YYYY [at] hh:mm a')
        }
    },
    {
        toJSON: {
          getters: true
        }
      }
);

const Volunteer = model('Volunteer', volunteerSchema);

module.exports = Volunteer;