import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { urlClient } from '../shared/urls';
import { Client } from '../models/client.model';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = urlClient;
  constructor(private http: HttpClient) { }
  
  listClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl);
  }

  addClient(cli: Client): Observable<Client> {
    return this.http.post<Client>(this.apiUrl, cli);
  }

  updateClient(id: number, client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.apiUrl}/${id}`, client );
  }

  deleteClient(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

}
