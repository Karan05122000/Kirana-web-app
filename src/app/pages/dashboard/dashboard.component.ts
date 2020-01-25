import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/services/interaction.service';

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
  today = Date.now();
  daysOfTheWeek = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
  dateNumber=0;

  filters: string[];
  isSidePanelExpanded: boolean;

  constructor(private interaction: InteractionService) {
    this.filters = ['Retailer', 'Status', 'Date'];
    this.isSidePanelExpanded = this.interaction.getExpandedStatus();
   }

  ngOnInit() {
    this.interaction.expandedStatus$.subscribe( (res) => {
      this.isSidePanelExpanded = res;
    });
  }

}
