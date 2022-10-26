export type Priority = 'low' | 'medium' | 'high';

export interface Issue {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  resolved: boolean;
}
