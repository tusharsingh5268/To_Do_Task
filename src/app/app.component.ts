import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { User } from './user/user.model';
import { DUMMY_USERS } from './dummy-user';
import { NgFor } from '@angular/common';
import { TasksComponent } from './tasks/tasks.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,UserComponent,TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  allUserData:User[]=DUMMY_USERS;
  @ViewChild('list') list!:ElementRef;
  seletedUserData!:string;
  userId!:string


  checkUserSelected(id:string){
    this.userId=id;
    this.seletedUserData=this.allUserData.find((user)=>{
      return user.id === id
    })?.name || ""
  }

  
}


