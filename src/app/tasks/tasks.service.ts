import { Injectable } from "@angular/core";
import { dummy_Tasks } from "../dummy-tasks";
import { NewTask, Task } from "./task.model";

@Injectable({
  providedIn: 'root',
})
export class TasksService{
    tasks:Task[]=dummy_Tasks;
    constructor(){
        const tasks=localStorage.getItem('tasks');
        if(tasks){
            this.tasks=JSON.parse(tasks)
        }
    }
    
    onRemoveTask(taskId:string){
        this.tasks=this.tasks.filter((task)=>{
            return task.id !== taskId
        })
        this.setTasks(this.tasks)
    }
    onAddTask(task:NewTask,selectedUserId:string,selectedUserTask:number){
        const taskObj={
            id:`t${selectedUserTask}`,
            userId:selectedUserId,
            title:task.title,
            summary:task.summary,
            dueDate:task.date
          }
          this.tasks.push(taskObj);
          this.setTasks(this.tasks)
    }

    onSelectedUserTask(selectedUserId:string){
        return this.tasks.filter((task:Task)=>{
            return task.userId === selectedUserId
        })
    }
    private setTasks(tasks:Task[]){
        localStorage.setItem('tasks',JSON.stringify(tasks))
    }
}