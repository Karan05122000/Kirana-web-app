import { Transaction } from './../../models/models';
import { OnChanges, ViewChild } from '@angular/core';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  InteractionService
} from 'src/app/services/interaction.service';
import {
  TransactionService
} from 'src/app/services/transaction.service';
import { FormGroup, FormControl } from '@angular/forms';
import { formatDate, DatePipe } from '@angular/common';
import { MatDatepickerInputEvent } from '@angular/material';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit, OnChanges {

  searchRetail: any;
  searchStatus: any;
  searchDate1: any;
  searchDate: any;
  taskTotal = 10;
  taskRemaining = 0;
  retailers = [];
  status = ['Delivered', 'Ordered', 'Packed', 'Cancelled', 'Dispatched', 'Payment'];
  today = Date.now();
  model: any = {};
  filters: string[];
  isSidePanelExpanded: boolean;
  allTransaction: Transaction[];
  dup: Transaction[];
  removeDuplicate: string[] = [];
  temp = '';
  myControl = new FormControl();
  date: Date[] = [];
  orderDate: string[] = [];
  statusControl = new FormControl();
  statusFilteredOptions: Observable<string[]>;
  dateControl = new FormControl();
  dateFilteredOptions: Observable<string[]>;
  filteredOptions: Observable<string[]>;

  private _filter(value: string): string[] {
    const retailerFilterValue = value.toLocaleLowerCase();
    return this.retailers.filter(retailer => retailer.toLocaleLowerCase().includes(retailerFilterValue));
  }

  private _statusFilter(value: string): string[] {
    const statusFilterValue = value.toLowerCase();
    return this.status.filter(state => state.toLowerCase().includes(statusFilterValue));
  }

  private _dateFilter(value: string): string[] {
    const dateFilterValue = value;
    return this.status.filter(date => date.includes(dateFilterValue));
  }
  constructor(private interaction: InteractionService,
              private transaction: TransactionService, private router: Router, private spinner: NgxSpinnerService) {
    this.filters = ['Retailer', 'Status', 'Date'];
    this.isSidePanelExpanded = this.interaction.getExpandedStatus();
  }

  ngOnInit() {
    this.statusFilteredOptions = this.statusControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._statusFilter(value))
      );
    this.dateFilteredOptions = this.dateControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._dateFilter(value))
      );
    this.interaction.expandedStatus$.subscribe((res) => {
      this.isSidePanelExpanded = res;
    });
    this.getTransactionHistory();
    // console.log(this.searchDate);
  }

  ngOnChanges() {
    // console.log(this.searchDate);

  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.searchDate1 = (`${type}:${event.value.toLocaleDateString()}`);
    this.searchDate = this.searchDate1.slice(6, 16);
    console.log(this.searchDate);
  }
  getTransactionHistory() {
    this.transaction.getAllOrders().subscribe((res) => {
      this.allTransaction = res;
      console.log(res);
      this.fun();
    });
  }
  fun() {
    for (let i = 0 ; i < this.allTransaction.length ; i++) {
      this.date[i] = new Date(this.allTransaction[i].timestamp);
      // tslint:disable-next-line: no-unused-expression
      this.orderDate[i] = ('0' + this.date[i].getDate()).slice(-2) + '/'
      + ('0' + (this.date[i].getMonth() + 1)).slice(-2) + '/'
      + this.date[i].getFullYear();
    }
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.allTransaction.length; i++) {
        this.removeDuplicate.push(this.allTransaction[i].vendor_name);
    }
    this.removeDuplicate.sort();
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i <  this.removeDuplicate[i].length; i++) {
      if (this.removeDuplicate[i] !== this.temp) {
        this.retailers.push(this.removeDuplicate[i]);
        this.temp = this.removeDuplicate[i];
      }
    }
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }
  setStatusColor(status: any) {
    return status;
  }
  onReset(dateInput) {
    this.statusControl.setValue('');
    this.myControl.setValue('');
    dateInput.value = '';
  }
}
