import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { authorQuery } from '../shared/graphql/authorQuery';

import {Observable} from 'rxjs';
import { map } from 'rxjs/internal/operators';




@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css'],
})
export class FooComponent implements OnInit {
  author$: Observable<any>;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.author$ = this.apollo
      .query<any>({
        query: authorQuery,
        variables: {
          id: 2,
        },
        fetchPolicy: 'network-only',
      })
      .pipe(map(result => {
        return result.data.author;
      }));
  }
}
