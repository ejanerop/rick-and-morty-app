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

  constructor(private characterService: CharacterService) {
    this.searchUpdate
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((value) => {
        console.log(value);
        this.characterService.getCharacters(value).subscribe((data: any) => {
          console.log(data);
          this.characters = data.results;
        });
      });
  }

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe((data: any) => {
      console.log(data);
      this.characters = data.results;
    });
  }
}
