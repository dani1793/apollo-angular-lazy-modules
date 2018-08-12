import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { HttpLinkModule }     from 'apollo-angular-link-http';
import { SharedModule }       from '../shared/shared.module';
import { ApolloModule }       from 'apollo-angular';
import { LoginComponent }     from './login.component';
import { AuthRoutingModule }  from './auth-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ApolloModule,
    HttpLinkModule,

    AuthRoutingModule
  ],
  declarations: [LoginComponent]
})
export class AuthModule { }
