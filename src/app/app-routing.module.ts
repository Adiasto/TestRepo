import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LoginService } from './auth/login.service';
import { LoggedIn } from './auth/auth-gaurd.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'drivers',
    loadChildren: './drivers/drivers.module#DriversModule',
    canActivate: [LoggedIn]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
