import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us-value',
  templateUrl: './about-us-value.component.html',
  styleUrls: ['./about-us-value.component.scss'],
})
export class AboutUsValueComponent implements OnInit {
  @Input() value: any;

  constructor() {}

  ngOnInit(): void {}
}
