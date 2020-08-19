const { Schema, model } = require('mongoose');
const moment = require('moment');

const requestSchema = new Schema(
    {
        title: {
            type: String,
            required: 'You must leave a request!',
            trim: true
        },
        why: {
            type: String,
            required: 'false',
            trim: 'true'
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => moment(timestamp).format('MMM Do, YYY [at] hh:mm a')
        },
        username: {
            type: String,
            required: true
        }
    },
    {
        toJSON: {
          getters: true
        }
      }
);

requestSchema.virtual('requestCount').get(function() {
    return this.request.length;
});

const Request = model('Request', requestSchema);

module.exports = Request;