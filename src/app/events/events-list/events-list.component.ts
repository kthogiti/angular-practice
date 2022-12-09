import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent {
  eventData = {
    id: 1,
    name: 'Angular Connect',
    date: '2/14/2023',
    time: '10:00 pm',
    price: 599.99,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: 'Miyapur',
      city: 'Hyderabad',
      country: 'India'
    }
  };

  eventClickHandler = (e: any) => {
    console.log(e, 'from parent');
  };
}
