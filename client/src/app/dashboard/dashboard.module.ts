import {isDevMode, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {InvoiceComponent} from "./invoice-management/invoice/invoice.component";
import {UserComponent} from "./user-management/user/user.component";
import {AccountComponent} from "./account-management/account/account.component";
import {TransactionComponent} from "./transaction-management/transaction/transaction.component";
import {SharedModule} from "../shared/shared.module";
import {StoreModule} from "@ngrx/store";
import {usersFeatureKey, usersReducer} from "../core/stores/user/user.reducers";
import {EffectsModule} from "@ngrx/effects";
import {UserEffects} from "../core/stores/user/user.effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {AccountEffects} from "../core/stores/account/account.effects";
import {accountsFeatureKey, accountsReducer} from "../core/stores/account/account.reducers";
import {transactionsFeatureKey, transactionsReducer} from "../core/stores/transaction/transaction.reducers";
import {TransactionEffects} from "../core/stores/transaction/transaction.effects";
import {invoicesFeatureKey, invoicesReducer} from "../core/stores/invoice/invoice.reducers";
import {InvoiceEffects} from "../core/stores/invoice/invoice.effects";
import {LoanEffects} from "../core/stores/loan/loan.effects";
import {loansFeatureKey, loansReducer} from "../core/stores/loan/loan.reducers";
import {AddAccountComponent} from "./account-management/add-account/add-account.component";
import {AddTransactionComponent} from "./transaction-management/add-transaction/add-transaction.component";
import {AddInvoiceComponent} from "./invoice-management/add-invoice/add-invoice.component";
import {LoanComponent} from "./loan-management/loan/loan.component";
import {AddLoanComponent} from "./loan-management/add-loan/add-loan.component";
import { StatisticComponent } from './statistic/statistic.component';
import {HomeComponent} from "./home/home.component";

@NgModule({
  declarations: [
    InvoiceComponent,
    UserComponent,
    AccountComponent,
    TransactionComponent,
    AddAccountComponent,
    AddTransactionComponent,
    AddInvoiceComponent,
    LoanComponent,
    AddLoanComponent,
    StatisticComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    StoreModule.forFeature(usersFeatureKey, usersReducer),
    StoreModule.forFeature(accountsFeatureKey, accountsReducer),
    StoreModule.forFeature(transactionsFeatureKey, transactionsReducer),
    StoreModule.forFeature(invoicesFeatureKey, invoicesReducer),
    StoreModule.forFeature(loansFeatureKey, loansReducer),
    EffectsModule.forFeature([UserEffects, AccountEffects, TransactionEffects, InvoiceEffects, LoanEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
    }),
  ],

  exports : [
    InvoiceComponent,
    UserComponent,
    AccountComponent,
    TransactionComponent,
    DashboardRoutingModule,
    AddAccountComponent,
    AddTransactionComponent,
    AddInvoiceComponent,
    LoanComponent,
    AddLoanComponent,
    StatisticComponent,
    HomeComponent
  ]
})
export class DashboardModule { }
