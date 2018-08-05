import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cache, middlewareLink, stateLink } from './apollo.config';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { ApolloLink } from 'apollo-link';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class GraphqlModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      cache,
      link: ApolloLink.from([
        stateLink,
        middlewareLink.concat(
          httpLink.create({
            uri: 'https://1jzxrj179.lp.gql.zone/graphql',
          }),
        )])
    });
  }
}

