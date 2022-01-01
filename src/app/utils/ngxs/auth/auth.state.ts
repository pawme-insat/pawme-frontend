import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { SetUser, SetToken, RemoveUser, RemoveToken } from './auth.actions';

export interface AuthStateModel {
  user?: { name: string };
  token: string;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    user: null,
    token: null,
  },
})
@Injectable()
export class AuthState {
  constructor() {}
  @Action(SetUser)
  setUser({ patchState }: StateContext<AuthStateModel>, { payload }: SetUser) {
    patchState({ user: payload });
  }

  @Action(SetToken)
  setToken({ patchState }: StateContext<AuthStateModel>, { payload }: SetToken) {
    patchState({ token: payload });
  }

  @Action(RemoveUser)
  removeUser({ patchState }: StateContext<AuthStateModel>) {
    patchState({ user: null });
  }

  @Action(RemoveToken)
  remove({ patchState }: StateContext<AuthStateModel>) {
    patchState({ token: null });
  }
}
