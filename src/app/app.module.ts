import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { MainComponent } from './home/main/main.component';
import { CreationsComponent } from './home/creations/creations.component';
import { DarkComponent } from './home/dark/dark.component';
import { NewsComponent } from './home/news/news.component';
import { FooterComponent } from './home/footer/footer.component';
import { FormComponent } from './home/form/form.component';


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
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'form',
        component: FormComponent
      },
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
