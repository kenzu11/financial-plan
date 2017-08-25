import { Component, OnInit } from '@angular/core';

import { BalanceSheetItem } from '../shared/balance-sheet-item';
import { BalanceSheetService } from '../shared/balance-sheet.service';


@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css',
              '../../shared/shared.css']

})
export class AssetComponent implements OnInit {

  assets: BalanceSheetItem[];

  constructor(private balanceSheetService: BalanceSheetService) {}

  getAssets(): void {
    this.balanceSheetService.getAssets().then(assets => this.assets = assets);
  }

  calcAssetTotal(): number {
    return this.balanceSheetService.getMoneyTotal(this.assets);
  }

  ngOnInit() {
    this.assets = [];
    this.getAssets();
  }

}
