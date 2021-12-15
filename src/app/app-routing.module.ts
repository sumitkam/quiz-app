import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './component/questions/questions.component';
import { WelcomeComponent } from './component/welcome/welcome.component';

const routes: Routes = [
  {
    path:'',component:WelcomeComponent,pathMatch:"full"
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
