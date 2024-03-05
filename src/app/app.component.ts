import { Component, ComponentFactoryResolver, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientService } from './services/client.service';
import { Client } from './models/client.model';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, NgIf } from '@angular/common';
import { FormGroup, FormsModule, NgForm, NgModel, ReactiveFormsModule } from '@angular/forms';

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
  public client?: any = {
    id: 0,  
    name: '',
    lastName: '',
    phone: '',
    email: '',
    archived: false,
    created: new Date(),
    updated: '',
    deleted: ''
  };
  termSearchLastName?: string = "";

  constructor(private clientService: ClientService ) { }

  ngOnInit(): void {
    this.listClients();
  }

  listClients(): void {
    this.clientService.listClients().subscribe((cli) => {
      let listAux: any [] = []; 
      cli.forEach( item => {
        if (item?.archived===false) listAux.push(item);
      })
      this.clients = listAux;
    });
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

  deleteActionClient(id?: any ): void {
    if (id===0 || id=== null || id===undefined)return;
    this.clientService.deleteClient( id ).subscribe( (res) => {
      this.listClients();
    });
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

  manageClient(action?: string | any ): void {
    console.warn( 'Action ', action, ' ', this.client  );
    if ( action === 'add') {
      this.clientService.addClient( this.client ).subscribe( (res) => {
        console.warn('response ', ' ', res );
        this.listClients();
      });
    } else if ( action === 'edit' ) {
       
    }
  }

}
