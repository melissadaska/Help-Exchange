// import gql tagged template
const { gql } = require('apollo-server-express');

// create typeDef
const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        requests: [Requests]
        volunteer: [Volunteer]
    }

    type Requests {
        _id: ID
        title: String
        why: String
        createdAt: String
        username: String
    }

    type Volunteer {
        _id: ID
        username: String
        available: String
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        requests(username: String): [Requests]
        request(_id: ID!): [Requests]
        volunteer(username: String, available: String): [Volunteer]
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        deleteUser(_id: ID!): User!
        addRequest(username: String!, title: String!): Requests
        addVolunteer(userId: ID!, username: String!): User
    }

    type Auth {
        token: ID!
        user: User
    }
`;

// export typeDef
module.exports = typeDefs;
