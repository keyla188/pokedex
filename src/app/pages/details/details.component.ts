import { Component, OnInit } from '@angular/core';
import { ProgressbarComponent } from '../../components/progressbar/progressbar.component';
import { CardComponent } from '../../components/card/card.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PokemonsService } from '../../services/pokemons.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ProgressbarComponent, CardComponent, RouterLink, CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
  providers: [PokemonsService]
})
export class DetailsComponent implements OnInit {
  public pokemon: any;
  public nameUrl: string = '';

  constructor(public servicePokemon: PokemonsService) {

  }

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon() {
    if (history.state && history.state.pokemon) {
      this.pokemon = history.state.pokemon;
      console.log(this.pokemon);
    } else {
    }
  }

}
