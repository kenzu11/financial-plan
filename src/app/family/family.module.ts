import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FamilyRoutingModule } from './family-routing.module';
import { FamilyComponent } from './family.component';
import { FamilyDetailComponent } from './family-detail/family-detail.component';
import { FamilyInputComponent } from './family-input/family-input.component';
import { FamilyListComponent } from './family-list/family-list.component';
import { FamilyUpdateComponent } from './family-update/family-update.component';

import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FamilyRoutingModule,
    SharedModule
    
  ],
  declarations: [FamilyComponent, FamilyDetailComponent, FamilyInputComponent, FamilyListComponent, FamilyUpdateComponent]
})
export class FamilyModule { }
