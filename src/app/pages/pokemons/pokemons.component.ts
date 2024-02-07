import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CardComponent } from '../../components/card/card.component';
import { PokemonsService } from '../../services/pokemons.service';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { forkJoin } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ViewportScroller } from '@angular/common';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { LoaderComponent } from '../../components/loader/loader.component';

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [RouterLink, HomeComponent, CardComponent, CommonModule, NgxPaginationModule, FormsModule, AutocompleteLibModule, LoaderComponent],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css',
  providers: [PokemonsService]
})
export class PokemonsComponent implements OnInit {

  totalItems = 1302;
  public pokemonsResponse: any[] = [];
  public pokemons: any[] = [];
  public pokemonsAll: any[] = [];
  page: number = 0;
  keyword = 'name';
  loading = true;

  constructor(public servicePokemon: PokemonsService, private viewportScroller: ViewportScroller) {

  }

  ngOnInit(): void {
    this.getPokemons(this.page);
    this.getAllPokemons();
  }

  getAllPokemons() {
    this.servicePokemon.getAllPokemons().subscribe(
      response => {
        this.pokemonsAll = response.results;
      }, error => {
        console.log(error);
        this.loading = false;
      }
    )
  }

  getPokemons(page: number) {
    this.loading = true;
    this.pokemons = [];
    this.servicePokemon.getAllPokemonResponse(page).subscribe(
      response => {
        this.pokemonsResponse = response.results;
        console.log(this.pokemonsResponse);
        this.getCardsPokemons(this.pokemonsResponse);
        this.viewportScroller.scrollToPosition([0, 0]);
      },
      error => {
        console.log(error);
        this.loading = false;
      }
    )
  }

  getCardsPokemons(pokemons: any[]) {
    const pokemonsRequests = pokemons.map(pokemon => this.servicePokemon.getPokemonByUrl(pokemon.url));
    forkJoin(pokemonsRequests).subscribe(
      response => {
        this.pokemons = response;
        console.log(response);
        this.loading = false;
      }, error => {
        console.log(error);
        this.loading = false;
      }
    )


  }

  // PAGINATION
  goToPage(page: number) {
    this.page = page * 20 - 20;
    console.log(this.page);
    this.getPokemons(this.page)
    this.page = page;
  }

  // INPUT AUTOCOMPLETED
  selectEvent(item: any) {
    console.log(item);
    this.loading = true;
    this.getCardsPokemons([item]);
  }

  onChangeSearch(val: string) {
    if (!val.trim()) {
      this.page = 0;
      this.getPokemons(this.page);
    }
  }




}
