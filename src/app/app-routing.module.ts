import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservasComponent } from './reservas/reservas.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ReservaDetailComponent }  from './reserva-detail/reserva-detail.component';
import { LoginComponent } from './login/login.component';
import { IntroComponent } from './intro/intro.component';

const routes: Routes = [
  
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'intro', component: IntroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: ReservaDetailComponent },
  { path: 'reservas', component: ReservasComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}