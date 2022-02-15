import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connected-pet',
  templateUrl: './connected-pet.component.html',
  styleUrls: ['./connected-pet.component.scss'],
})
export class ConnectedPetComponent implements OnInit {
  petsImages = [
    { url: 'assets/puppy.jpg', connected: true },
    { url: 'assets/puppy.jpg', connected: false },
    { url: 'assets/puppy.jpg', connected: false },
  ];
  constructor() {}

  ngOnInit(): void {}

  changePet() {
    console.log('change pet and reload feed');
  }
}
