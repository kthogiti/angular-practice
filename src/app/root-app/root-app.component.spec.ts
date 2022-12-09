import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootAppComponent } from './root-app.component';

describe('RootAppComponent', () => {
  let component: RootAppComponent;
  let fixture: ComponentFixture<RootAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RootAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
