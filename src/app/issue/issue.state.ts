import { Issue } from './issue';

export interface Filter {
  text: string;
}

export interface Issues {
  [id: string]: Issue;
}

export interface IssueState {
  entities: Issues;
  selected: string[];
  filter: Filter;
}

export const initialState: IssueState = {
  entities: {},
  selected: [],
  filter: { text: '' }
};
