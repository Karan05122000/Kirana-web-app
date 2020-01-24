import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  taskTotal=10;
  taskRemaining=0;
  foods = [
    {value: 'retailer-1', viewValue: 'George'},
    {value: 'retailer-2', viewValue: 'Lucas'},
    {value: 'retailer-3', viewValue: 'Rebecca'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
