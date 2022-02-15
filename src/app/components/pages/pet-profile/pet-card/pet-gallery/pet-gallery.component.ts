import { Component, Input, OnInit } from '@angular/core';
import { PetGallery } from 'src/app/services/pawme.graphql.service';

@Component({
  selector: 'app-pet-gallery',
  templateUrl: './pet-gallery.component.html',
  styleUrls: ['./pet-gallery.component.scss'],
})
export class PetGalleryComponent implements OnInit {
  @Input()
  gallery: PetGallery[];

  showModal = false;

  constructor() {}

  ngOnInit(): void {}

  openModal() {
    this.showModal = true;
  }
}
