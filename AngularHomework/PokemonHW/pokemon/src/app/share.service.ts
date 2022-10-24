import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,map,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor(private httpClient:HttpClient) { 
    this.getPokemon1();
  }

  baseUrl='https://pokeapi.co/api/v2/pokemon/'
  starterPokemon = [ "bulbasaur", "squirtle", "charmander" ]
  getPokemon(name:string):Observable<any>{
    return this.httpClient.get(this.baseUrl+name)
    .pipe(
      map((d:any)=>{
        const obj={
          name: d.name,
          id:d.id,
          weight:d.weight,
          types:"",
          img:d.sprites.other['official-artwork'].front_default
        }
          d.types.forEach((e:any)=>{
            obj.types+=e.type.name+', '
          })
          return obj;
})
)
}

serverPokemonData:any=[];
serverLive$=of(this.serverPokemonData)
getPokemon1(){
  this.starterPokemon.forEach(e=>{
    this.getPokemon(e).subscribe(data=>{
      this.serverPokemonData.push(data)
      this.allPokemonsInfo.push(data)
    })
  })
}

filterFn(id:any){
  for(let i =0;i<this.serverPokemonData.length;i++){
    if(this.serverPokemonData[i].id==id){
      this.selectedPokemonList.push(...this.serverPokemonData.splice(i,1))
      console.log(this.selectedPokemonList);
    }
  }
}
//----Selected pokemon list;

selectedPokemonList:any=[]
selectedPokemon$=of(this.selectedPokemonList)


//----All pokemon Info

allPokemonsInfo:any=[];
allPokemonsInfo$=of(this.allPokemonsInfo)
//------return selected pokemon list to home page
unselectPokemon(id:any){
  for(let i =0;i<this.selectedPokemonList.length;i++){
    if(this.selectedPokemonList[i].id==id){
      this.serverPokemonData.push(...this.selectedPokemonList.splice(i,1))
    }
  }
}



}


