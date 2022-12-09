import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent {
  @Input('event')
  event: any;

  @Output('eventClick') eventClick = new EventEmitter();

  btnClick = () => {
    this.eventClick.emit(this.event);
    console.log('clicked!');
  };
}
