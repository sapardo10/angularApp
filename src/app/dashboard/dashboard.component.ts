import { Component, OnInit } from '@angular/core';
import { Reserva } from '../reserva';
import { ReservaService } from '../reserva.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  reservas: Reserva[] = [];

  constructor(private reservaService: ReservaService,
    private location: Location) { 

  }

  ngOnInit() {
    this.getReservas();
  }

  getReservas(): void {
    this.reservaService.getReservas()
      .subscribe(reservas => this.reservas = reservas.slice(1, 5));
  }

  goBack(): void {
  this.location.back();
}
}