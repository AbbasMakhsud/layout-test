import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
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
