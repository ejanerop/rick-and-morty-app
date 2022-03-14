import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
})
export class TileComponent implements OnInit {
  @Input() title?: string;
  @Input() imageUrl?: string;
  @Input() dark: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
