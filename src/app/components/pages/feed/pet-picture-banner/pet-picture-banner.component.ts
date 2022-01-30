import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-picture-banner',
  templateUrl: './pet-picture-banner.component.html',
  styleUrls: ['./pet-picture-banner.component.scss'],
})
export class PetPictureBannerComponent implements OnInit {
  pictureUrl = 'assets/feed-picture-placeholder.jpg';
  constructor() {}

  ngOnInit(): void {}
}
