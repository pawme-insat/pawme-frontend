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
      isActive: false
    },
    {
      text: "About us",
      isActive: false
    },
    {
      text: "Sign in",
      isActive: false
    },
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
    if (this.router.url == '/'){
      this.navItems[0].isActive = true
    }
    if (this.router.url == '/about-us'){
      this.navItems[1].isActive = true
    }
    if (this.router.url == '/sign-in'){
      this.navItems[2].isActive = true
    }


  }

}
