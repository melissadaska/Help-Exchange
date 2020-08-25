import gql from 'graphql-tag';

export const QUERY_ME = gql`
    {
        me {
            _id
            username
            email
            requests {
                _id
                title
                why
                createdAt
                username
            }
            volunteer {
                _id
                username
                available
            }
        }
    }
`;

export const QUERY_ME_BASIC = gql`
    {
        me {
            _id
            username
            email
            volunteer {
                _id
                username
                available
            }
        }
    }
`;

export const QUERY_REQUEST = gql`
    query request($id: ID!) {
        request(_id: $id) {
            _id
            title
            why
            createdAt
            username
        }
    }
`;

export const QUERY_REQUESTS = gql`
    query requests($username: String) {
        requests(username: $username) {
            _id
            title
            why
            createdAt
            username
        }
    }
`;
