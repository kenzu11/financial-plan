import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelationshipPipe } from './pipes/relationship/relationship.pipe';
import { PageHeaderComponent } from './components/page-header/page-header.component';

@NgModule({
  imports: [
    CommonModule
  ],

  declarations: [RelationshipPipe, PageHeaderComponent],

  exports: [
    RelationshipPipe,PageHeaderComponent
  ]
})
export class SharedModule { }
