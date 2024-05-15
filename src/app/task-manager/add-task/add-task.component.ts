import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { TaskManagerService } from '../shared/task-manager.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Task } from '../shared/task-manager.model';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent implements OnInit {

  title = 'Add Task Here Idiot!';
  @ViewChild('formTask') formTask: NgForm;
  task: Task;
  constructor(
    private service: TaskManagerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.task = new Task();
  }

  addTask(): void {
    if (this.formTask.form.valid) {
  	  this.service.addTask(this.task);
  	  this.router.navigate(["/task"]);
    }
  }
}
