import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotdog-menu',
  templateUrl: './hotdog-menu.component.html',
  styleUrls: ['./hotdog-menu.component.scss'],
})
export class HotdogMenuComponent implements OnInit {
  @Input() isOpen = false;
  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.isOpen = !this.isOpen;
    }, 1000);
  }
}
