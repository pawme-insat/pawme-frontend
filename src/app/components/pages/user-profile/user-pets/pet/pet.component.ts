import { Component, Input, OnInit } from '@angular/core';
import { Pet } from 'src/app/services/pawme.graphql.service';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss'],
})
export class PetComponent implements OnInit {
  @Input()
  pet: Pet;

  constructor() {}
  ngOnInit(): void {}
}
