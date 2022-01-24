import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, switchMap, take } from 'rxjs';
import { User, UserFullDataGQL } from 'src/app/services/pawme.graphql.service';
import { SetUser } from 'src/app/utils/ngxs/auth/auth.actions';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  @Select((e) => e.auth.user)
  user: Observable<User>;

  constructor(private store: Store, private userFullDataGQL: UserFullDataGQL) {}

  ngOnInit(): void {
    const query = this.user.pipe(
      switchMap((e) => this.userFullDataGQL.watch({ userId: e.id }).valueChanges),
      take(1)
    );

    query.subscribe((e) => console.log(e));
  }
}
