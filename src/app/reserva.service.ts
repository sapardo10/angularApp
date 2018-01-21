import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Reserva } from './reserva';
import { RESERVAS } from './mock-reservas';
import { MessageService } from './message.service';

@Injectable()
export class ReservaService {

  constructor(private messageService: MessageService) { }

  getReservas(): Observable<Reserva[]> {
    // Todo: send the message _after_ fetching the heroes
    this.messageService.add('ReservaService: fetched reservas');
    return of(RESERVAS);
  }
}