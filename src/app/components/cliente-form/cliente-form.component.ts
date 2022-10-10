import { Component, OnInit } from '@angular/core';
import { distinct } from 'rxjs';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.sass']
})
export class ClienteFormComponent implements OnInit {

  constructor(public clienteService: ClienteService) { }

  ngOnInit(): void {
  }

  addCliente(nombre: HTMLInputElement, 
    apellido: HTMLInputElement, 
    email: HTMLInputElement, 
    dni: HTMLInputElement, 
    nacimiento: HTMLInputElement, 
    telefono: HTMLInputElement, 
    direccion: HTMLInputElement){

    console.log('agregando...', nombre.value, apellido.value)
    this.clienteService.addCliente({
      Nombre: nombre.value,
      Apellido: apellido.value,
      Email: email.value,
      Dni: Number(dni.value),
      Nacimiento: new Date(nacimiento.value),
      Telefono: telefono.value,
      Direccion: direccion.value,
      hide: true
    });

    nombre.value = '';
    apellido.value = '';
    email.value = '';
    dni.value = '';
    nacimiento.value = '';
    telefono.value = '';
    direccion.value = '';

    nombre.focus();

    return false;
  }

}
