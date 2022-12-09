import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent {
  @Input('event') event: any;

  someProperty = 'some value';

  logFoo = () => {
    this.someProperty = 'some property changed';
    console.log('Foo');
  };
}
