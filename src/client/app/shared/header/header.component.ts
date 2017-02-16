import { Component } from '@angular/core';
import { ThemeService } from '../../theme.service';


@Component({
  moduleId: module.id,
  selector: 'av-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})


export class HeaderComponent {

  constructor(private themeService: ThemeService) {
  }

  switchTheme():void {
    this.themeService.switchTheme();
    console.log('switched theme');
  }
  
}