import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Reserva } from './reserva';
import { RESERVAS } from './mock-reservas';
import { MessageService } from './message.service';


@Injectable()
export class ReservaService {
 private reservasUrl = 'api/reservas';
  constructor(private http: HttpClient,
    private messageService: MessageService) { }


  getReservas(): Observable<Reserva[]> {
  return this.http.get<Reserva[]>(this.reservasUrl);
  }

  getReserva(id: number): Observable<Reserva> {
  // Todo: send the message _after_ fetching the hero
  this.messageService.add(`HeroService: fetched reserva id=${id}`);
  return of(RESERVAS.find(reserva => reserva.id === id));
  }

  private log(message: string) {
  this.messageService.add('HeroService: ' + message);
}
}