import { Component, Input, OnInit } from '@angular/core';
import { PetGallery } from 'src/app/services/pawme.graphql.service';

@Component({
  selector: 'app-pet-main-picture',
  templateUrl: './pet-main-picture.component.html',
  styleUrls: ['./pet-main-picture.component.scss'],
})
export class PetMainPictureComponent implements OnInit {
  @Input()
  picture: PetGallery;
  constructor() {}

  ngOnInit(): void {}
}
