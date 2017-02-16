import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GeolocationComponent } from './geolocation/geolocation.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';


const appRoutes: Routes = [

  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { 
    path: 'geolocation', 
    component: GeolocationComponent,
    canActivate: [AuthGuard],
    children: []
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [AuthGuard, AuthService]
})

export class AppRoutingModule { }

