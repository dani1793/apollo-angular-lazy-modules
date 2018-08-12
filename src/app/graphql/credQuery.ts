import gql from "graphql-tag";

export const saveCredQuery = gql`
  query saveCredQuery {
    credentials @client {
      username
      password
      loggedIn
    }
  }`;

export const defaultCred = {
  credentials: {
    __typename: 'credentials',
    username: '',
    password: '',
    loggedIn: false
  }
}
