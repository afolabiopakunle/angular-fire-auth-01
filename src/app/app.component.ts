import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  user$ = this.authService.currentUser$;

  constructor(
    private authService: AuthService,
    private router: Router,
              ) {
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/log-in']);
      }
    );
  }
}
