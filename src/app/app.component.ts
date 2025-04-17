import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { User } from './user/user.model';
import { DUMMY_USERS } from './dummy-user';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,UserComponent,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  allUserData:User[]=DUMMY_USERS;
  @ViewChild('list') list!:ElementRef;
  
  checkUserSelected(data:boolean){
    this.list.nativeElement.querySelectorAll('.active').forEach(
      (question:any) => {
        question.classList.remove('active');
      }
    )
   
  }
}


