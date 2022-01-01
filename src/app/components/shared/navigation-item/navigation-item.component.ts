import { Component, Input, OnInit } from '@angular/core';
import { HeaderNavData } from '../header/header.data';

@Component({
  selector: 'app-navigation-item',
  templateUrl: './navigation-item.component.html',
  styleUrls: ['./navigation-item.component.scss'],
})
export class NavigationItemComponent implements OnInit {
  @Input() item: HeaderNavData;

  constructor() {}

  ngOnInit(): void {}
}
