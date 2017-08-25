import { Component, OnInit } from '@angular/core';

import {FamilyService} from '../../shared/services/family/family.service';
import {Human} from '../../shared/services/family/human';
import {IncomeService} from '../../shared/services/income/income.service';
import {ExpenseService} from '../../shared/services/expense/expense.service';
import {LifeEventService} from '../../shared/services/life-event/life-event.service';
import {LifeEvent} from '../../shared/services/life-event/life-event';

@Component({
  selector: 'app-flow-table',
  templateUrl: './flow-table.component.html',
  styleUrls: ['./flow-table.component.css']
})
export class FlowTableComponent implements OnInit {

  private readonly COLS = 21;
  private pages = [];
  pageIndex = 0;

  constructor(private familyService:    FamilyService,
              private incomeService:    IncomeService,
              private expenseService:   ExpenseService,
              private lifeEventService: LifeEventService) {
  }

  ngOnInit() {
  }

  get years(): number[] {
    if (this.pages.length !== 0) {
      return this.pages[this.pageIndex];
    }

    const _cur = new Date().getFullYear();
    let _array = [];
    for (let _i = 1; _i < this.COLS; _i++) {
      if (_i === 0) {
        _array.push(_cur);
      } else {
        _array.push(_cur + _i);
      }
    }

    const len = _array.length;
    const count = 5;

    for (let i = 0; i < Math.ceil(len / count); i++) {
      const j = i * count;
      const p = _array.slice(j, j + count);
      this.pages.push(p);
    }

    return this.pages[this.pageIndex];
  }

  get family(): Human[] {
    return this.familyService.family;
  }

  get husband(): Human {
    return this.familyService.list.filter(p => {
      if (p.relationship === '0') {
        return p;
      }
    })[0];
  }

  get wife(): Human {
    return this.familyService.list.filter(p => {
      if (p.relationship === '1') {
        return p;
      }
    })[0];
  }

  get childs(): Human[] {
    return this.familyService.list.filter(p => {
      if (p.relationship === '2') {
        return p;
      }
    });
  }

  ageOfYear(birthday: Date, year: number = new Date().getFullYear()): number {
    return year - birthday.getFullYear();
  }

  get husbandIncome(): number {
    return this.incomeService.husband.afterTaxIncome;
  }

  get wifeIncome(): number {
    return this.incomeService.wife.afterTaxIncome;
  }

  get coupleTotalIncome(): number {
    return this.husbandIncome + this.wifeIncome;
  }

  get expense(): ExpenseService {
    return this.expenseService;
  }

  lifeEvents(_year: number): LifeEvent[] {
    let r= this.lifeEventService.events.filter((evt: LifeEvent) => {
      if (_year === evt.year) {
        return evt;
      }
    });
    return r;
  }

  calcOneTimePayOut(_year:number):number{
    let out:number=0;
    let r= this.lifeEventService.events.filter((evt: LifeEvent) => {
      if (_year === evt.year) {
        out = out +  evt.money;
      }
    });
    return out;
  }


  totalExpense(evtExpense?: number): number {
    if (evtExpense === undefined) {
      return this.expenseService.totalExpenses;
    }
    return this.expenseService.totalExpenses + evtExpense;
  }

  totalBalance(evtExpense?: number): number {
    return this.coupleTotalIncome - this.totalExpense(evtExpense);
  }

  calcYearlyExpense(monthly: number, suddenly: number): number {
    return (monthly * 12) + suddenly;
  }


  prevPage() {
    if (this.pageIndex === 0) {
      return;
    }

    this.pageIndex--;
  }

  nextPage() {
    if (this.pageIndex === this.pages.length - 1) {
      return;
    }

    this.pageIndex++;
  }

  getYearOffset(_year: number): string {
    const _cur = new Date().getFullYear();
    const offset = _year - _cur;

    if (offset === 0) {
      return '現在';
    }

    return offset + '年';
  }

}
