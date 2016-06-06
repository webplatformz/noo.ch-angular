import { Component } from '@angular/core';
import { TaskListComponent } from './tasks/task-list.component';

@Component({
    selector: 'my-app',
    directives: [
        TaskListComponent
    ],
    templateUrl: 'app/app.component.html'
})

export class AppComponent { }