import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { authorQuery } from '../graphql/authorQuery';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css'],
})
export class BarComponent implements OnInit {
  author$: Observable<any>;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.author$ = this.apollo
      .query<any>({
        query: authorQuery,
        variables: {
          id: 3,
        },
        fetchPolicy: 'network-only',
      })
      .pipe(map(result => result.data.author));
  }
}
