import { User } from 'src/app/services/pawme.graphql.service';

export class SetUser {
  static readonly type = '[app] set user';
  constructor(public payload: User) {}
}

export class SetToken {
  static readonly type = '[app] set token';
  constructor(public payload: string) {}
}

export class RemoveUser {
  static readonly type = '[app] remove user';
}

export class RemoveToken {
  static readonly type = '[app] remove token';
}
