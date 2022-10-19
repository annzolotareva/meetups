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
export class MeetupCreatingComponent implements OnInit {
  subscription!: Subscription;

  from: any;

  meetupId!: number;
  newMeetup!: IMeetup | undefined;


  @Output()
public parentEvent = new EventEmitter();

  
  meetupReactiveForm!: FormGroup<{
    name: FormControl<string | null>;
    time: FormControl<any | null>;
    location: FormControl<string | null>;
    description: FormControl<string | null>;
    target_audience: FormControl<string | null>;
    need_to_know: FormControl<string | null>;
    will_happen: FormControl<string | null>;
    reason_to_come: FormControl<string | null>;
  }>;
  

  constructor(private meetupsService: MeetupsService, private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
  //   this.from = this.router.url.lastIndexOf('/');
  // this.meetupId = Number(this.router.url.slice(this.from + 1));
    this.initForm();
    this.meetupReactiveForm.valueChanges.subscribe();
  }
  initForm() {
    // this.subscription = this.meetupsService.getElems()
    // .pipe(
    //   take(1)
    // )
    // .subscribe((arg: IMeetup[]) => {
      
    //   this.newMeetup = arg.find(elem => elem.id === this.meetupId)  
      // console.log(this.newMeetup);
      	this.meetupReactiveForm = this.fb.group({
		  name: [ '', [Validators.required]],
	    time: [null, [Validators.required]],
      location: ['', [Validators.required]],
      description: ['', [Validators.required]],
      target_audience: ['', [Validators.required]],
      need_to_know: ['', [Validators.required]],
      will_happen: ['', [Validators.required]],
      reason_to_come: ['', [Validators.required]]
	  });
    // });
	
	}

  changeMeetup() {
    this.meetupsService.changeMeetup()
  }

  onSubmit() {
    if (this.meetupReactiveForm.invalid) {
      /** Обрабатываем ошибку и прерываем выполнение метода*/
      return;
    }
    const newObj = {
      name: this.meetupReactiveForm.value.name,
      description: this.meetupReactiveForm.value.description,
      time: this.meetupReactiveForm.value.time,
      location: this.meetupReactiveForm.value.location,
      target_audience: this.meetupReactiveForm.value.target_audience,
      need_to_know: this.meetupReactiveForm.value.need_to_know,
      will_happen: this.meetupReactiveForm.value.will_happen,
      reason_to_come: this.meetupReactiveForm.value.reason_to_come
    }
    console.log(newObj);
    this.parentEvent.emit(newObj);
    // this.meetupsService.createNewMeetup(this.newObj).subscribe(() => 
    // this.meetupsService.refresah()
    // )
    
    this.router.navigate(['my-meetups']);
    
  }

  cancelEditForm(){
    this.meetupsService.cancel();
  }
}
