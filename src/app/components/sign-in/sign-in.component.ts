import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private authService: AuthService,
              ) {
  }
  submit() {
    if(this.form.invalid)
      return;
    const { email, password } = this.form.value;
    const email$ = String(email);
    const password$ = String(password);
    this.authService.login(email$, password$)
      .subscribe(() => {

      });

  }
}
