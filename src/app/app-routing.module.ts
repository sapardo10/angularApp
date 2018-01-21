import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservasComponent } from './reservas/reservas.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ReservaDetailComponent }  from './reserva-detail/reserva-detail.component';

const routes: Routes = [
  
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: ReservaDetailComponent },
  { path: 'reservas', component: ReservasComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}