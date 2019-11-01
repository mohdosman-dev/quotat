import {gql} from '@apollo/client';

export const GET_QUOTES = gql`
  query quotes {
    quotes {
      _id
      quote
      comments {
        _id
      }
      createdAt
      updatedAt
      author {
        _id
        username
      }
    }
  }
`;
