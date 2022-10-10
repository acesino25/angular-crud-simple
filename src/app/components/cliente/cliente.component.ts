import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Cliente } from 'src/app/models/clientes';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.sass']
})
export class ClienteComponent implements OnInit {

  @Input() cliente: Cliente = {
    /*title: '',
    description: '',
    hide: true,*/
  }
  constructor(public clienteService: ClienteService) {}

  ngOnInit(): void {
  }

  deleteCliente(cliente: Cliente){
    if(confirm('R U Sure?')){
      this.clienteService.deleteCliente(cliente);
    }
    
  }

}
