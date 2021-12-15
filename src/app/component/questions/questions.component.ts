import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { QueServiceService } from 'src/app/service/que-service.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  public name : string = "" ;
  public queList :any= [];
  public currentQue : number =0;
  public points : number = 0;
  counter = 60;
  public que :number = 0 ;
  correctAnswer:number = 0;
  incorrectAns:number = 0;
  interval : any;
  progress: string = "0";
  constructor(private queApi : QueServiceService) { }

  ngOnInit(): void {
    this.name = localStorage.getItem('name')!;
    this.getAllQue();
    this.startCounter();
  }

  getAllQue(){
    this.queApi.getQue().subscribe(res=>{
      // console.warn(res);
      this.queList = res.questions;
    })

  }

  nextQue(){
    this.currentQue ++;
    this.resetCounter();
  }

  prevQue(){
    this.currentQue --;
  }

  answer(currentQue:number,option:any){
    if(option.correct){

      this.points+=10;
      this.currentQue ++;
      // this.points = this.points + 10;
      this.correctAnswer ++ ;
      this.resetCounter();
      this.getProgress();
    }else{
      this.points-=10;
      this.incorrectAns --;
      this.currentQue ++ ;
      this.resetCounter();
      this.getProgress();
    }

  }

  startCounter(){
    this.interval = interval(1000).subscribe(val=>{
      this.counter--;
      if(this.counter===0){
        this.currentQue ++;
        this.counter = 60;
        this.points-=10;
      }
    });
    setTimeout(()=>{
      this.interval.unsubscribe();
    },60000)
  }
  stopCounter(){
    this.interval.unsubscribe();
    this.counter = 0;

  }
  resetCounter(){
    this.stopCounter();
    this.counter = 60;
    this.startCounter();
  }

  resetQuiz(){
    this.resetCounter();
    this.getAllQue();
    this.points = 0;
    this.counter = 60;
    this.currentQue = 0;
    this.progress = "0";
  }
  getProgress(){
    this.progress = ((this.currentQue/this.queList)*100).toString();
    return this.progress;
  }
}
