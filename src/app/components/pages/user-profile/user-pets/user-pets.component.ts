import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-pets',
  templateUrl: './user-pets.component.html',
  styleUrls: ['./user-pets.component.scss'],
})
export class UserPetsComponent implements OnInit {
  pets = [
    {
      name: 'Milo',
      gender: 'Boy',
      breed: 'Rottweiler',
    },
    {
      name: 'Milo',
      gender: 'Boy',
      breed: 'Rottweiler',
    },
    {
      name: 'Milo',
      gender: 'Boy',
      breed: 'Rottweiler',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
