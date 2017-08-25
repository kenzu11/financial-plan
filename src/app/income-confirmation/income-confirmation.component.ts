import { Component, OnInit, ViewChild } from '@angular/core';

import { IncomeComponent } from './income/income.component';
import { ExpenseComponent } from './expense/expense.component';

@Component({
  selector: 'app-income-confirmation',
  templateUrl: './income-confirmation.component.html',
  styleUrls: ['./income-confirmation.component.css']
})
export class IncomeConfirmationComponent implements OnInit {

  @ViewChild(IncomeComponent)
  incomeComponent: IncomeComponent;

  @ViewChild(ExpenseComponent)
  expenseComponent: ExpenseComponent;

  constructor() { }

  ngOnInit() {
  }

  calcSaving(): number {
    return this.incomeComponent.calcTotalAfterTaxIncome() - this.expenseComponent.calcTotalExpenses();
  }

}
