import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User, Data } from './User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {
  
  public userData : Data;

  constructor(private http : HttpClient,private route : Router) { }

  getAllUserData(){
    console.log("hai");
    return this.http.get<User>('http://beyont.in/androidprojects/angularapi/getuser.php');
  }

  insertUser(name,email,password){
   const param = new HttpParams()
             .set('name',name)
             .set('email',email)
             .set('password',password);
    return this.http.get('http://beyont.in/androidprojects/angularapi/registration.php',{params : param});
    
  }

  deleteUser(id){
    const param =  new HttpParams()
                   .set('id',id);
    return this.http.get('http://beyont.in/androidprojects/angularapi/deleteuser.php',{params : param});
  }

  checkLogin(email,password){
    const param =  new HttpParams()
                    .set('email',email)
                    .set('password',password);
     return this.http.get('http://beyont.in/androidprojects/angularapi/login.php',{params : param});
  }

  fetchUserById(email){
    const param =  new HttpParams()
                    .set('email',email)
    return this.http.get('http://beyont.in/androidprojects/angularapi/getuserbyid.php',{params : param});    
  }

  updateUser(id,name,email,password){
    console.log(id,name,email,password);
    const param =  new HttpParams()
                    .set('id',id)
                    .set('name',name)
                    .set('email',email)
                    .set('password',password);
     return this.http.get('http://beyont.in/androidprojects/angularapi/updateuser.php',{params : param});
  }

  storeUpdateData(data){
      this.userData = data;
      this.route.navigate(['/update']);
  }
 
  getData(){
      return this.userData;
  }

}
