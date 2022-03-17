import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EpisodeService {
  baseUrl: string = 'https://rickandmortyapi.com/api';
  constructor(private http: HttpClient) {}

  getEpisodes(term: string = '', page: number = 1) {
    const url = `${this.baseUrl}/episode?page=${page}${
      term.trim() != '' ? `&name=${term}` : ''
    }`;

    return this.http.get(url);
  }
  getEpisode(id: string | null) {
    const url = `${this.baseUrl}/episode/${id}`;

    return this.http.get(url);
  }
}
