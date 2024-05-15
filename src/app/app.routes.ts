import { Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { AddTaskComponent } from './task-manager/add-task/add-task.component';
import { EditTaskComponent } from './task-manager/edit-task/edit-task.component';
import { ListTaskComponent } from './task-manager/list-task/list-task.component';

export const routes: Routes = [
  {path: 'calculator', component: CalculatorComponent},
  {
    path: 'task',
    component: TaskManagerComponent,
      children: [
        {path: 'add', component: AddTaskComponent},
        {path: 'edit/:id', component: EditTaskComponent},
        {path: '', component: ListTaskComponent}
      ]
  }

];
