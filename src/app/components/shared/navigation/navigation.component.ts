import { Component, Input, OnInit } from '@angular/core';
import { HeaderNavData } from '../header/header.data';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @Input() navItems: HeaderNavData[] = [];

  constructor() {}

  ngOnInit(): void {}
}
