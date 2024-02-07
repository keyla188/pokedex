import { Component, Input } from '@angular/core';
import { PokemonsComponent } from '../../pages/pokemons/pokemons.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progressbar',
  standalone: true,
  imports: [PokemonsComponent, CommonModule],
  templateUrl: './progressbar.component.html',
  styleUrl: './progressbar.component.css'
})
export class ProgressbarComponent {
  @Input() statData: any;
  @Input() pokemon: any;
}
