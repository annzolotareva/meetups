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
  subscription!: Subscription;

  newObj!: any;
  meetupId!: number;
  newMeetup!: IMeetup | undefined;

  @Output()
public parentEvent = new EventEmitter();

  @Output()
  public createEvent = new EventEmitter();
  
  meetupReactiveForm!: FormGroup<{
    name: FormControl<string | null | undefined>;
    time: FormControl<Date | null | undefined>;
    location: FormControl<string | null | undefined>;
    description: FormControl<string | null | undefined>;
    target_audience: FormControl<string | null | undefined>;
    need_to_know: FormControl<string | null | undefined>;
    will_happen: FormControl<string | null | undefined>;
    reason_to_come: FormControl<string | null | undefined>;
  }>;
  

  constructor(private meetupsService: MeetupsService, private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    const from = this.router.url.lastIndexOf('/');
    let meetupId = Number(this.router.url.slice(from + 1));
    
    this.subscription = this.meetupsService.getElems()
    .pipe(
      take(1)
    )
    .subscribe((arg: IMeetup[]) => {
      
      this.newMeetup = arg.find(elem => elem.id === meetupId)  
      console.log(this.newMeetup);

      this.initForm();
    this.meetupReactiveForm.valueChanges.subscribe();
    });
  }
  initForm() {
		this.meetupReactiveForm = this.fb.group({
		  name: [ this.newMeetup?.name, [Validators.required]],
	    time: [this.newMeetup?.time, [Validators.required]],
      location: [this.newMeetup?.location, [Validators.required]],
      description: [this.newMeetup?.description, [Validators.required]],
      target_audience: [this.newMeetup?.target_audience, [Validators.required]],
      need_to_know: [this.newMeetup?.need_to_know, [Validators.required]],
      will_happen: [this.newMeetup?.will_happen, [Validators.required]],
      reason_to_come: [this.newMeetup?.reason_to_come, [Validators.required]]
	  });
	}

  
  
   ngOnDestroy() {
    this.subscription.unsubscribe()
}

  onSubmit() {
    if (this.meetupReactiveForm.invalid) {
      /** Обрабатываем ошибку и прерываем выполнение метода*/
      return;
    }
    this.newObj = {
      name: this.meetupReactiveForm.value.name,
      description: this.meetupReactiveForm.value.description,
      time: this.meetupReactiveForm.value.time,
      lacation: this.meetupReactiveForm.value.location,
      target_audience: this.meetupReactiveForm.value.target_audience,
      need_to_know: this.meetupReactiveForm.value.need_to_know,
      will_happen: this.meetupReactiveForm.value.will_happen,
      reason_to_come: this.meetupReactiveForm.value.reason_to_come
    }
    // this.createEvent.emit(this.newObj);
    this.meetupsService.createNewMeetup(this.newObj).subscribe();
    this.meetupsService.refresah();
    //console.log(this.nMeetups); 
    this.router.navigate(['my-meetups']);
    
  }

  cancelEditForm(){
    this.meetupsService.cancel();
  }
}
