import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/services/pawme.graphql.service';

@Component({
  selector: 'app-profile-banner',
  templateUrl: './profile-banner.component.html',
  styleUrls: ['./profile-banner.component.scss'],
})
export class ProfileBannerComponent implements OnInit {
  @Input() user: User;

  constructor() {}

  ngOnInit(): void {
    // get the user object from localstorage
  }

  getFullName() {
    return `${this.user.first_name} ${this.user.last_name}`;
  }

  getFullAddress() {
    return `${this.user.address.street || 'Garden City'}, ${this.user.address.region || 'New York'} `;
  }
}
