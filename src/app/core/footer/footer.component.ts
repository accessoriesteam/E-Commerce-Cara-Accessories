import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent  {

  constructor() { }

  // Details
  details: any[] = [
    {
      head: 'Address: ',
      date: ' Tanta Qism 2, Tanta, Gharbia Governorate 6635001, Egypt',
    },
    {
      head: 'Email: ',
      date: ' accessories.team.2024@gmail.com',
    },
    {
      head: 'Hours: ',
      date: ' 10:00 - 8:00',
    },
  ]

  // Icons
  icons: any[] = [
    {
      cls: 'fab fa-facebook-f',
    },
    {
      cls: 'fab fa-twitter',
    },
    {
      cls: 'fab fa-instagram',
    },
    {
      cls: 'fab fa-pinterest-p',
    },
    {
      cls: 'fab fa-youtube',
    },
  ]
}
