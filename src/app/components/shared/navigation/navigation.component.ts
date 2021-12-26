import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @Input() navItems: any;

  constructor() {}

  ngOnInit(): void {
    console.log('navItems', this.navItems);
  }
}
