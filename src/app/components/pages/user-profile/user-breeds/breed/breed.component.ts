import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-breed',
  templateUrl: './breed.component.html',
  styleUrls: ['./breed.component.scss'],
})
export class BreedComponent implements OnInit {
  @Input() index: number;
  @Input() name: String;

  background: String = ''
  backgrounds = [
    'bg-primary-normal',
    'bg-secondary-light',
    'bg-gray-400'
  ]

  constructor() {}

  ngOnInit(): void {
    this.background = this.backgrounds[this.index%3]
  }
}
