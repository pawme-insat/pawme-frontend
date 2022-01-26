import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Select } from '@ngxs/store';
import { filter, map, Observable, of, switchMap, tap } from 'rxjs';
import { User } from './services/pawme.graphql.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'pawme-frontend';
  @Select((e) => e.auth.user)
  user: Observable<User>;

  $showAddPetModal: Observable<Boolean>;

  noFooter = ['/sign-up', '/sign-in', '/profile', '/pet-profile', '/add-pet'];

  noNavbar = ['/sign-up', '/sign-in', '/add-pet'];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.$showAddPetModal = this.showAddPetModal();
  }

  has_footer(): boolean {
    return this.has_layout(this.noFooter);
  }

  has_navbar(): boolean {
    return this.has_layout(this.noNavbar);
  }

  has_layout(routes: string[]): boolean {
    return !routes.find((e) => e === this.router.url);
  }

  showAddPetModal(): Observable<Boolean> {
    return of(false);

    const allowedUrls = ['/add-pet'];

    const currentRoute = this.router.events.pipe(
      filter((event: NavigationEnd) => event instanceof NavigationEnd),
      map((e) => e.url)
    );

    return currentRoute.pipe(
      switchMap((url) =>
        this.user.pipe(
          map((user) => {
            if (user === null) return false;
            if (allowedUrls.find((u) => u === url)) return false;
            return user.pets.length == 0;
          })
        )
      )
    );
  }
}
