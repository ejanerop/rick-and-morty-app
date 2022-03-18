import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';
import { CoverComponent } from './components/home/cover/cover.component';
import { TileComponent } from './components/home/tile/tile.component';
import { FormsModule } from '@angular/forms';
import { CharacterPageComponent } from './pages/character-page/character-page.component';
import { LocationPageComponent } from './pages/location-page/location-page.component';
import { EpisodePageComponent } from './pages/episode-page/episode-page.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharactersComponent,
    LocationsComponent,
    EpisodesComponent,
    CoverComponent,
    TileComponent,
    CharacterPageComponent,
    LocationPageComponent,
    EpisodePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
