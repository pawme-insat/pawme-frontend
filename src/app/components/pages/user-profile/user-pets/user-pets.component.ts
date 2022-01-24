import { Component, Input, OnInit } from '@angular/core';
import { Pet } from 'src/app/services/pawme.graphql.service';

@Component({
  selector: 'app-user-pets',
  templateUrl: './user-pets.component.html',
  styleUrls: ['./user-pets.component.scss'],
})
export class UserPetsComponent implements OnInit {
  @Input()
  pets: Pet[];

  constructor() {}

  ngOnInit(): void {}
}
