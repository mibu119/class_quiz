import { gql } from "@apollo/client";

export const GRAPHQL_API = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      message
      _id
      number
    }
  }
`;
