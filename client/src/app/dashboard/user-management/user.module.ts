import {isDevMode, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserComponent} from "./user/user.component";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {usersFeatureKey, usersReducer} from "../../core/stores/user.reducers";
import {UserEffects} from "../../core/stores/user.effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(usersFeatureKey, usersReducer),
    EffectsModule.forFeature([UserEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
    }),
  ],
  exports : [
    UserComponent
  ]
})
export class UserModule { }
