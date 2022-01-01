import { Component, Input, OnInit } from '@angular/core';
import { HeaderNavData } from '../header/header.data';

@Component({
  selector: 'app-navigation-mobile',
  templateUrl: './navigation-mobile.component.html',
  styleUrls: ['./navigation-mobile.component.scss'],
})
export class NavigationMobileComponent implements OnInit {
  @Input() navItems: HeaderNavData[] = [];
  constructor() {}
  ngOnInit(): void {}

  tracker(index: number, e: HeaderNavData) {
    return e.text;
  }
}
