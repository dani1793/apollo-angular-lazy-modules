import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { AuthorComponent }      from './author/author.component';
import { GraphqlModule }        from '../graphql/graphql.module';
import { FruitsComponent }      from './fruits/fruits.component';
import { ReactiveFormsModule }  from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatCommonModule,
  MatInputModule, MatMenuModule, MatProgressSpinnerModule, MatToolbarModule,
} from "@angular/material";


@NgModule({
  imports: [
    MatCommonModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,

    ReactiveFormsModule,

    CommonModule,
    GraphqlModule,
  ],
  exports: [
    MatCommonModule,
    MatInputModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,

    ReactiveFormsModule,

    AuthorComponent,
    FruitsComponent,
  ],
  declarations: [AuthorComponent, FruitsComponent],
})
export class SharedModule {}
