import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'pawme-frontend';

  noFooter = ['/sign-up', '/sign-in', '/profile', '/pet-profile', '/add-pet'];

  noNavbar = ['/sign-up', '/sign-in', '/add-pet'];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  has_footer(): boolean {
    return this.has_layout(this.noFooter);
  }

  has_navbar(): boolean {
    return this.has_layout(this.noNavbar);
  }

  has_layout(routes: string[]): boolean {
    return !routes.find((e) => e === this.router.url);
  }
}
