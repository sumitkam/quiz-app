import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueServiceService {

  constructor(private http : HttpClient) { }

  getQue():Observable<any>{
    return this.http.get<any>("../../assets/question.json")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}
