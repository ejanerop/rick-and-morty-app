import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  baseUrl: string = 'https://rickandmortyapi.com/api';
  constructor(private http: HttpClient) {}

  getCharacters(term: string = '') {
    const url = `${this.baseUrl}/character${
      term.trim() != '' ? `?name=${term}` : ''
    }`;

    return this.http.get(url);
  }
}
