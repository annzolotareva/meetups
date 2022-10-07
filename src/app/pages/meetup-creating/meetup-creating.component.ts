import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MeetupsService } from 'src/app/services/meetups.service';

@Component({
  selector: 'app-meetup-creating',
  templateUrl: './meetup-creating.component.html',
  styleUrls: ['./meetup-creating.component.scss']
})
export class MeetupCreatingComponent implements OnInit {

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

  constructor(private meetupsService: MeetupsService, private fb: FormBuilder) {}

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
    //const string = this.meetupReactiveForm.get('date') + this.meetupReactiveForm.get('time')
  }


}
