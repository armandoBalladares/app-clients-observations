import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientService } from './services/client.service';
import { Client } from './models/client.model';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    RouterOutlet,
    HttpClientModule,
  ],
  providers: [ ClientService ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppComponent {
  clients?: Client[];
  termSearchLastName?: string = "";

  constructor(private clientService: ClientService ) { }

  ngOnInit(): void {
    this.listClients();
  }

  listClients(): void {
    this.clientService.listClients().subscribe(cli => this.clients = cli );
  }

  addClient(nombre: string): void {
    const newClient: Client = { nombre } as Client;
    this.clientService.addClient(newClient).subscribe(() => this.listClients());
  }

  deleteClient(id: number): void {
    this.clientService.deleteClient(id).subscribe( ( response ) => this.listClients());
  }

  editActionClient(id?: number | null | undefined ): void {

  }

  deleteActionClient(id?: number | null | undefined ): void {

  }

  searchClient(): void {
    if ( this.termSearchLastName?.toString().trim()==="") {
      this.listClients();
      return;
    }
    let auxClient:any [] = [];
    let foundClients = this.clients?.forEach( (item ) => {
      let auxName = item?.lastName?.toString().toLocaleLowerCase().trim();
      let auxTermSearch =  this.termSearchLastName?.toString().toLocaleLowerCase().trim();
      console.log( auxName, ' ', auxTermSearch )
      if( auxName === auxTermSearch ) {
        auxClient.push(item);
      }
    });

    if ( auxClient.length > 0 ) {
      this.clients = auxClient;
    }

  }

}
