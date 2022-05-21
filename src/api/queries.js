import { gql } from "@apollo/client";
import { USER_FIEDLS_FRAGMENT } from "./fragments";

export const GET_USERS = gql`
  ${USER_FIEDLS_FRAGMENT}
  query GetUsers {
    users {
      ...UserFields
    }
  }
`;

export const GET_USER_BY_ID = gql`
  ${USER_FIEDLS_FRAGMENT}
  query GetUserById($id: ID!) {
    user(id: $id) {
      ...UserFields
    }
  }
`;
