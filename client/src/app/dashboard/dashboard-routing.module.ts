import {RouterModule, Routes} from "@angular/router";
import {AccountComponent} from "./account-management/account/account.component";
import {TransactionComponent} from "./transaction-management/transaction/transaction.component";
import {InvoiceComponent} from "./invoice-management/invoice/invoice.component";
import {UserComponent} from "./user-management/user/user.component";
import {NgModule} from "@angular/core";
import {LoanComponent} from "./loan-management/loan/loan.component";
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
  {path : "account" , component : AccountComponent},
  {path : "transaction" , component : TransactionComponent},
  {path : "invoice" , component : InvoiceComponent},
  {path : "user" , component : UserComponent},
  {path : "loan" , component : LoanComponent},
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", redirectTo: "/home" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})

export class DashboardRoutingModule { }
