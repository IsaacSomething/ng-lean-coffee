import { StoreModule } from '@ngrx/store';
import { reducers } from './store';

export const modulesConfig = [StoreModule.forRoot(reducers, {})];
