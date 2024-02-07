import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';
import { DetailsComponent } from './pages/details/details.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'pokemons', component: PokemonsComponent},
    { path: 'pokemon/:id', component: DetailsComponent}
];
