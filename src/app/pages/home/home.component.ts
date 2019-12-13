import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  menus = [
    { name: 'MEN'},
    { name: 'WOMEN'},
    { name: 'THE BRAND'},
    { name: 'LOCAL STORE'},
    { name: 'LOOK BOOK'},
  ];

  lookBooks = [
    { name: "Men's",
      description: 'Lorem ipsum dolor sit amet eras facilisis consectetur adipiscing elit lor, integer lorem consecteur dignissim laciniqui.',
      actionName: 'Mens collection'
    },
    { name: "Women's",
      description: 'Lorem ipsum dolor sit amet eras facilisis consectetur adipiscing elit lor, integer lorem consecteur dignissim laciniqui.',
      actionName: 'Women collection'
    },
    { name: "Kid's",
      description: 'Lorem ipsum dolor sit amet eras facilisis consectetur adipiscing elit lor, integer lorem consecteur dignissim laciniqui.',
      actionName: 'Kid collection'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
