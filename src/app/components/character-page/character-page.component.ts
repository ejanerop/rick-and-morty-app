import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from 'src/app/services/character.service';
import { EpisodeService } from 'src/app/services/episode.service';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.scss'],
})
export class CharacterPageComponent implements OnInit {
  id: string | null = this.route.snapshot.paramMap.get('id');
  character: any;
  episodes: any = [];

  constructor(
    private characterService: CharacterService,
    private episodeService: EpisodeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.characterService.getCharacter(this.id).subscribe((data: any) => {
      console.log(data);
      this.character = data;
      let episodes = data.episode.map((episode: string) => {
        return episode.split('/').pop();
      });
      this.episodeService.getEpisode(episodes).subscribe((data: any) => {
        if (episodes.length == 1) {
          data.season = parseInt(data.episode.substring(1, 3));
          data.number = parseInt(data.episode.substring(4, 6));
          this.episodes.push(data);
        } else {
          this.episodes = data.map((episode: any) => {
            episode.season = parseInt(episode.episode.substring(1, 3));
            episode.number = parseInt(episode.episode.substring(4, 6));
            return episode;
          });
        }
        console.log(this.episodes);
      });
    });
  }
}
