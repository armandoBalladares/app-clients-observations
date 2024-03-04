import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientService } from './services/client.service';
import { Client } from './models/client.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  clients?: Client[];

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
    // this.deleteClient(id).subscribe( () => this.listClients());
  }
}
