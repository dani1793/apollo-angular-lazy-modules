import { Component, OnInit } from '@angular/core';
import {Apollo} from "apollo-angular";
import {getAllFruitsQuery} from "../../graphql/fruitsQuery";
import {Subscription} from "rxjs/index";
import gql from 'graphql-tag';

const updateFruitsQuery = gql`
  mutation addFruit($text: string!, $query: string!) {
    addFruit(text: $text, query: $query) @client
  }
`;

const removeFruitsQuery = gql`
  mutation removeFruit($id: number!, $query: string!) {
    removeFruit(id: $id, query: $query) @client
  }
`;

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {
  loading: boolean;
  data: any;

  private querySubscription: Subscription;
  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.querySubscription = this.apollo.watchQuery<any>({
      query: getAllFruitsQuery
    })
      .valueChanges
      .subscribe(({ data, loading }) => {
        this.loading = loading;
        console.log(data);
        this.data = data || [];
      });
  }

  remove(id: number) {
    this.apollo.mutate({
      mutation: removeFruitsQuery,
      variables: {
        id,
        query: getAllFruitsQuery
      }
    }).subscribe(({ data }) => {
      console.log('got data', data);
    },(error) => {
      console.log('there was an error sending the query', error);
    });
  }

  addTodo(val: string) {
    this.apollo.mutate({
      mutation: updateFruitsQuery,
      variables: {
        text: val,
        query: getAllFruitsQuery
      }
    }).subscribe(({ data }) => {
      console.log('got data', data);
    },(error) => {
      console.log('there was an error sending the query', error);
    });
  }

}
