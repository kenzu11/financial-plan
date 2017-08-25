import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashFlowRoutingModule } from './cash-flow-routing.module';
import { CashFlowComponent } from './cash-flow.component';
import { FlowTableComponent } from './flow-table/flow-table.component';

import {SharedModule} from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    CashFlowRoutingModule,
    SharedModule
  ],
  declarations: [CashFlowComponent, FlowTableComponent]
})
export class CashFlowModule { }
