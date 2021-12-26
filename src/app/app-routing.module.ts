import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './component/questions/questions.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path:'',redirectTo:'login',pathMatch:'full'
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'welcome',component:WelcomeComponent
  },
  {
    path:'questions',component:QuestionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
