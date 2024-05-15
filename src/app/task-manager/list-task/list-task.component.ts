import { Task } from './../shared/task-manager.model';
import { Component } from '@angular/core';
import { TaskManagerService } from '../shared/task-manager.service';
import { RouterModule } from '@angular/router';
import { TaskFinishedDirective } from '../shared/task-finished.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-task',
  standalone: true,
  imports: [RouterModule, TaskFinishedDirective, CommonModule],
  templateUrl: './list-task.component.html',
  styleUrl: './list-task.component.css'
})
export class ListTaskComponent {
  title = 'Tasks';
  tasks: Task[];

  constructor(
    private service: TaskManagerService
  ) {}

  ngOnInit(): void {
    this.tasks = this.listAllTask();
    console.log( this.tasks);
  }

  listAllTask(): Task[] {
   return this.service.listAllTasks();
  }

  deleteTask($event: any, task: Task): void {
    $event.preventDefault();
    if (confirm('Do you want to remove the task "' + task.name + '"?')){
      this.service.deleteTask(task.id);
      this.tasks = this.listAllTask();
    }
  }

  updateStatus(task: Task): void {
    if(confirm('Do you want to change the task status to "' + task.name + '"?')){
      this.service.statusTask(task.id);
      this.tasks = this.listAllTask();
    }
  }
}
