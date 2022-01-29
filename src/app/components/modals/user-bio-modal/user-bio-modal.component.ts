import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-bio-modal',
  templateUrl: './user-bio-modal.component.html',
  styleUrls: ['./user-bio-modal.component.scss'],
})
export class UserBioModalComponent implements OnInit {
  @Input() bio: string;
  constructor() {}

  ngOnInit(): void {}

  submit() {
    console.log(this.bio);
  }
}
