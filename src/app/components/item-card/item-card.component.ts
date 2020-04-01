import { ProductsService } from './../../services/products.service';
import { _Items } from './../../models/models';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  @Input() item: _Items;
  constructor(private productsService: ProductsService) { }
  items: _Items;
  id: number;
  ngOnInit() {
    // this.productsService.deleteProduct();
  }
  clickMethod(id: any) {
    if (confirm('Are you sure to delete this item')) {
      this.productsService.deleteProduct(1);
    }
  }
}
