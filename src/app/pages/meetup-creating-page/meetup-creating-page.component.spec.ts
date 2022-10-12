import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetupCreatingPageComponent } from './meetup-creating-page.component';

describe('MeetupCreatingPageComponent', () => {
  let component: MeetupCreatingPageComponent;
  let fixture: ComponentFixture<MeetupCreatingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetupCreatingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetupCreatingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
