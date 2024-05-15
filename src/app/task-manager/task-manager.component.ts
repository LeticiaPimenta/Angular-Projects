import { Component } from '@angular/core';
import { routes } from '../app.routes';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-task-manager',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './task-manager.component.html',
})
export class TaskManagerComponent {
  title = 'Task Manager';
}
