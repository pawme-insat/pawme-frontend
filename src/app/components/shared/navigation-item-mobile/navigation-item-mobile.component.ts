import { Component, Input, OnInit } from '@angular/core';
import { HeaderNavData } from '../header/header.data';

@Component({
  selector: 'app-navigation-item-mobile',
  templateUrl: './navigation-item-mobile.component.html',
  styleUrls: ['./navigation-item-mobile.component.scss'],
})
export class NavigationItemMobileComponent implements OnInit {
  @Input() item: HeaderNavData;

  constructor() {}

  ngOnInit(): void {}
}
