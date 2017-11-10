import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DpDatePickerModule} from 'ng2-date-picker';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { MainComponent } from './home/main/main.component';
import { CreationsComponent } from './home/creations/creations.component';
import { DarkComponent } from './home/dark/dark.component';
import { NewsComponent } from './home/news/news.component';
import { FooterComponent } from './home/footer/footer.component';
import { FormComponent } from './home/form/form.component';
import { StepsComponent } from './home/steps/steps.component';
import { ProfileComponent } from './home/steps/profile/profile.component';
import { GeneralComponent } from './home/steps/general/general.component';
import { InfoComponent } from './home/steps/info/info.component';
import { PaymentComponent } from './home/steps/payment/payment.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MainComponent,
    CreationsComponent,
    DarkComponent,
    NewsComponent,
    FooterComponent,
    FormComponent,
    StepsComponent,
    ProfileComponent,
    GeneralComponent,
    InfoComponent,
    PaymentComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DpDatePickerModule,
    RouterModule.forRoot([
      {
        path: 'form',
        component: FormComponent
      },
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
      },
      {
        path: 'product',
        component: StepsComponent
      }
    ]),

  ],
providers:[],
bootstrap:[AppComponent]
})
export class AppModule { }
