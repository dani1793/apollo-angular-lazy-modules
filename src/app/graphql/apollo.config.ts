import {fruitsDefault, getAllFruitsQuery} from './fruitsQuery';
import { withClientState } from 'apollo-link-state';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';


// TODO: create another module for apollo and import it into shared
// https://stackblitz.com/edit/apollo-angular-state-zudqeq?file=app%2Fgraphql.module.ts

export const cache = new InMemoryCache();
export const stateLink = withClientState({
  cache,
  defaults: fruitsDefault,
  resolvers: {
    Mutation: {
      addFruit: (_, { text, query }, { cache }) => {
        console.log('inside addFruit');
        const previous = cache.readQuery({ query });
        const newTodo = { id: 6, text, __typename: 'fruits' };
          const data = {
          fruits: previous.fruits.concat([newTodo]),
        };

        // you can also do cache.writeData({ data }) here if you prefer
        cache.writeQuery({ query, data });
        return newTodo;
      },
    },
  },
});

export const middlewareLink = new ApolloLink((op, forward) => {
  return forward(op).map(response => {
    return response;
  });
});
