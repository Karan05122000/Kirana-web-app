import { OnChanges } from '@angular/core';
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
import { formatDate } from '@angular/common';
import { MatDatepickerInputEvent } from '@angular/material';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit, OnChanges {

  notEmptyPost = true;
  notscrolly = true;
  searchRetail: any;
  searchStatus: any;
  searchDate1: any;
  searchDate: any;
  taskTotal = 10;
  taskRemaining = 0;
  retailers = ['Pranav', 'Vijay', 'Rebecca', 'Kirana_vendor'];
  status = ['Delivered', 'Ordered', 'Packed', 'Cancelled', 'Dispatched', 'Payment'];
  today = Date.now();
  model: any = {};
  filters: string[];
  isSidePanelExpanded: boolean;
  allTransaction: any;
  spinner: any;
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  private _filter(value: string): string[] {
    const filterValue = value.toLocaleLowerCase();

    return this.retailers.filter(retailer => retailer.toLowerCase().includes(filterValue));
  }
  // tslint:disable-next-line: member-ordering
  statusControl = new FormControl();
  // tslint:disable-next-line: member-ordering
  statusFilteredOptions: Observable<string[]>;
  private _statusFilter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.status.filter(state => state.toLowerCase().includes(filterValue));
  }
  constructor(private interaction: InteractionService, private transaction: TransactionService) {
    this.filters = ['Retailer', 'Status', 'Date'];
    this.isSidePanelExpanded = this.interaction.getExpandedStatus();
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    this.statusFilteredOptions = this.statusControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._statusFilter(value))
      );
    this.interaction.expandedStatus$.subscribe((res) => {
      this.isSidePanelExpanded = res;
    });
    this.getTransactionHistory();
    console.log(this.searchDate);
  }

  ngOnChanges() {
    console.log(this.searchDate);

  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.searchDate1 = (`${type}:${event.value.toLocaleDateString()}`);
    this.searchDate = this.searchDate1.slice(6, 16);
  }

  getTransactionHistory() {
    this.transaction.getAllOrders().subscribe((res) => {
      this.allTransaction = JSON.parse(JSON.stringify(res.body));
      console.log(this.allTransaction);
      this.retailers = this.allTransaction.vendor_name;
      console.log(this.retailers);
    });
  }
  onScrollUp() {
    console.log('scrolled up!!');
  }
  onScroll() {
    console.log('scrolled!!');
  }
  setStatusColor(status: any) {
    return status;
  }
  onReset() {
    console.log('reset');
    console.log(this.myControl);
  }
}
