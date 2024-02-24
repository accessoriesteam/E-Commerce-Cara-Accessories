import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner2',
  templateUrl: './banner2.component.html',
  styleUrls: ['./banner2.component.scss']
})
export class Banner2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bnrs: any[] = [
    {
      head: 'crazy deals',
      main: 'buy 1 get 1 free',
      p: 'The best jewelry is on sale at cara',
      btn: 'Learn More',
    },
    {
      head: 'new accessories',
      main: 'upcomming season',
      p: 'The best accessories is on sale at cara',
      btn: 'Collection',
      cls: 'banner-box2',
    },
  ]
}
