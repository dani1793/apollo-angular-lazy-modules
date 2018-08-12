import gql from 'graphql-tag';

export const getAllFruitsQuery = gql`
  query getAllFruitsQuery {
    fruits @client {
      id
      text
    }
  }`;

export const fruitsDefault = [{
    id: 1,
    text: 'apple',
    __typename: 'fruits',
  },
    {
      id: 2,
      text: 'mango',
      __typename: 'fruits',
    },
    {
      id: 3,
      text: 'orange',
      __typename: 'fruits',
    },
    {
      id: 4,
      text: 'date',
      __typename: 'fruits',
    },
    {
      id: 5,
      text: 'banana',
      __typename: 'fruits',
    }
    ];
