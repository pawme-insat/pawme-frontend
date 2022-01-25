import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-banner',
  templateUrl: './side-banner.component.html',
  styleUrls: ['./side-banner.component.scss'],
})
export class SideBannerComponent implements OnInit {
  @Input() isSignIn = false
  @Input() page = ''

  constructor() {}

  ngOnInit(): void {}
}
