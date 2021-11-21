import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { User } from '../user';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor(private ress:RestService) { }
  columns=["User ID","First Name","Last Name","Email","Location"];

  userRestService:User[]=[];
  
  ngOnInit(): void {
    this.readData();
  

  
    this.readData();
    
  }
  readData()
  {
    this.ress.getUsers().subscribe
    (
      (data)=>
      {
        this.userRestService=data;
      },
      (error)=> console.log(error)
    )
  }
  insertRecordInJson()
  {
    let userobj=new User(109,"NR","K","nrk@gmail.com","pune");
    this.ress.insertUser(userobj).subscribe(
      data => {console.log("Received data is : "+data);
      this.readData();  
    }
    )
  }
  recordIdDeleteinJSONServer=0;

  recordToDeleteInJSON()
  {
    this.ress.deleteRecord(this.recordIdDeleteinJSONServer).subscribe(
      data=>{console.log("Record deleted :"+data);
      this.readData();  
    }
    )
  }
  // searchid()
  // {
  //   this.userRestService=this.ress.getUsers();
  // }
}
