import { Component, Input, OnInit } from '@angular/core';
import { Pet } from 'src/app/services/pawme.graphql.service';

@Component({
  selector: 'app-pet-description',
  templateUrl: './pet-description.component.html',
  styleUrls: ['./pet-description.component.scss'],
})
export class PetDescriptionComponent implements OnInit {
  @Input()
  pet: Pet;

  constructor() {}

  ngOnInit(): void {}
}
