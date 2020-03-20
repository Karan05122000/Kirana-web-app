import { Items } from './../../constants/mockup-data';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  @Input() item: any;
  constructor() { }
  items;
  ngOnInit() {

  }
  clickMethod(name: string, id) {
    if (confirm('Are you sure to delete this item')) {
      // this.items.splice(id, 1);
      console.log(id.value);
    }
  }
}
