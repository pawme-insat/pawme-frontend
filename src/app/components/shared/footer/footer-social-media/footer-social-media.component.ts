import { Component, Input, OnInit } from '@angular/core';
import { LocalIcon } from '../footer.data';

@Component({
  selector: 'app-footer-social-media',
  templateUrl: './footer-social-media.component.html',
  styleUrls: ['./footer-social-media.component.scss'],
})
export class FooterSocialMediaComponent implements OnInit {
  @Input() icons: LocalIcon[] = [];

  constructor() {}

  ngOnInit(): void {}
}
