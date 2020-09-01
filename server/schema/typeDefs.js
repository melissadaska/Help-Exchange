// import gql tagged template
const { gql } = require('apollo-server-express');

// create typeDef
const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        name: String
        location: String
        number: String
        requests: [Request]
    }
    type Request {
        _id: ID
        title: String
        createdAt: String
        username: String
        volunteerCount: Int
        volunteers: [Volunteer]
    }
    type Volunteer {
        _id: ID
        volunteerBody: String
        createdAt: String
        username: String
    }
    type Query {
        me: User
        users: [User]
        user(username: String!): User
        requests(username: String): [Request]
        request(_id: ID!): Request
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!, name: String, location: String, number: String): Auth
        deleteUser(_id: ID!): User!
        addRequest(title: String!): Request
        addVolunteer(requestId: ID!, volunteerBody: String!): Request
        deleteRequest(requestId: ID!): Request
    }
    type Auth {
        token: ID!
        user: User
    }
`;

// export typeDef
module.exports = typeDefs;
