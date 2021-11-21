import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { RestService } from './rest.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day7assnmt';

  strUIDForQueryParam='Navnath';
  strPWDForQueryParams='Kumbhar';

  constructor(private authenticationService:AuthenticationService,private router:Router){ }
  loginInForAuthGuard()
  {
    this.authenticationService.login();
  }
  loginOutForAuthGuard()
  {
    this.authenticationService.logout();
 
  }
  // constructor(private restService:RestService){ }
  // columns=["User ID","First Name","Last Name","Email","Location"];


  // userRestService:User[]=[];

  // ngOnInit()
  // {
  //   this.readData();
    
  // }
  // readData()
  // {
  //   this.restService.getUsers().subscribe
  //   (
  //     (data)=>
  //     {
  //       this.userRestService=data;
  //     },
  //     (error)=> console.log(error)
  //   )
  // }
  // insertRecordInJson()
  // {
  //   let userobj=new User(108,"NRK","K","nrk@gmail.com","pune");
  //   this.restService.insertUser(userobj).subscribe(
  //     data => {console.log("Received data is : "+data);
  //     this.readData();  
  //   }
  //   )
  // }
  // recordIdDeleteinJSONServer=0;

  // recordToDeleteInJSON()
  // {
  //   this.restService.deleteRecord(this.recordIdDeleteinJSONServer).subscribe(
  //     data=>{console.log("Record deleted :"+data);
  //     this.readData();  
  //   }
  //   )
  // }
    logout()
    {
      alert("logged out and routed to login page")
    }


  
}
