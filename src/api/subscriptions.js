import { gql } from "@apollo/client";

const GET_NEW_USER_SUB = gql`
  subscription GetNewPost {
    newPost {
      id
      title
      description
      content
    }
  }
`;
