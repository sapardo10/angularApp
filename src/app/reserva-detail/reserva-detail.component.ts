import { Component, OnInit, Input } from '@angular/core';
import { Reserva } from '../reserva';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ReservaService }  from '../reserva.service';

@Component({
  selector: 'app-reserva-detail',
  templateUrl: './reserva-detail.component.html',
  styleUrls: ['./reserva-detail.component.css']
})
export class ReservaDetailComponent implements OnInit {

  @Input() reserva: Reserva;
 constructor(
  private route: ActivatedRoute,
  private reservaService: ReservaService,
  private location: Location
) {}

  ngOnInit(): void {
  this.getReserva();
}

  getReserva(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.reservaService.getReserva(id)
    .subscribe(reserva => this.reserva = reserva);
  }
  goBack(): void {
  this.location.back();
}

}
