import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { map, Observable, of, switchMap, take, tap } from 'rxjs';
import { User, UserFullDataGQL } from 'src/app/services/pawme.graphql.service';
import { SetUser } from 'src/app/utils/ngxs/auth/auth.actions';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  @Select((e) => e.auth.user)
  currentUser: Observable<User>;

  user: Observable<User>;

  constructor(private store: Store, private route: ActivatedRoute, private userFullDataGQL: UserFullDataGQL) {}

  ngOnInit(): void {
    const query = (id: number) =>
      this.userFullDataGQL.watch({ userId: id }).valueChanges.pipe(
        take(1),
        map((e) => e.data.user)
      );

    // if we have route param use the query , else use  the user in the store and reresh him in the store
    const user = this.route.paramMap.pipe(
      map((e) => e.get('id')),
      switchMap((e) =>
        e
          ? query(Number(e))
          : this.currentUser.pipe(
              switchMap((u) => query(u.id)),
              tap((v) => this.store.dispatch(new SetUser(v as any)))
            )
      )
    );
    this.user = user as any;
  }

  getUserPets() {
    return this.user.pipe(map((e) => e.pets));
  }
}
