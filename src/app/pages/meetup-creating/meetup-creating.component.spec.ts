import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetupCreatingComponent } from './meetup-creating.component';

describe('MeetupCreatingComponent', () => {
  let component: MeetupCreatingComponent;
  let fixture: ComponentFixture<MeetupCreatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetupCreatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetupCreatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
