import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AboutModule } from './about/about.module';
import { GeolocationModule } from './geolocation/geolocation.module';
import { LoginModule } from './login/login.module';
import { NotfoundModule } from './notfound/notfound.module';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { ThemeService } from './theme.service';


@NgModule({
  imports: [
    BrowserModule, 
    HttpModule, 
    AppRoutingModule, 
    AboutModule, 
    GeolocationModule,
    LoginModule,
    SharedModule,
    NotfoundModule
    ],
  declarations: [AppComponent],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '<%= APP_BASE %>'
    },
    ThemeService
  ],
  bootstrap: [AppComponent]

})

export class AppModule { }
