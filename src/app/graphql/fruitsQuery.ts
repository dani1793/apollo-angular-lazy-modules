import gql from 'graphql-tag';

export const getAllFruitsQuery = gql`
  query getAllFruitsQuery {
    fruits @client {
      text
    }
  }`;

export const fruitsDefault = {
  __typename: 'fruits',
  fruits: [{
    id: 1,
    text: 'apple'
  },
    {
      id: 2,
      text: 'mango'
    },
    {
      id: 3,
      text: 'orange'
    },
    {
      id: 4,
      text: 'date'
    },
    {
      id: 5,
      text: 'banana'
    }],
};
