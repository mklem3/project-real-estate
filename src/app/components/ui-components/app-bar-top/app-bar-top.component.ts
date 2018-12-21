import { Component } from '@angular/core';
import { AppBarTopData, AppBarTopOption } from '../../../data/ui-components';

@Component({
  selector: 'app-bar-top',
  templateUrl: './app-bar-top.component.html',
  styleUrls: ['./app-bar-top.component.scss']
})
export class AppBarTopComponent { 
  private data: AppBarTopData = new AppBarTopData('Home', [new AppBarTopOption('search', ()=> {
    alert('TEST');
  })]);
}
