import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';
import { Router } from '@angular/router';

interface InsertData{
  id:number;
  status:number;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginStatus : InsertData; 

  constructor(private getDataService : GetdataService , private route : Router) { }

  ngOnInit() {
  }

  processLogin(data){
      this.getDataService.checkLogin(data.email,data.password)
                         .subscribe(data => {
                           this.loginStatus = <InsertData>data;
                           if(this.loginStatus.status == 1){
                              this.route.navigate(['/timeline']);
                           }else if(this.loginStatus.status == 2){
                            alert("Failed to login");
                           }else{
                             alert("This user dosen't exist , Plz SignUp ");
                           }
                         });
  }

}
