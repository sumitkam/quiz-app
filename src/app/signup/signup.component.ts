import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signUpForm! : FormGroup;
  constructor(private fromBuilder : FormBuilder, private http : HttpClient, private route : Router) { }

  ngOnInit(): void {
    this.signUpForm = this.fromBuilder.group({
      fullName:[''],
      phone:[''],
      email:[''],
      password:['']
    })
  }

  signUp(){
    this.http.post<any>("http://localhost:3000/signUpUsers",this.signUpForm.value).subscribe(res=>{
      alert("Signup Successfully");
      this.signUpForm.reset();
      this.route.navigate(['login']);
    },err=>{
      alert("Something went wrong")
    })
  }
}
