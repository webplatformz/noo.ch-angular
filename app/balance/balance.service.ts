import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { Balance } from './balance';

@Injectable()
export class BalanceService {

    constructor(private http: Http) { }

    private balanceUrl = 'http://localhost:3042/api/plans/mockPlanId/balance';

    getBalance(): Observable<Balance> {
        return this.http.get(this.balanceUrl)
            .map(this.extractData);
    }

    private extractData(res: Response): Balance {
        return res.json() || {};
    }
}