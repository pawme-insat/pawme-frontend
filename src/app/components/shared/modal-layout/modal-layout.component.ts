import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-layout',
  templateUrl: './modal-layout.component.html',
  styleUrls: ['./modal-layout.component.scss'],
})
export class ModalLayoutComponent implements OnInit {
  showModal = true;
  @Input() title = '';
  @Input() description = '';
  @Input() skippable = true

  submitted = false;

  constructor() {}

  ngOnInit(): void {}

  toggleModal() {
    this.showModal = !this.showModal;
  }

  submit() {
    this.submitted = true;
  }
}
