import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SidebarComponent} from './components/common-components/sidebar/sidebar.component'
import { routing } from './app-routing.module';
import { Router,RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'angular-google-recaptcha';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';


import {MatButtonModule, MatCheckboxModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent, 
    SidebarComponent,   
     
  ],
  imports: [
    BrowserModule,
    routing,
    CalendarModule,
    BrowserAnimationsModule, 
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    MatMenuModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
   RecaptchaModule.forRoot({
        siteKey: '6LcL1pAUAAAAAMap11z8mfJcYWuuXNg1IuUnB3Zr',
    }),
    // '6LcL1pAUAAAAAJXSjln5jl94RkMQeo7IpbbMhdnu'
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
