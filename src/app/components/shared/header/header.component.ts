import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Select } from '@ngxs/store';
import {
  BehaviorSubject,
  concatMap,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  Observable,
  of,
  throttleTime,
} from 'rxjs';
import { User } from 'src/app/services/pawme.graphql.service';
import { HeaderNavData } from './header.data';

const fixedNavItems: HeaderNavData[] = [
  {
    text: 'Get started',
    link: '/',
  },
  {
    text: 'About us',
    link: '/about-us',
  },
];

const signInNav: HeaderNavData = {
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
  user: Observable<User>;

  public navItems = of(fixedNavItems);

  // this magic is to combat a certain bug  where a click events fires twice for unknown reasons
  // TODO investigate more and maybe simplify this
  public openMenu = new BehaviorSubject(false);
  public $openMenu = this.openMenu.asObservable().pipe(throttleTime(250));

  public openUserMenu = new BehaviorSubject(false);
  public $openUserMenu = this.openUserMenu.asObservable().pipe(throttleTime(250));

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.navItems = this.user.pipe(concatMap((u) => of([...fixedNavItems, ...(!u ? [signInNav] : [])])));

    this.router.events.pipe(filter((e) => e instanceof NavigationStart)).subscribe((_) => this.openMenu.next(false));
  }

  menuClick() {
    this.openMenu.next(!this.openMenu.value);
  }

  userMenuClick() {
    this.openUserMenu.next(!this.openUserMenu.value);
  }

  closeUserMenu() {
    this.openUserMenu.next(false);
  }
}
