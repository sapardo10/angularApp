import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Reserva } from './reserva';
import { RESERVAS } from './mock-reservas';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ReservaService {
 private reservasUrl = 'api/reservas';
  constructor(private http: HttpClient,
    private messageService: MessageService) { }


  getReservas(): Observable<Reserva[]> {
  return this.http.get<Reserva[]>(this.reservasUrl)
  .pipe(
      tap(reservas => this.log(`fetched reservas`)),
      catchError(this.handleError('getReservas', []))
    );
  }

  /** GET hero by id. Will 404 if id not found */
  getReserva(id: number): Observable<Reserva> {
    const url = `${this.reservasUrl}/${id}`;
    return this.http.get<Reserva>(url).pipe(
      tap(_ => this.log(`fetched reserva id=${id}`)),
      catchError(this.handleError<Reserva>(`getReserva id=${id}`))
    );
  }

    /** PUT: update the hero on the server */
  updateReserva (reserva: Reserva): Observable<any> {
    return this.http.put(this.reservasUrl, reserva, httpOptions).pipe(
      tap(_ => this.log(`updated reserva id=${reserva.id}`)),
      catchError(this.handleError<any>('updateReserva'))
    );
  }

  /** POST: add a new hero to the server */
  addReserva (reserva: Reserva): Observable<Reserva> {
    return this.http.post<Reserva>(this.reservasUrl, reserva, httpOptions).pipe(
      tap((reserva: Reserva) => this.log(`added reserva w/ id=${reserva.id}`)),
      catchError(this.handleError<Reserva>('addReserva'))
    );
  }

  private log(message: string) {
  this.messageService.add('HeroService: ' + message);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}