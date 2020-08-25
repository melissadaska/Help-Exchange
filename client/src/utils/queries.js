import gql from 'graphql-tag';

export const QUERY_ME = gql`
    {
        me {
            _id
            username
            email
            name
            location
            number
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

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      requests {
        _id
        requestText
        createdAt
        requestCount
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
            name
            location
            number
            volunteer {
                _id
                username
                available
            }
        }
    }
`;

export const QUERY_REQUESTS = gql`
  query requests($username: String) {
    requests(username: $username) {
      _id
      requestsText
      createdAt
      username
    }
  }
`;

export const QUERY_REQUEST = gql`
  query request($id: ID!) {
    request(_id: $id) {
      _id
      requestText
      createdAt
      username
      
    }
  }
`;