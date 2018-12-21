import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppBarTopComponent } from './app-bar-top/app-bar-top.component';

@NgModule({
  declarations: [
    AppBarTopComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [AppBarTopComponent],
  providers: []
})
export class UIComponentsModule { }
