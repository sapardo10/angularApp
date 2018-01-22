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
      .subscribe(reservas => this.reservas = reservas);
  }

  goBack(): void {
  this.location.back();
  }

  add(lugar:string, usuario:string, fecha:string){
    lugar = lugar.trim();
    usuario = usuario.trim();
    fecha = fecha.trim();
    if(!lugar || !usuario || !fecha) { return ; }
    this.reservaService.addReserva({lugar,usuario,fecha} as Reserva)
    .subscribe(reserva => {
      this.reservas.push(reserva);
      })
  }
}