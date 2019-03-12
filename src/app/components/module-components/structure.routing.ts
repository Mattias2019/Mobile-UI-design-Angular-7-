
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
// import { HomeComponent } from './home/home.component';
import { splashComponent } from './splash/splash.component';

// import { UnauthenticatedGuard } from './../../../authguard/unauthenticated.guard';

export const routes: Routes = [
  {
    // path: 'splash',
     path: '', redirectTo: 'splash', pathMatch: '' ,
    children: [
      { path: 'splash', component: splashComponent }
    ]
  }
];
