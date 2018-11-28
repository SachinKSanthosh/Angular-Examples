import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';
import { User } from '../User';
import { Router } from '@angular/router';
import { UpdateprofileComponent } from '../updateprofile/updateprofile.component';

export interface Data {
	id: string;
	name: string;
	email: string;
	password: string;
}

export interface InsertData{
  id:number;
  status:number;
}

interface UpdateData{
  status : number;
  content : Data;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userData : User;
  userDataArray : Data[];
  insertStatus : InsertData;
  deleteStatus : InsertData;
  updateData : UpdateData;
  obj : UpdateprofileComponent;

  constructor(private myService : GetdataService,private route : Router) { 
    // this.myService.getAllUserData();
  }

  ngOnInit() {
         this.fetchData();         
  }

  fetchData(){
    this.myService.getAllUserData().subscribe(datas => 
      {
        this.userData = <User>datas;
        this.userDataArray = this.userData.data;
      });
  }

  processForm(formData){
    this.myService.insertUser(formData.name,formData.email,formData.password)
                  .subscribe(data => 
                    {

                      this.insertStatus = <InsertData>data;
                      if( this.insertStatus.status == 1){
                        alert("Inserted Successfully , ID is : "+this.insertStatus.id );
                        this.fetchData();
                      }else{
                        alert("Insertion Failed");
                      }
                      
                  });
  }

  deleteUser(id){
    this.myService.deleteUser(id)
                   .subscribe(data =>{
                     this.deleteStatus = <InsertData>data;
                     if(this.deleteStatus.status == 1){
                          this.fetchData();
                          alert("User Removed Successfully");
                     }else{
                       alert("Failed to reomve user data");
                     }
                   });
  }

  updateUser(email){
    this.myService.fetchUserById(email)
                  .subscribe(data=>{
                        this.updateData = <UpdateData>data;
                        this.myService.storeUpdateData(this.updateData.content);
                  }); 
                  // this.route.navigate(['/update']);
  }


  

}
