import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { QuestionsComponent } from './component/questions/questions.component';
import { HttpClientModule } from '@angular/common/http';
import { ChangeBgDirective } from './change-bg.directive';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    QuestionsComponent,
    ChangeBgDirective,
    LoginComponent,
    SignupComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
