import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApolloModule } from 'apollo-angular';
import { HttpLinkModule } from 'apollo-angular-link-http';

import { SharedModule } from '../shared/shared.module';
import { FooRoutingModule } from './foo-routing.module';
import { FooComponent } from './foo.component';


@NgModule({
  imports: [
    CommonModule,
    FooRoutingModule,
    SharedModule,
    ApolloModule,
    HttpLinkModule,
  ],
  declarations: [FooComponent],
})
export class FooModule {
}
