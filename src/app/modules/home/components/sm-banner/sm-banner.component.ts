import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sm-banner',
  templateUrl: './sm-banner.component.html',
  styleUrls: ['./sm-banner.component.scss']
})
export class SmBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bnrs: any[] = [
    {
      head: 'Seasonal Sale',
      p: 'Collection -50% OFF',
    },
    {
      head: 'New Rings Collection',
      p: 'Cara Collections 2024',
      cls: 'banner-box2',
    },
    {
      head: 'Necklaces',
      p: 'New Trendy Designs',
      cls: 'banner-box3',
    },
  ]
}
