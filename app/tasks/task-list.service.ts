import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { Task } from './task';
import { TASKS } from './mock-tasks';

@Injectable()
export class TaskListService {

    constructor(private http: Http) { }

    private tasksUrl = 'http://localhost:3042/api/plans/mockPlanId/tasks';

    getTasks(): Observable<Task[]> {
        return this.http.get(this.tasksUrl)
            .map(this.extractData);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || [];
    }

}