import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventThumbnailComponent } from './event-thumbnail.component';

describe('EventThumbnailComponent', () => {
  let component: EventThumbnailComponent;
  let fixture: ComponentFixture<EventThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventThumbnailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
