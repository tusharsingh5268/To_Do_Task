import { Component, Input, OnInit } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummy_Tasks } from '../dummy-tasks';
import { Task } from './task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
  @Input({required:true}) seletedUserName!:string;
  @Input({required:true}) selectedUserId!:string;

  tasks!:Task[];

  ngOnInit(): void {
    
  }
  get selectedUserTask(){
    return this.tasks= dummy_Tasks.filter((task:Task)=>{
    return task.userId === this.selectedUserId
  })
}
}
