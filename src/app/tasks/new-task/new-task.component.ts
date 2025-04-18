import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NewTask } from '../task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancelNewTask=new EventEmitter();
  @Output() addNewTask=new EventEmitter<NewTask>();
  @Input() taskId!:string
  title!:string;
  summary!:string;
  date!:string;
  onCancel(){
    this.cancelNewTask.emit(true)
  }
  onCreate(form:NgForm){
    const task:NewTask={
      title:this.title,
      summary:this.summary,
      date:this.date
    }
    this.addNewTask.emit(task)
  }
}
