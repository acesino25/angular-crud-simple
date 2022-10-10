import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/clientes';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.sass']
})
export class ListaClientesComponent implements OnInit {

  clientes: Cliente[] = [];
  constructor(public clienteService: ClienteService) { }

  ngOnInit(): void {

    this.clientes = this.clienteService.getCliente();

  }

}
