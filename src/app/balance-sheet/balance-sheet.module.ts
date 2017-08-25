import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { BalanceSheetRoutingModule } from './balance-sheet-routing.module';
import { BalanceSheetComponent } from './balance-sheet.component';
import { AssetComponent } from './asset/asset.component';
import { LiabilityComponent } from './liability/liability.component';

import { SharedModule } from '../shared/shared.module';
import { BalanceSheetService } from './shared/balance-sheet.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    BalanceSheetRoutingModule
  ],
  declarations: [BalanceSheetComponent, AssetComponent, LiabilityComponent],

  providers: [ BalanceSheetService],

})
export class BalanceSheetModule { }
