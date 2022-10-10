import { Injectable } from '@angular/core';
import { Cliente } from '../models/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clientes: Cliente[] = [];

  constructor() { }

  getCliente(){
    if(localStorage.getItem('clientes') === null){
      return this.clientes;
    }else{
      this.clientes = JSON.parse(localStorage.getItem('clientes')!);
      return this.clientes;
    }
    
  }

  addCliente(cliente: Cliente){
    let clientes: Cliente[] = [];
    this.clientes.push(cliente);
    if(localStorage.getItem('clientes') === null){
      localStorage.setItem('clientes', JSON.stringify(clientes));
      
      clientes = JSON.parse(localStorage.getItem('clientes')!);
      clientes.push(cliente);
      localStorage.setItem('clientes', JSON.stringify(clientes));
    }else{
      clientes = JSON.parse(localStorage.getItem('clientes')!);
      clientes.push(cliente);
      localStorage.setItem('clientes', JSON.stringify(clientes));
    }
    
  }

  deleteCliente(cliente: Cliente){
    for(let i = 0; i < this.clientes.length; i++){
      if(cliente == this.clientes[i]){
        this.clientes.splice(i,1);
        localStorage.setItem('clientes', JSON.stringify(this.clientes));
      }
    }
  }
}
