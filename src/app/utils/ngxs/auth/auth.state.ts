import { State, Action, StateContext } from '@ngxs/store';
import { SetUser, SetToken } from './auth.actions';

export interface AuthStateModel {
  user?: any;
  token: string;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    user: null,
    token: null,
  },
})
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
}
