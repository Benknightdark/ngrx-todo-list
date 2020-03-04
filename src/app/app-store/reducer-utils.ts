import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

import { State } from './app-state';
import { logger } from './logger-reducer';
import { environment } from '../../environments/environment';


export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger]
  : [];
