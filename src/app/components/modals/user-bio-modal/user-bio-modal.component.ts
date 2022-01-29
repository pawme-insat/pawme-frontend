import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { concatMap, Observable, tap } from 'rxjs';
import { UpdateBioGQL, User } from 'src/app/services/pawme.graphql.service';
import { SetUser } from 'src/app/utils/ngxs/auth/auth.actions';

@Component({
  selector: 'app-user-bio-modal',
  templateUrl: './user-bio-modal.component.html',
  styleUrls: ['./user-bio-modal.component.scss'],
})
export class UserBioModalComponent implements OnInit {
  bio: string;

  @Select((e) => e.auth.user)
  user: Observable<User>;

  constructor(private UpdateBioGQL: UpdateBioGQL, private store: Store) {}

  ngOnInit(): void {}

  submit() {
    this.user
      .pipe(concatMap((u) => this.UpdateBioGQL.mutate({ updateUserInput: { bio: this.bio, id: u.id } })))
      .subscribe((e) => {
        console.log(e);
        this.store.dispatch(new SetUser(e.data.updateUser as any));
      });
  }

  skip() {
    this.user
      .pipe(concatMap((u) => this.UpdateBioGQL.mutate({ updateUserInput: { bio: '', id: u.id } })))
      .subscribe((e) => {
        console.log(e);
        this.store.dispatch(new SetUser(e.data.updateUser as any));
      });
  }
}
