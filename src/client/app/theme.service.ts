import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NextObserver } from 'rxjs/Observer';


const THEME_LIST: string[] = [
  'default', 
  'blue' 
  /*, 'brown', 'purple', 'green' */ 
  ];

/**
 * Provides storage for the user's current selected theme.
 */
@Injectable()
export class ThemeService {
  
  /** Currently selected theme. Hardcoded a value to start with. */
  themeIndex: number = 1;


  /** Get current theme */
  getTheme(): string {
    return THEME_LIST[this.themeIndex];
  }


  /** 
   * Change theme. Just rolls over the the next in the list. It is left to the 
   * user to stop at the theme when he/she likes what they see.
   */
  switchTheme(): void {
    ++this.themeIndex;
    if (this.themeIndex == THEME_LIST.length) {
      this.themeIndex = 0;
    }
  }

}