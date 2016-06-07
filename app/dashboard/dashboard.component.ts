import { Component } from '@angular/core';

import {MD_CARD_DIRECTIVES} from '@angular2-material/card';

import { TaskListComponent } from '../task/task-list.component';
import { BalanceComponent } from '../balance/balance.component';
//import { TaskListService } from './task-list.service';

@Component({
  moduleId: module.id,
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  providers: [
  ],
  directives: [
    TaskListComponent,
    BalanceComponent,
    MD_CARD_DIRECTIVES
  ],
})

export class DashboardComponent {
}

