import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if(password && confirmPassword && password !== confirmPassword) {
      return {
        passwordsDontMatch: true
      }
    }
    return null
  }
}
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required,)
  },
    {validators: passwordsMatchValidator()});

  constructor(
    private authService: AuthService,
    private router: Router,
    private toast: HotToastService,
              ) {}

  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  submit() {
      if(this.form.invalid)
        return
    const { name, email, password } = this.form.value;
    const name$ = String(name);
    const email$ = String(email);
    const password$ = String(password);
    this.authService.signUp(name$, email$, password$).pipe(
      this.toast.observe({
        success: 'Congratulations! You\'re all signed up!',
        loading: 'Loading...',
        error: ({ message }) => `${message}`,
      })
    )
      .subscribe(() => {
        this.router.navigate(['/home']);
        }

      )
  }
}
