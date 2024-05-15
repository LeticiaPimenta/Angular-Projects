import { Injectable } from '@angular/core';
import { Task } from './task-manager.model';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TaskManagerService {

  constructor() { }

  listAllTasks(): Task[] {
    const tasks = localStorage['tasks'];
    return tasks ? JSON.parse(tasks) : [];
  }

  addTask(task: Task): void{
    const tasks = this.listAllTasks();
    task.id = new Date().getTime();
    tasks.push(task);
    localStorage['tasks'] = JSON.stringify(tasks);
  }

  searchTaskID(id: number): Task {
    const tasks: Task[] = this.listAllTasks();
    return tasks.find(task => task.id === id);
  }

  updateTask(task: Task): void {
    const tasks: Task [] = this.listAllTasks();
    tasks.forEach((obj, index, objs) => {
      if (task.id === obj.id){
        objs[index] = task;
      }
    });
    localStorage['tasks'] = JSON.stringify(tasks);
  }

  deleteTask(id: number): void{
    let tasks: Task[] = this.listAllTasks();
    tasks = tasks.filter(task => task.id !== id);
    localStorage['tasks'] = JSON.stringify(tasks);
  }

  statusTask(id: number): void {
    const tasks: Task [] = this.listAllTasks();
    tasks.forEach((obj, index, objs) => {
      if (id === obj.id){
        objs[index].finished = !obj.finished;
      }
    });
    localStorage['tasks'] = JSON.stringify(tasks);
  }
}
