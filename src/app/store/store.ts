import { routerReducer, RouterState } from '@ngrx/router-store';
import { ActionReducer, ActionReducerMap, createAction, createReducer, MetaReducer, on, props } from '@ngrx/store';

export interface AppState {
  count: number;
  router: RouterState;
}

export const increment = createAction('[Counter] increment');
export const decrement = createAction('[Counter] decrement');
export const multiple = createAction('[Counter] multiple', props<{ factor: number }>());

export const countReducer = createReducer(
  0,
  on(increment, count => count + 1),
  on(decrement, count => (count === 0 ? 0 : count - 1)),
  on(multiple, (count, { factor }) => count * factor)
);

export const reducers: ActionReducerMap<AppState> = {
  count: countReducer,
  router: routerReducer
};

export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log('state before: ', state);
    console.log('action: ', action);
    return reducer(state, action);
  };
}

export const debugMetaReducers: MetaReducer<AppState>[] = [logger];
