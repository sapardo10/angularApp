import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReservasComponent } from './reservas/reservas.component';
import { ReservaService } from './reserva.service';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';
import { ReservaDetailComponent } from './reserva-detail/reserva-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    ReservasComponent,
    MessagesComponent,
    ReservaDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ReservaService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
