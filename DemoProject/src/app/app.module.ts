import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GetdataService } from './getdata.service';
import { HttpClientModule } from '@angular/common/http';
import { TimelineComponent } from './timeline/timeline.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    RegisterComponent,
    TimelineComponent,
    UpdateprofileComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path : '',
        component : LoginComponent,
        
      },
      {
        path : 'signup',
        component : RegisterComponent,
      },
      {
        path : 'timeline',
        component : TimelineComponent,
      },
      {
        path : 'update',
        component : UpdateprofileComponent,
      }
    ])
  ],
  providers: [GetdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
