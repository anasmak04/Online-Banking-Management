import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { UserModule } from "./dashboard/user-management/user.module";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { isDevMode } from '@angular/core';
import {EffectsModule} from "@ngrx/effects";
import {AuthModule} from "./auth/auth.module";
import {LayoutsModule} from "./shared/layouts/layouts.module";
import {AccountModule} from "./dashboard/account-management/account.module";
import {TransactionModule} from "./dashboard/transaction-management/transaction.module";
import {InvoiceModule} from "./dashboard/invoice-management/invoice.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UserModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
    }),
    AuthModule,
    AccountModule,
    LayoutsModule,
    TransactionModule,
    InvoiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
