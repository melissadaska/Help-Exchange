import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!, $name: String!, $location: String!, $number: String!) {
    addUser(username: $username, email: $email, password: $password, name: $name, location: $location, number: $number) {
      token
      user {
        _id
        username
        email
        name
        location
        number
      }
    }
  }
`;

// export const DELETE_USER = gql`
//   mutation deleteUser($userId: ID!) {
//     deleteUser(userId: $userId) {
//       token
//       user {
//         _id
//         username
//         email
//         name
//         location
//         number
//       }
//     }
//   }
// `;

export const ADD_REQUEST = gql`
  mutation addRequest($title: String!) {
    addRequest(title: $title) {
        _id
        title
        createdAt
        username
        volunteerCount
        volunteers {
          _id
        }
    }
  }
`

export const ADD_VOLUNTEER = gql`
    mutation addVolunteer($requestId: ID!, $volunteerBody: String!) {
        addVolunteer(requestId: $requestId, volunteerBody: $volunteerBody) {
            _id
            volunteerCount
            volunteers {
              _id
              volunteerBody
              createdAt
              username
            }
        }
    }
`
