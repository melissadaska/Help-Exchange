const { User, Request, Volunteer } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('requests')
                    .populate('volunteer');

                return userData;
            }

            throw new AuthenticationError('Not logged in');
        },

        requests: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Request.find(params).sort({ createdAt: -1 });
        },

        request: async (parent, { _id }) => {
            return Request.findOne({ _id });
        },

        volunteer: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Volunteer.find(params)
        },

        // get all users
        users: async () => {
            return User.find()
            .select('-__v -password')
            .populate('requests')
            .populate('volunteer');
        },

        // get user by username
        user: async (parent, { username }) => {
            return User.findOne({ username })
            .select('-__v -password')
            .populate('requests')
            .populate('volunteer');
        }
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        deleteUser: async (parent, args, context) => {
            if (context.user) {
                const deletedUser = await User.findIdAndUpdate({ ...args, user: context.user.userId });
                
                await User.findByIdAndUpdate(
                    { _id: userId },
                    { $push: { user: userId._id } },
                    { new: true }
                );

                return deletedUser
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },
        addRequest: async (parent, args, context) => {
            if (context.user) {
                const request = await Request.create({ ...args, username: context.user.username });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { requests: request._id } },
                    { new: true }
                );

                return request
            }
        },
        addVolunteer: async (parent, { userId }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: userId },
                    { $push: { volunteer: { username: context.user.username, available } } },
                    { new: true, runValidators: true }
                );

                return updatedUser;
            }

            throw new AuthenticationError('You need to be logged in!');
        }
    }
};

module.exports = resolvers;
