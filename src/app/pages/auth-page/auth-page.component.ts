import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {

  myFirstReactiveForm!: FormGroup<{
    email: FormControl<string | null >;
    password: FormControl<string | null>;
    fio: FormControl<string | null>;
  }>;

  constructor(private authService: AuthService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    this.myFirstReactiveForm.valueChanges.subscribe((value) =>
	console.log(`${value.email}: ${value.password}: ${value.fio}`)
);
  }

  

  initForm() {
		this.myFirstReactiveForm = this.fb.group({
		  email: [''],
	    password: [''],
      fio: ['']
	  });
	}

  login() {
    this.authService.login(this.myFirstReactiveForm.value.email!, this.myFirstReactiveForm.value.password!).subscribe(console.log);
  }
}

