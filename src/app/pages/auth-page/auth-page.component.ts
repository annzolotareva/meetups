import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
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
  }>;

  private passwordValidator(control: FormControl): ValidationErrors | null {
    const value = control.value;
    const hasNumber = /[0-9]/.test(value); // Проверка на содержание цифр
    const hasSpecialCharacter = /[!@#$%^&*]/.test(value); // Проверка на содержание хотя бы одного спецсимвола
    const hasLowercaseLetter = /[a-z]/.test(value); // Проверка на содержание хотя бы одной латинской буквы в нижнем регистре
    const hasCapitalLetter = /[A-Z]/.test(value); // Проверка на содержание хотя бы одной латинской буквы в верхнем регистре
    const isLengthValid = value ? value.length > 6 : false; // Проверка на минимальную длину пароля
   
    /** Общая проверка */
    const passwordValid = hasNumber && hasSpecialCharacter && hasCapitalLetter && hasLowercaseLetter && isLengthValid;
  
    if (!passwordValid) {
      return { invalidPassword: 'Пароль не прошел валидацию' };
    }
    return null;
  }

  constructor(private authService: AuthService, private fb: FormBuilder) {}
  
  initForm() {
		this.myFirstReactiveForm = this.fb.group({
		  email: ['', [Validators.required]],
	    password: ['', [Validators.required]]
	  });
	}

  ngOnInit(): void {
    this.initForm();
    this.myFirstReactiveForm.valueChanges.subscribe((value) => 
	console.log(`${value.email}: ${value.password}`)
);
  }
  
  login() {
    this.authService.login(this.myFirstReactiveForm.value.email!, this.myFirstReactiveForm.value.password!).subscribe(console.log);
  }

  onSubmit() {
    if (this.myFirstReactiveForm.invalid) {
      /** Обрабатываем ошибку и прерываем выполнение метода*/
      return;
    }
    this.login()
  }

  
}

