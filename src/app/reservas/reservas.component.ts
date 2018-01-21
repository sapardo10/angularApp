import { Component, OnInit } from '@angular/core';

import { Reserva } from '../reserva';
import { ReservaService } from '../reserva.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {

  selectedReserva: Reserva;

  reservas: Reserva[]; 

  constructor(private reservaService: ReservaService) { }

  ngOnInit() {
    this.getReservas();
  }

  onSelect(reserva: Reserva): void {
    this.selectedReserva = reserva;
  }

  getReservas(): void {
    this.reservaService.getReservas()
        .subscribe(reservas => this.reservas = reservas);
  }
}