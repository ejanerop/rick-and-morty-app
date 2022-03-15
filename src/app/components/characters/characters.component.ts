import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  characters: any[] = [];
  term: string = '';
  searchUpdate = new Subject<string>();
  currentPage: number = 1;
  pages: number = 1;
  next: string | null = '';
  prev: string | null = '';

  constructor(private characterService: CharacterService) {
    this.searchUpdate
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((value) => {
        this.currentPage = 1;
        console.log(value);
        this.loadCharacters();
      });
  }

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters() {
    this.characterService
      .getCharacters(this.term, this.currentPage)
      .subscribe((data: any) => {
        console.log(data);
        this.characters = data.results;
        this.pages = data.info.pages;
        this.prev = data.info.prev;
        this.next = data.info.next;
      });
  }

  nextPage() {
    this.currentPage++;
    this.loadCharacters();
  }

  prevPage() {
    this.currentPage--;
    this.loadCharacters();
  }
}
