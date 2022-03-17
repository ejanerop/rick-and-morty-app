import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterPageComponent } from './components/character-page/character-page.component';
import { CharactersComponent } from './components/characters/characters.component';
import { EpisodePageComponent } from './components/episode-page/episode-page.component';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { HomeComponent } from './components/home/home.component';
import { LocationPageComponent } from './components/location-page/location-page.component';
import { LocationsComponent } from './components/locations/locations.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'characters',
    component: CharactersComponent,
  },
  { path: 'locations', component: LocationsComponent },
  { path: 'episodes', component: EpisodesComponent },
  { path: 'characters/:id', component: CharacterPageComponent },
  { path: 'locations/:id', component: LocationPageComponent },
  { path: 'episodes/:id', component: EpisodePageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
