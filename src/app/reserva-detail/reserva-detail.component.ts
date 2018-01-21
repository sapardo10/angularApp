import { Component, OnInit, Input } from '@angular/core';
import { Reserva } from '../reserva';
@Component({
  selector: 'app-reserva-detail',
  templateUrl: './reserva-detail.component.html',
  styleUrls: ['./reserva-detail.component.css']
})
export class ReservaDetailComponent implements OnInit {

  @Input() reserva: Reserva;
  constructor() { }

  ngOnInit() {
  }

}
