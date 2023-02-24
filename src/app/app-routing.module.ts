import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo, } from '@angular/fire/auth-guard';
import { ProfileComponent } from './components/profile/profile.component';

const redirectToLogin = () => redirectUnauthorizedTo(['/log-in']);
const redirectToHome = () => redirectLoggedInTo(['home'])

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LandingComponent },
  { path: 'log-in', component: SignInComponent, ...canActivate(redirectToHome) },
  { path: 'sign-up', component: SignUpComponent, ...canActivate(redirectToHome) },
  { path: 'home', component: HomeComponent, ...canActivate(redirectToLogin) },
  { path: 'profile', component: ProfileComponent, ...canActivate(redirectToLogin)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
