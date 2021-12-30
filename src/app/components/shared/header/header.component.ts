import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  navItems = [
    {
      text: 'Get started',
      link: '/',
    },
    {
      text: 'About us',
      link: '/about-us',
    },
    {
      text: 'Sign in',
      link: '/sign-in',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
