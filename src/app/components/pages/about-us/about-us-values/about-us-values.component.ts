import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about-us-values',
  templateUrl: './about-us-values.component.html',
  styleUrls: ['./about-us-values.component.scss']
})
export class AboutUsValuesComponent implements OnInit {

  values = [
    {
      title: 'Integrity',
      text: 'Lorem Ipsum is simply dummy text of the printing',
      icon: 'integrity.svg'
    },
    {
      title: 'Communication',
      text: 'Lorem Ipsum is simply dummy text of the printing',
      icon: 'communication.svg'
    },
    {
      title: 'Confidentiality',
      text: 'Lorem Ipsum is simply dummy text of the printing',
      icon: 'confidentiality.svg'
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
