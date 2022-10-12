import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'lodash';
import { mergeMap, pipe, Subscription, take, timeInterval } from 'rxjs';
import { IMeetup } from 'src/app/entities/meetup/meetup.component';
import { MeetupsService } from 'src/app/services/meetups.service';

@Component({
  selector: 'app-meetup-creating',
  templateUrl: './meetup-creating.component.html',
  styleUrls: ['./meetup-creating.component.scss']
})
export class MeetupCreatingComponent implements OnInit, OnDestroy {
  nMeetups: Array<IMeetup> = [];
  subscription!: Subscription;

  newObj!: any;
  meetupId!: number;

  @Output()
  public createEvent = new EventEmitter();
  
  meetupReactiveForm!: FormGroup<{
    name: FormControl<string | null >;
    date: FormControl<string | null>;
    time: FormControl<string | null>;
    location: FormControl<string | null>;
    description: FormControl<string | null>;
    target_audience: FormControl<string | null>;
    need_to_know: FormControl<string | null>;
    will_happen: FormControl<string | null>;
    reason_to_come: FormControl<string | null>;
  }>;

  constructor(private meetupsService: MeetupsService, private fb: FormBuilder, private router: Router) {}
  ngOnDestroy(): void {}

  initForm() {
		this.meetupReactiveForm = this.fb.group({
		  name: ['', [Validators.required]],
      date: ['', [Validators.required]],
	    time: ['', [Validators.required]],
      location: ['', [Validators.required]],
      description: ['', [Validators.required]],
      target_audience: ['', [Validators.required]],
      need_to_know: ['', [Validators.required]],
      will_happen: ['', [Validators.required]],
      reason_to_come: ['', [Validators.required]]
	  });
	}

  ngOnInit(): void {
    this.initForm();
    this.meetupReactiveForm.valueChanges.subscribe();
  }

  
 
  onSubmit() {
    if (this.meetupReactiveForm.invalid) {
      /** Обрабатываем ошибку и прерываем выполнение метода*/
      return;
    }
    this.newObj = {
      name: this.meetupReactiveForm.value.name,
      description: this.meetupReactiveForm.value.description,
      time: this.meetupReactiveForm.value.date,
      lacation: this.meetupReactiveForm.value.location,
      target_audience: this.meetupReactiveForm.value.target_audience,
      need_to_know: this.meetupReactiveForm.value.need_to_know,
      will_happen: this.meetupReactiveForm.value.will_happen,
      reason_to_come: this.meetupReactiveForm.value.reason_to_come
    }
    this.createEvent.emit(this.newObj);
    
    console.log(this.nMeetups); 

    //this.router.navigate(['my-meetups']);
    //const dateTime = this.meetupReactiveForm.get('date') + this.meetupReactiveForm.get('time')
  }
}
