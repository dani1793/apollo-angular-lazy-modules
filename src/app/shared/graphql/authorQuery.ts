import gql from 'graphql-tag';

import authorFragment from './authorFragment';

export const authorQuery =  gql`
  query PostsForAuthor($id: Int!) {
    author(id: $id) {
      ...authorFragment
    }
  }

  ${authorFragment}
`;
