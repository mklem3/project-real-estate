import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeadsRoutingModule } from './leads-routing.module';
import { LeadsComponent } from './leads.component';

@NgModule({
  declarations: [
    LeadsComponent
  ],
  imports: [
    CommonModule,
    LeadsRoutingModule
  ],
  providers: [],
  bootstrap: [LeadsComponent]
})
export class LeadsModule { }
