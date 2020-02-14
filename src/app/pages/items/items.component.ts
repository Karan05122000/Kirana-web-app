import { Component, OnInit } from '@angular/core';
import { Items } from '../../constants/mockup-data';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  isSidePanelExpanded: boolean;
  items: { name: string; unit: string; description: string; variety: string[]; }[];

  constructor(private interaction: InteractionService) {
    this.isSidePanelExpanded = this.interaction.getExpandedStatus();
  }

  ngOnInit() {
    this.items = Items;
    this.interaction.expandedStatus$.subscribe( (res) => {
      this.isSidePanelExpanded = res;
    });
  }
}
