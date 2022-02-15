import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngxs/store';
import { User } from 'src/app/services/pawme.graphql.service';
import { SetUser } from 'src/app/utils/ngxs/auth/auth.actions';

@Component({
  selector: 'app-user-picture-modal',
  templateUrl: './user-picture-modal.component.html',
  styleUrls: ['./user-picture-modal.component.scss'],
})
export class UserPictureModalComponent implements OnInit {
  file: File | null = null;
  imageUrl = '';
  constructor(private httpClient: HttpClient, private store: Store) {}

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

    const data = new Blob(
      [
        JSON.stringify({
          id: '1',
        }),
      ],
      {
        type: 'application/json',
      }
    );

    this.httpClient.post('http://localhost:3000/upload/user', formData, { params: { id: 1 } }).subscribe((e) => {
      console.debug(e);
      this.store.dispatch(new SetUser(e as any));
    });
    console.log(this.file);
  }

  skip() {}
}
