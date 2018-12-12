import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: './routes/home/home.module#HomeModule' },
  { path: 'kiosk', loadChildren: './routes/kiosk/kiosk.module#KioskModule' },
  { path: 'leads', loadChildren: './routes/leads/leads.module#LeadsModule' },
  { path: 'listings', loadChildren: './routes/listings/listings.module#ListingsModule' },
  { path: 'login', loadChildren: './routes/login/login.module#LoginModule' },
  { path: 'settings', loadChildren: './routes/settings/settings.module#SettingsModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
