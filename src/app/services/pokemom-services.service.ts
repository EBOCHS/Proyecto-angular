import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemomServicesService {

  urlPokem = "https://pokeapi.co/api/v2/pokemon/";
  constructor(private httP: HttpClient) { } 
 //metodo para listar 
 lisPokemons : any;
 getPokemon(numero : any):Observable<any>{

   return this.lisPokemons =  this.httP.get(this.urlPokem+numero);
 }

}
