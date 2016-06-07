import { Component } from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import { TaskListComponent } from './task/task-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'my-app',
  providers: [],
  pipes: [],
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/app.component.html',
})

@Routes([
  { path: '/',       component: DashboardComponent,       },
  { path: '/tasks',  component: TaskListComponent,      },
])

export class AppComponent { }



