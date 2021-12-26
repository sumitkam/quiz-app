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
  isQuizComleted : boolean = false;
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

    if(currentQue === this.queList.length){
      this.isQuizComleted = true;
      this.stopCounter();
    }

    if(option.correct){

      this.points+=10;
      this.currentQue ++;
      setTimeout(()=>{
        this.getProgress();
        this.correctAnswer ++ ;
        this.resetCounter();
      },1000);
      // this.points = this.points + 10;


    }else{
      setTimeout(()=>{
        this.incorrectAns --;
        this.currentQue ++ ;
        this.resetCounter();
        this.getProgress();
      },1000);
      this.points-=10;

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
    this.isQuizComleted = false;
    const randomElement = this.queList[Math.floor(Math.random() * this.queList.length)];
    this.resetCounter();
    this.getAllQue();
    this.points = 0;
    this.counter = 60;
    this.currentQue = 0;
    this.progress = "0";

  }
  getProgress(){
    this.progress = ((this.currentQue/this.queList.length)*100).toString();
    return this.progress;
  }

}
