import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-picture-modal',
  templateUrl: './user-picture-modal.component.html',
  styleUrls: ['./user-picture-modal.component.scss'],
})
export class UserPictureModalComponent implements OnInit {
  file: FileList | null = null;
  imageUrl = '';
  constructor() {}

  ngOnInit(): void {}

  onSelectImage(event) {
    this.file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (e: any) => {
      this.imageUrl = e.target.result;
    };
  }

  submit() {}

  skip() {}
}
