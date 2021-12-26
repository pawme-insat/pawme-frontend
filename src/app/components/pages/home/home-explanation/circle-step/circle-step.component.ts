import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle-step',
  templateUrl: './circle-step.component.html',
  styleUrls: ['./circle-step.component.scss'],
})
export class CircleStepComponent implements OnInit {
  @Input() isActive = false;

  constructor() {}

  ngOnInit(): void {}
}
