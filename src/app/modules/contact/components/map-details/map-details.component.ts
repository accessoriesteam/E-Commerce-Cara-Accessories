import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-details',
  templateUrl: './map-details.component.html',
  styleUrls: ['./map-details.component.scss']
})
export class MapDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contacts: any[] = [
    {
      icon: 'fas fa-map',
      detail: 'Tanta Qism 2, Tanta, Gharbia Governorate 6635001, Egypt',
    },
    {
      icon: 'fas fa-envelope',
      detail: 'accessories.team.2024@gmail.com',
    },
    {
      icon: 'fas fa-phone-alt',
      detail: '+01 2222 365/(+91) 01 2345 6789',
    },
    {
      icon: 'fas fa-clock',
      detail: '10.00am to 8.00pm',
    },

  ]
}
