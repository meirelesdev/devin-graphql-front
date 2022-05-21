import { gql } from "@apollo/client";

export const USER_FIEDLS_FRAGMENT = gql`
  fragment UserFields on User {
    id
    name
    email
  }
`;
