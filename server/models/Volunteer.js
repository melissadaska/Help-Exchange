const { Schema } = require('mongoose');
const moment = require('moment');

const volunteerSchema = new Schema(
    {
      volunteerBody: {
        type: String,
        required: true,
        maxlength: 280
      },
      username: {
          type: String,
          required: true
      },
      createdAt: {
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

// const Volunteer = model('Volunteer', volunteerSchema);

module.exports = volunteerSchema;