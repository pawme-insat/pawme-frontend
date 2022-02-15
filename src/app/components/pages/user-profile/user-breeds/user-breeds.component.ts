import { Component, Input, OnInit } from '@angular/core';
import { Breed, Pet } from 'src/app/services/pawme.graphql.service';

@Component({
  selector: 'app-user-breeds',
  templateUrl: './user-breeds.component.html',
  styleUrls: ['./user-breeds.component.scss'],
})
export class UserBreedsComponent implements OnInit {
  @Input()
  pets: Pet[] = [];

  constructor() {}

  ngOnInit(): void {}

  getBreedName(): string[] {
    return this.pets.map((e) => e.breedType).map((e) => `${e.name} ${e?.petType?.name}`);
  }
}
