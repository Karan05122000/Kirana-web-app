import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-retailer',
  templateUrl: './retailer.component.html',
  styleUrls: ['./retailer.component.scss']
})
export class RetailerComponent implements OnInit {
  isSidePanelExpanded: boolean;

  constructor(private interaction: InteractionService) {
    this.isSidePanelExpanded = this.interaction.getExpandedStatus();
  }

  ngOnInit() {
    this.interaction.expandedStatus$.subscribe( (res) => {
      console.log(res);
      this.isSidePanelExpanded = res;
    });
  }

}
