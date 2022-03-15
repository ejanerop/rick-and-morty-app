import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
})
export class TileComponent implements OnInit {
  @Input() title?: string;
  @Input() imageUrl?: string;
  @Input() dark: boolean = false;
  @Input() linkTo?: string;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigate() {
    this.router.navigateByUrl(this.linkTo ? this.linkTo : '/');
  }
}
