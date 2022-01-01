export class SetUser {
  static readonly type = '[app] set user';
  constructor(public payload: any) {}
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
