import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const reservas = [
  { id: 11, lugar: 'Gimnasio', usuario:  'Jose Gonzalez' , fecha: '12/12/2017'},
  { id: 12, lugar: 'Salon comunal', usuario: 'Jose Gonzalez' , fecha: '12/12/2017'},
  { id: 13, lugar: 'Gimnasio', usuario : 'Tino Aspirilla' , fecha: '1/12/2017'},
  { id: 14, lugar: 'Gimnasio', usuario : 'Chespirito Ardila' , fecha: '2/12/2017'},
  { id: 15, lugar: 'Piscina', usuario: 'Jose Gonzalez' , fecha: '12/12/2017'}
    ];
    return {reservas};
  }
}