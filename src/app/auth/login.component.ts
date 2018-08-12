import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {getAllFruitsQuery} from "../graphql/fruitsQuery";
import gql from "graphql-tag";
import ApolloClient from "apollo-client/ApolloClient";
import {Apollo} from "apollo-angular";

const saveCredentials = gql`
  mutation saveCredentials($username: string!, $password: string!) {
    saveCredentials(username: $username, password: $password) @client
  }
`;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private apollo: Apollo) {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    });
  }

  ngOnInit() {}

  login() {
    console.log(this.loginForm.value);
    this.apollo.mutate({
      mutation: saveCredentials,
      variables: {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password
      }
    }).subscribe(({ data }) => {
      console.log('credentials got saved', data);
    },(error) => {
      console.log('there was an error sending the query', error);
    });
  }

}
