import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { User } from 'src/app/services/pawme.graphql.service';
import { RemoveToken, RemoveUser } from 'src/app/utils/ngxs/auth/auth.actions';

@Component({
  selector: 'app-header-user-menu',
  templateUrl: './header-user-menu.component.html',
  styleUrls: ['./header-user-menu.component.scss'],
})
export class HeaderUserMenuComponent implements OnInit {
  @Input() user: User;
  @Input() isOpen = false;

  constructor(private store: Store) {}

  ngOnInit(): void {}

  signOut(): void {
    this.store.dispatch([new RemoveToken(), new RemoveUser()]);
  }
}
