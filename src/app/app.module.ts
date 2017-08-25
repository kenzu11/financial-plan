import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID,NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { FamilyService } from './shared/services/family/family.service';
import { IncomeService } from './shared/services/income/income.service';
import { ExpenseService } from './shared/services/expense/expense.service';
import { LifeEventService } from './shared/services/life-event/life-event.service';

//import { PageHeaderComponent } from './shared/components/page-header/page-header.component';

//import { FamilyDetailComponent } from './family-detail/family-detail.component';
//import { BalanceSheetComponent } from './balance-sheet/balance-sheet.component';
//import { CashFlowComponent } from './cash-flow/cash-flow.component';
//import { FamilyComponent } from './family/family.component';
//import { IncomeConfirmationComponent } from './income-confirmation/income-confirmation.component';
//import { LifeEventComponent } from './life-event/life-event.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
//   PageHeaderComponent
//    FamilyDetailComponent,
//    BalanceSheetComponent,
//    CashFlowComponent,
//    FamilyComponent,
//    IncomeConfirmationComponent,
//    LifeEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ {provide: LOCALE_ID, useValue: 'ja-JP'},
  FamilyService,
  IncomeService,
  ExpenseService,
  LifeEventService],

  bootstrap: [AppComponent]
})
export class AppModule { }
