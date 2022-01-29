import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/services/pawme.graphql.service';

@Component({
  selector: 'app-user-picture-modal',
  templateUrl: './user-picture-modal.component.html',
  styleUrls: ['./user-picture-modal.component.scss'],
})
export class UserPictureModalComponent implements OnInit {
  file: File | null = null;
  imageUrl = '';
  constructor(private httpClient: HttpClient) {}

  @Output()
  onSubmit = new EventEmitter<User>();

  @Output()
  onSkip = new EventEmitter<void>();

  ngOnInit(): void {}

  onSelectImage(event) {
    this.file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (e: any) => {
      this.imageUrl = e.target.result;
    };
  }

  submit() {
    const formData = new FormData();
    formData.append('image', this.file);
    this.httpClient.post('http://localhost:3000/uploads', formData).subscribe((e) => console.log(e));
    console.log(this.file);
  }

  skip() {}
}
