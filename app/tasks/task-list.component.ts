import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import '../rxjs-operators';

import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MD_CHECKBOX_DIRECTIVES} from '@angular2-material/checkbox';
import {MD_RADIO_DIRECTIVES, MdRadioDispatcher} from '@angular2-material/radio';
import {MD_PROGRESS_CIRCLE_DIRECTIVES} from '@angular2-material/progress-circle';
import {MD_PROGRESS_BAR_DIRECTIVES} from '@angular2-material/progress-bar';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_ICON_DIRECTIVES, MdIconRegistry} from '@angular2-material/icon';
import {MD_TABS_DIRECTIVES} from '@angular2-material/tabs';

import { Task } from './task';
import { TaskListService } from './task-list.service';

@Component({
  moduleId: module.id,
  selector: 'task-list',
  templateUrl: 'task-list.component.html',
  providers: [
    TaskListService
  ],
  directives: [
    MD_LIST_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MD_BUTTON_DIRECTIVES
  ],
})

export class TaskListComponent implements OnInit {
  tasks: Task[];

  constructor(private taskListService: TaskListService) {}
  
  ngOnInit() {
    this.getTasks();
  }
  
  getTasks() {
    this.taskListService.getTasks().subscribe(tasks => this.tasks = tasks);
  }
  
  abs(days: number): number {
    return Math.abs(days);
  }

