import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ReservasComponent } from './reservas/reservas.component';
import { ReservaService } from './reserva.service';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';
import { ReservaDetailComponent } from './reserva-detail/reserva-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { IntroComponent } from './intro/intro.component';


@NgModule({
  declarations: [
    AppComponent,
    ReservasComponent,
    MessagesComponent,
    ReservaDetailComponent,
    DashboardComponent,
    LoginComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
      // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
      // and returns simulated server responses.
      // Remove it when a real server is ready to receive requests.
      HttpClientInMemoryWebApiModule.forRoot(
        InMemoryDataService, { dataEncapsulation: false }
      )
  ],
  providers: [ReservaService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
