import { Component } from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';
import {MD_ICON_DIRECTIVES, MdIconRegistry} from '@angular2-material/icon';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';

import { TaskListComponent } from './task/task-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'my-app',
  providers: [],
  styleUrls: ['app/app.component.css'],
  pipes: [],
  directives: [
    ROUTER_DIRECTIVES,
    MD_SIDENAV_DIRECTIVES,
    MD_TOOLBAR_DIRECTIVES,
    MD_ICON_DIRECTIVES,
    MD_BUTTON_DIRECTIVES
  ],
  templateUrl: 'app/app.component.html',
})

@Routes([
  { path: '/',       component: DashboardComponent,       },
  { path: '/tasks',  component: TaskListComponent,      },
])

export class AppComponent { }



