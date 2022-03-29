import { Component, OnInit } from '@angular/core';
import { PokemomServicesService } from 'src/app/services/pokemom-services.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit { 
  lisPokemon : any[]=[];
  lisAbilidades : any[]=[];
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  constructor(private pokemonServices:PokemomServicesService ) { }
  ngOnInit(): void {
    for(let i =1 ; i<=10 ; i++ ){
      this.pokemonServices.getPokemon(i).subscribe(res=>{
        this.lisPokemon.push(res);
        console.log(res);
      })
    }
  }

}
