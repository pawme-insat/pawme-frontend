import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/services/pawme.graphql.service';

@Component({
  selector: 'app-pet-owner',
  templateUrl: './pet-owner.component.html',
  styleUrls: ['./pet-owner.component.scss'],
})
export class PetOwnerComponent implements OnInit {
  @Input()
  owner: Partial<User>;

  constructor() {}

  ngOnInit(): void {}
}
