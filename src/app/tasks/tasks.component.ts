import { Component, Input, OnInit } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummy_Tasks } from '../dummy-tasks';
import { NewTask, Task } from './task.model';
import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  constructor(private tasksService:TasksService){}
  @Input({required:true}) seletedUserName!:string;
  @Input({required:true}) selectedUserId!:string;

  showNewTask:boolean=false;
 
  get selectedUserTask(){
    return this.tasksService.onSelectedUserTask(this.selectedUserId)
  }
  onCompleteTask(taskId:string){
    this.tasksService.onRemoveTask(taskId)
  }
  addTask(){
    this.showNewTask=true;
  }
  onCancelTask(){
    this.showNewTask=false;
  }
  onNewTaskAdd(task:NewTask){
    this.tasksService.onAddTask(task,this.selectedUserId,this.selectedUserTask.length + 1)
    this.showNewTask=false;
  }
}
