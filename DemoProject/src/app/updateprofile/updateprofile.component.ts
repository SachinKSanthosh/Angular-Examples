import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';
import { InsertData } from '../register/register.component';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {

  constructor(private getData : GetdataService, private route : Router) { }

  id;
  name;
  email;
  password;
  recivedData : InsertData;

  ngOnInit() {
    this.getDataFromComponent(this.getData.getData());
  }

  processForm(data){
      this.getData.updateUser(data.id,data.name,data.email,data.password)
                  .subscribe(data =>{
                      this.recivedData =  <InsertData>data;
                      if(this.recivedData.status == 1){
                          alert("Updated Successfully");
                          this.route.navigate(['/signup']);
                      }else{
                        alert("Failed");
                      }
                  });
  }

  getDataFromComponent(data){
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.password = data.password;
  }
  

}
