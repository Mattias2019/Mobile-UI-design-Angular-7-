import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router'; 
import { from } from 'rxjs/internal/observable/from';
import { StructureComponent } from './structure.component';
import { HeaderComponent } from './../common-components/header/header.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
// import { SidebarComponent } from './../common-components/sidebar/sidebar.component'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { HomeComponent } from './home/home.component';
import { splashComponent } from './splash/splash.component';
import { loginComponent }  from './login/login.component';
import { registerComponent } from './register/register.component';
import { termsConditionComponent } from './terms-condition/terms-condition.component';
import { CountryMobileComponent } from './country-mobile/country-mobile.component';
import { BlankComponent } from './blank/blank.component';
import { EmailResetComponent } from './email-reset/email-reset.component';
import { resetPasswordComponent } from './reset-password/reset-password.component';
import { passwordSuccessComponent } from './password-successfull/password-successfull.component';
import { thankYouComponent } from './thank-you/thank-you.component';
import { InfoComponent } from './info/info.component';
import { HowWorksComponent } from './how-works/how-works.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MainpageComponent } from './mainpage/mainpage.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import {MatListModule} from '@angular/material/list';
import {CalendarModule} from 'primeng/calendar'; 
import { RecaptchaModule } from 'angular-google-recaptcha';
import { GuideMeComponent } from './guide-me/guide-me.component';
import { MyDocumentsComponent } from './my-documents/my-documents.component';
import { CWalletComponent } from './c-wallet/c-wallet.component';
import { BuySellExchangeComponent } from './buy-sell-exchange/buy-sell-exchange.component';
import { InviteSomeoneComponent } from './invite-someone/invite-someone.component';
import { ParametersComponent } from './parameters/parameters.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SystemsStatusComponent } from './systems-status/systems-status.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



// import { ToastrModule } from 'ng6-toastr-notifications';

// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import { ChartModule } from 'angular2-chartjs';
 
 

export const routes: Routes = [
  {
    path: '',
    component: StructureComponent,
    children: [

        {path: '', redirectTo: 'splash', pathMatch: 'full'},
        { path: 'home', component: HomeComponent },
        { path: 'splash',component: splashComponent },
        { path: 'login',component: loginComponent },
        { path: 'register',component: registerComponent },
        { path: 'terms-condition',component: termsConditionComponent },
        { path: 'country-mobile',component: CountryMobileComponent },
        { path: 'blank',component: BlankComponent },
        { path: 'email-reset',component: EmailResetComponent },
        { path: 'reset-password',component: resetPasswordComponent },
        { path: 'password-success',component: passwordSuccessComponent },
        { path: 'thank-you',component: thankYouComponent },
        { path: 'info', component: InfoComponent},
        { path: 'how-to', component: HowWorksComponent },
        { path: 'main', component: MainpageComponent},
        { path: 'my-document', component: MyDocumentsComponent},
        { path: 'guide-me', component: GuideMeComponent},
        { path: 'cwallet', component : CWalletComponent},
        { path: 'contactus',component :ContactUsComponent},
        { path: 'invite-someone', component:InviteSomeoneComponent},
        { path: 'system-status', component :SystemsStatusComponent},
        { path: 'parameters', component :ParametersComponent},
        { path: 'buysell-exchange', component :BuySellExchangeComponent},


      ]
  },
];



@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    CalendarModule,
    FormsModule,
     ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MDBBootstrapModule.forRoot(),
    RecaptchaModule.forRoot({
      siteKey: '6Lf3UnAUAAAAAHTNIM3gV4BW2EaWhqcrCGCdPfND',
    }),
    // ToastrModule.forRoot()
  ],
  declarations: [
    StructureComponent, 
    HeaderComponent,
    // SidebarComponent,
    HomeComponent, 
    splashComponent,
    loginComponent,
    registerComponent,
    termsConditionComponent,
    CountryMobileComponent,
    BlankComponent,
    InfoComponent,
    HowWorksComponent,
    EmailResetComponent,
    resetPasswordComponent,
    passwordSuccessComponent,
    thankYouComponent,
    MainpageComponent,
    GuideMeComponent,
    MyDocumentsComponent,
    CWalletComponent,
    BuySellExchangeComponent,
    InviteSomeoneComponent,
    ParametersComponent,
    ContactUsComponent,
    SystemsStatusComponent,
    
  ],
   providers: [ 
  ],
})
export class StructureModule { }
