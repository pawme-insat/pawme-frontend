import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { concatMap, distinctUntilChanged, map, Observable, of } from 'rxjs';

const fixedNavItems = [
  {
    text: 'Get started',
    link: '/',
  },
  {
    text: 'About us',
    link: '/about-us',
  },
];

const signInNav = {
  text: 'Sign in',
  link: '/sign-in',
};
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Select((e) => e.auth.user)
  user: Observable<{ name: string }>;

  public navItems = of(fixedNavItems);

  public openMenu = false;
  public openUserMenu = false;

  constructor() {}

  ngOnInit(): void {
    this.navItems = this.user.pipe(concatMap((u) => of([...fixedNavItems, ...(!u ? [signInNav] : [])])));
  }

  menuClick() {
    this.openMenu = !this.openMenu;
  }

  userMenuClick() {
    this.openUserMenu = !this.openUserMenu;
  }
}
