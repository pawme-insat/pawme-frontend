import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-hotdog-menu',
  templateUrl: './hotdog-menu.component.html',
  styleUrls: ['./hotdog-menu.component.scss']
})
export class HotdogMenuComponent implements OnInit {

  navItems = [
    {
      text: "Get started",
      link: "/"
    },
    {
      text: "About us",
      link: "/about-us"
    },
    {
      text: "Sign in",
      link: "/sign-in"
    },
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
