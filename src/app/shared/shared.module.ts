import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorComponent } from './author/author.component';
import { GraphqlModule } from '../graphql/graphql.module';
import { FruitsComponent } from './fruits/fruits.component';

@NgModule({
  imports: [CommonModule, GraphqlModule],
  exports: [AuthorComponent, FruitsComponent],
  declarations: [AuthorComponent, FruitsComponent],
})
export class SharedModule {}
