import { ActionReducerMap, createAction, createReducer, on, props } from '@ngrx/store';

export interface State {
  count: number;
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

export const reducers: ActionReducerMap<State> = {
  count: countReducer
};
