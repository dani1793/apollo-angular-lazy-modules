import { fruitsDefault }    from './fruitsQuery';
import { withClientState }  from 'apollo-link-state';
import { InMemoryCache }    from 'apollo-cache-inmemory';
import { ApolloLink }       from 'apollo-link';


// TODO: create another module for apollo and import it into shared
// https://stackblitz.com/edit/apollo-angular-state-zudqeq?file=app%2Fgraphql.module.ts

export const cache = new InMemoryCache();
export const stateLink = withClientState({
  cache,
  defaults: fruitsDefault,
  resolvers: {
    Mutation: {
      removeFruit: (_, { id, query },{ cache }) => {
        console.log('inside removeFruit');
        const fruits = cache.readQuery({ query });
        fruits.fruits.splice(fruits.fruits.map(fruit => fruit.id).indexOf(id), 1);
        const newFruits = [].concat(fruits.fruits);
        const data = {
          fruits: newFruits
        }
        cache.writeQuery({ query, data });
        return newFruits;
      },
      addFruit: (_, { text, query }, { cache }) => {
        console.log('inside addFruit');
        const previous = cache.readQuery({ query });
        const maxId = Math.max(...previous.fruits.map(fruit => fruit.id));
        const newTodo = { id: maxId + 1, text, __typename: 'fruits' };
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
