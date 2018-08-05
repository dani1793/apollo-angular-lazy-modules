import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { authorQuery } from '../graphql/authorQuery';
import {Observable} from 'rxjs';
import { map } from 'rxjs/internal/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  author$: Observable<any>;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.author$ = this.apollo
      .query<any>({
        query: authorQuery,
        variables: {
          id: 1,
        },
        fetchPolicy: 'network-only',
      })
      .pipe(map(result => result.data.author));
  }
}
