import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncomeConfirmationRoutingModule } from './income-confirmation-routing.module';
import { IncomeConfirmationComponent } from './income-confirmation.component';
import { ExpenseComponent } from './expense/expense.component';
import { IncomeComponent } from './income/income.component';

import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IncomeConfirmationRoutingModule
  ],
  declarations: [IncomeConfirmationComponent, ExpenseComponent, IncomeComponent]
})
export class IncomeConfirmationModule { }
