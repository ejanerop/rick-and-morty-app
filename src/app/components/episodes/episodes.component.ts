import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EpisodeService } from 'src/app/services/episode.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss'],
})
export class EpisodesComponent implements OnInit {
  episodes: any[] = [];
  seasons: any[] = [];
  loading: boolean = false;
  constructor(private episodeService: EpisodeService, private router: Router) {}

  ngOnInit(): void {
    this.loadEpisodesRecursively(1);
  }

  loadEpisodesRecursively(page: number) {
    this.loading = true;
    this.episodeService.getEpisodes('', page).subscribe((data: any) => {
      this.episodes = this.episodes.concat(data.results);
      if (data.info.next) {
        this.loadEpisodesRecursively(page + 1);
      } else {
        let seasons = this.episodes.reduce((seasons, episode) => {
          let season = parseInt(episode.episode.substring(1, 3));
          (seasons[season] = seasons[season] || []).push(episode);
          return seasons;
        }, {});
        Object.keys(seasons).forEach((season) => {
          this.seasons.push({
            number: season,
            episodes: seasons[season],
          });
          this.loading = false;
        });
      }
    });
  }

  goToEpisode(episode: any) {
    this.router.navigate(['episodes', episode.id]);
  }
}
