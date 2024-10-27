import {isDevMode, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {SharedModule} from "../shared/shared.module";
import {AuthRoutingModule} from "./auth-routing.module";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {authFeatureKey, authReducer} from "../core/stores/auth/auth.reducers";
import {AuthEffects} from "../core/stores/auth/auth.effects";

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature(authFeatureKey, authReducer),
    EffectsModule.forFeature([AuthEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
    }),
    AuthRoutingModule
  ],
  exports : [
    LoginComponent,
    RegisterComponent,
    AuthRoutingModule
  ]
})
export class AuthModule { }
