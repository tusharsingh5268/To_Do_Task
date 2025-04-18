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
  user=input.required<User>();
  @Input({required:true}) selectButton!:boolean;
  @Output() newUserSelected=new EventEmitter<string>();

  imagePath=computed(()=>'../../assets/users/' + this.user()?.avatar)

  onSelectUser(id:string){
  this.newUserSelected.emit(id)
  }
}
