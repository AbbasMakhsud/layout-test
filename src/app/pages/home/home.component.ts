import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  menus = [
    { name: 'MENS'},
    { name: 'WOMEN'},
    { name: 'THE BRAND'},
    { name: 'LOCAL STORE'},
    { name: 'LOOK BOOK'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
