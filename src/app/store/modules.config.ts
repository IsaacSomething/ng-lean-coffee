import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, debugMetaReducers } from './store';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';

export const modulesConfig = [
  StoreDevtoolsModule.instrument({
    maxAge: 20,
    autoPause: true
  }),
  StoreRouterConnectingModule.forRoot({
    stateKey: 'router',
    routerState: RouterState.Minimal
  }),
  StoreModule.forRoot(reducers, {
    metaReducers: debugMetaReducers,
    runtimeChecks: {
      // Explicit checks
      strictStateImmutability: true,
      strictActionImmutability: true,
      strictActionSerializability: true,
      strictStateSerializability: true
    }
  })
];
