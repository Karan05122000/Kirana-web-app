import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-item-card",
  templateUrl: "./item-card.component.html",
  styleUrls: ["./item-card.component.scss"]
})
export class ItemCardComponent implements OnInit {
  @Input() item: any;
  showMore: boolean = true;
  showMoreDescription() {
    this.showMore = this.showMore ? false : true;
  }
  constructor() {}

  ngOnInit() {}
}
