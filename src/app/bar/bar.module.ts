import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApolloModule } from 'apollo-angular';
import { HttpLinkModule } from 'apollo-angular-link-http';

import { SharedModule } from '../shared/shared.module';
import { BarRoutingModule } from './bar-routing.module';
import { BarComponent } from './bar.component';

@NgModule({
  imports: [
    CommonModule,
    BarRoutingModule,
    SharedModule,
    ApolloModule,
    HttpLinkModule,
  ],
  declarations: [BarComponent],
})
export class BarModule {

}
