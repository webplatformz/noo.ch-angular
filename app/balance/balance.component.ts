import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {CHART_DIRECTIVES} from 'ng2-charts';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';

import '../rxjs-operators';

import { Balance } from './balance';
import { BalanceService } from './balance.service';

@Component({
  moduleId: module.id,
  selector: 'balance',
  templateUrl: 'balance.component.html',
  styleUrls: ['balance.component.css'],
  providers: [
    BalanceService
  ],
  directives: [
    CHART_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_CARD_DIRECTIVES
  ],
})

export class BalanceComponent implements OnInit {
  balance: Balance = {
    users: [],
    total: 0,
    toPay: 0
  };
  
  doughnutChartLabels: string[] = [];
  doughnutChartData:number[] = [];
  doughnutChartType: string = 'doughnut';
  
  constructor(private balanceService: BalanceService) { }

  ngOnInit() {
    this.getBalance();
  }

  getBalance() {
    this.balanceService.getBalance().subscribe(balance => { 
      this.balance = balance;
      
      this.balance.users.sort((a, b) => b.balance - a.balance);
      
      this.updateChart(balance);
    });
  }

  private updateChart(balance) {
    let labels = balance.users.map(user => user.name);
    let data = balance.users.map(user => user.earned);
    
    this.doughnutChartLabels = labels;
    this.doughnutChartData = data;
  }

}

