import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from "./footer/footer.component";
import {SidenavComponent} from "./sidenav/sidenav.component";

@NgModule({
  declarations: [
    SidenavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],

  exports : [
    SidenavComponent,
    FooterComponent
  ]
})
export class LayoutsModule { }
