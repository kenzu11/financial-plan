import { Injectable } from '@angular/core';

import { BalanceSheetItem } from './balance-sheet-item';
import { ASSETS } from './mock-assets';
import { LIABILITIES } from './mock-liabilities';


@Injectable()
export class BalanceSheetService {

  constructor() { }

  getAssets(): Promise<BalanceSheetItem[]> {
    return Promise.resolve(ASSETS);
  }

  getLiabilities(): Promise<BalanceSheetItem[]> {
    return Promise.resolve(LIABILITIES);
  }

  getMoneyTotal(items):number{
    let sum = 0;
    items.forEach(items => {
      // sum += assets.money.valueOf();
      sum += isNaN(items.money) ? 0 : Number(items.money);
    });

    return sum;
  }


}
