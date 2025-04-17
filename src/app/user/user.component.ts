import { Component, computed, EventEmitter, input, Input, OnInit, Output, signal } from '@angular/core';
import { User } from './user.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgClass],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user=input<User>();  
  @Output() newUserSelected=new EventEmitter<boolean>();
  
  imagePath=computed(()=>'../../assets/users/' + this.user()?.avatar)

  onSelectUser(button:HTMLButtonElement){
  this.newUserSelected.emit(true)
  button.classList.add('active')
   
  }
}
