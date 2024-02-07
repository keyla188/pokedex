import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DetailsComponent } from '../../pages/details/details.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink, DetailsComponent, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  @Input() pokemonData: any;
  constructor() {

  }

  ngOnInit(): void {
    //    console.log(this.pokemonData);
  }
}
