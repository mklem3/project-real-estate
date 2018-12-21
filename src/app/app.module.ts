import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { UIComponentsModule } from './components/ui-components/ui-components.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UIComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
