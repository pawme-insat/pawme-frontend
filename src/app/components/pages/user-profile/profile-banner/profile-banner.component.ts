import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-banner',
  templateUrl: './profile-banner.component.html',
  styleUrls: ['./profile-banner.component.scss']
})
export class ProfileBannerComponent implements OnInit {

  public user = {
    name: 'Edward Larry',
    bio: 'Your kiddo will be safe with us',
    image: 'user-placeholder.svg',
    address: 'Garden City, New York'
  }
  constructor() { }

  ngOnInit(): void {
    // get the user object from localstorage

  }

}
