import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Task } from '../shared/task-manager.model';
import { TaskManagerService } from '../shared/task-manager.service';

@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, ],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css'
})
export class EditTaskComponent implements OnInit {
  @ViewChild('formTask') formTask: NgForm;
  task: Task;

  constructor(
    private service: TaskManagerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
	  this.task = this.service.searchTaskID(id);
  }

  updateTask(): void {
    if (this.formTask.form.valid) {
      console.log(this.task)
	    this.service.updateTask(this.task);
	    this.router.navigate(['/task']);
    }
  }
}
