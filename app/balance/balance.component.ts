import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import '../rxjs-operators';

import { Balance } from './balance';
import { BalanceService } from './balance.service';

@Component({
  moduleId: module.id,
  selector: 'balance',
  templateUrl: 'balance.component.html',
  providers: [
    BalanceService
  ],
  directives: [
  ],
})

export class BalanceComponent implements OnInit {
  balance: Balance;

  constructor(private balanceService: BalanceService) {}
  
  ngOnInit() {
    this.getBalance();
  }
  
  getBalance() {
    this.balanceService.getBalance().subscribe(balance => {
      this.balance = balance;
    });
  }  
}

