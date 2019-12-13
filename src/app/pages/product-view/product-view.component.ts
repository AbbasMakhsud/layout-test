import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  menus = [
    { name: 'MEN'},
    { name: 'WOMEN'},
    { name: 'THE BRAND'},
    { name: 'LOCAL STORE'},
    { name: 'LOOK BOOK'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
