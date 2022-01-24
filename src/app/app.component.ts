import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'pawme-frontend';

  noFooter = ['/sign-up', '/sign-in', '/profile', '/pet-profile'];

  noNavbar = ['/sign-up', '/sign-in'];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  has_footer(): boolean {
    return this.has_layout(this.noFooter);
  }

  has_navbar(): boolean {
    return this.has_layout(this.noNavbar);
  }

  has_layout(routes: string[]): boolean {
    const current = this.router.url;
    for (const route of routes) {
      if (route === current) {
        return false;
      }
    }
    return true;
  }
}
