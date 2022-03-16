import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CharactersComponent } from './components/characters/characters.component';
import { LocationsComponent } from './components/locations/locations.component';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { CoverComponent } from './components/home/cover/cover.component';
import { TileComponent } from './components/home/tile/tile.component';
import { CharacterComponent } from './components/characters/character/character.component';
import { UrlToIdPipe } from './pipes/url-to-id.pipe';
import { FormsModule } from '@angular/forms';
import { CharacterPageComponent } from './components/character-page/character-page.component';
import { LocationComponent } from './components/locations/location/location.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingComponent } from './components/loading/loading.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CharactersComponent,
    LocationsComponent,
    EpisodesComponent,
    CoverComponent,
    TileComponent,
    CharacterComponent,
    UrlToIdPipe,
    CharacterPageComponent,
    LocationComponent,
    FooterComponent,
    LoadingComponent,
    NotfoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
