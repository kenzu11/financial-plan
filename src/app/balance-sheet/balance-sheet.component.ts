import { Component, OnInit,ViewChild } from '@angular/core';

import { AssetComponent } from './asset/asset.component';
import { LiabilityComponent } from './liability/liability.component';

@Component({
  selector: 'app-balance-sheet',
  templateUrl: './balance-sheet.component.html',
  styleUrls: ['./balance-sheet.component.css',
                  '../shared/shared.css']

})
export class BalanceSheetComponent implements OnInit {
  @ViewChild(AssetComponent)
  assetComponent: AssetComponent;

  @ViewChild(LiabilityComponent)
  liabilityComponent: LiabilityComponent;

  constructor() { }

  ngOnInit() {
  }

  calcStockholdersEquity(): number {
    return this.assetComponent.calcAssetTotal() - this.liabilityComponent.calcLiabilityTotal();
  }

}
