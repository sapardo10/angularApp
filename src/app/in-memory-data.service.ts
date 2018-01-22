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
    const anuncios = [
      {id:11, fecha: '12/12/2017', titulo: 'Bono de navidad', contenido: 'Me permito recordarles a los residentes que dadas las fiestas se les pide como cada año hacer una donación voluntaria para entregarle un bono navideño a los trabajadores que nos acompañan durante todo el año'},
      {id:12, fecha: '22/12/2017', titulo: 'Bloqueo a domicilios', contenido: 'Se les recuerda a los residentes que dadas las festividades navideñas y que la mayoria de hogares se encuentran vacios, los domicilios deben ser recogidos en porteria hasta enero 3'},
      {id:13, fecha: '24/12/2017', titulo: 'Buenos deseos', contenido: 'La administración se permite desearle una muy buena navidad a todos los residentes'},
      {id:14, fecha: '27/12/2017', titulo: 'Razón de sonido fuerte anoche', contenido: 'Se pide calma a los residentes frente a un ruido fuerte que sono dentro del conjunto, los vigilantes descubrieron que se trato solo el estallido de una llanta de un vehiculo'}
      ]
    return {reservas, anuncios};
  }
}