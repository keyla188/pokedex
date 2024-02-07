import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  public url: string;

  constructor(private _http: HttpClient) {
    this.url = "https://pokeapi.co/api/v2"
  }

  getAllPokemons(): Observable<any> {
    return this._http.get<any>(`${this.url}/pokemon?limit=1302`)
  }

  getAllPokemonResponse(page: number): Observable<any> {
    return this._http.get<any>(`${this.url}/pokemon?offset=${page}&limit=20`)
  }

  getPokemonByUrl(url: string): Observable<any> {
    return this._http.get<any>(`${url}`);
  }

  getPokemon(name: string): Observable<any> {
    return this._http.get<any>(`${this.url}/pokemon/${name}`);
  }

  getTypes(): Observable<any> {
    return this._http.get<any>(`${this.url}/type/`);
  }

}
