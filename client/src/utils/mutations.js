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
  mutation addRequest($username: String!, $title: String!) {
    addRequest(username: $username, title: $title) {
        _id
        title
        why
        createdAt
        username
    }
  }
`

// export const ADD_VOLUNTEER = gql`
//     mutation addVolunteer($userId: ID!) {
//         addVolunteer(userId: $userId) {
//             _id
//             username
//             available
//         }
//     }
// `
