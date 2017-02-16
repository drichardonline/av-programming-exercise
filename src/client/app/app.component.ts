import { Component } from '@angular/core';
import { Config } from './shared/config/env.config';
import './operators';
import { ThemeService } from './theme.service';


@Component({
  moduleId: module.id,
  selector: 'av-exercise-app',
  templateUrl: 'app.component.html',
})


export class AppComponent {

  constructor(private themeService: ThemeService) {
  }

  isThemeBlue(): boolean {
    return 'blue' === this.themeService.getTheme();
  }

  isThemeBrown(): boolean {
    // Just a dummy for example. There is no css for brown palette yet ...
    return 'brown' === this.themeService.getTheme();
  }
  
  /* No theme name is needed for default, which kicks in when all other theme checks are negative. */

}
