import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm !:FormGroup
  constructor(private formbuilder:FormBuilder, private http:HttpClient,private router:Router,private authentication:AuthenticationService) { }

  ngOnInit(): void {
    this.loginForm=this.formbuilder.group({
      email:[''],
      password:['']
    })
  }
  login()
  {
    this.authentication.login()
    this.http.get<any>(" http://localhost:3000/registeration")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email===this.loginForm.value.email && a.password===this.loginForm.value.password
      });
      if(user){
        alert("successfull");
        this.loginForm.reset();
        this.router.navigate(['']);
      }else{
        alert("user not found");
      }
      
    },err=>{
      alert("something went wrong")
    }
    )
  }
  

}
