import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-description',
  templateUrl: './pet-description.component.html',
  styleUrls: ['./pet-description.component.scss']
})
export class PetDescriptionComponent implements OnInit {

  pet = {
    name: 'Putchi',
    gender: 'Boy',
    age: 2,
    bio: 'can\'t catch the ball, too busy catching feelings for you ;)',
  }
  constructor() { }

  ngOnInit(): void {
  }

}
