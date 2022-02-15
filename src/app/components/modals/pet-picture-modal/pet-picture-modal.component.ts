import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-picture-modal',
  templateUrl: './pet-picture-modal.component.html',
  styleUrls: ['./pet-picture-modal.component.scss'],
})
export class PetPictureModalComponent implements OnInit {
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

  submit(){}
}
