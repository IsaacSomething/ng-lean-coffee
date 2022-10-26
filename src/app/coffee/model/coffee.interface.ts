import { DiscussionState, PostAs, Priority } from './coffee.types';

export interface DiscussionPoint {
  id: string;
  date: string;
  description: string;
  priority: Priority;
  state: DiscussionState;
  postAs: PostAs;
}
