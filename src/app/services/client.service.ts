import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client.model';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiUrl = 'https://localhost:7240/api/client';

  constructor(private http: HttpClient) { }
  
  listClients(): Observable<Client[]> {
  const headers = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('Accept', 'application/json')
  .set('Access-Control-Allow-Origin', 'https://localhost:7240');
  // Definir los parámetros
  //const params = new HttpParams().set('p1', 'val1');
  return this.http.get<Client[]>(this.apiUrl, { headers }  );
  }

  addClient(cli: Client): Observable<Client> {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json');
    return this.http.post<Client>(this.apiUrl, cli, { headers } );
  }

  updateClient(id: number, client: Client): Observable<Client> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<Client>(`${this.apiUrl}/${id}`, client, { headers });
  }

  deleteClient(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

}
