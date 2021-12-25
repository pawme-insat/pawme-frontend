import { Component, OnInit } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { FOOTER_ICONS } from './footer.data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  socialIcons = FOOTER_ICONS;

  ngOnInit(): void {}
}
