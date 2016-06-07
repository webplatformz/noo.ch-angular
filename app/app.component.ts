import { Component } from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import { TaskListComponent } from './tasks/task-list.component';

@Component({
  selector: 'my-app',
  providers: [],
  pipes: [],
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/app.component.html',
})

@Routes([
  { path: '/',       component: TaskListComponent,       },
  { path: '/tasks',  component: TaskListComponent,      },
])



export class AppComponent { }



