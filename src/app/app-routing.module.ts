import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const routeProps: Routes = [
  {
    path: 'home',
    title: 'Home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'login',
    title: 'Login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'setup',
    title: 'Setup',
    loadChildren: () => import('./coffee/setup/setup.module').then(m => m.SetupModule)
  },
  {
    path: 'join',
    title: 'Join',
    loadChildren: () => import('./coffee/join/join.module').then(m => m.JoinModule)
  },
  {
    path: 'coffee',
    title: 'Lean Coffee',
    loadChildren: () => import('./coffee/coffee.module').then(m => m.CoffeeModule)
  },
  {
    path: 'participant',
    title: 'Participant',
    loadChildren: () => import('./coffee/participant/participant.module').then(m => m.ParticipantModule)
  },
  {
    path: 'dashboard',
    title: 'Dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'board',
    title: 'Board',
    loadChildren: () => import('./dashboard/board/board.module').then(m => m.BoardModule)
  },
  {
    path: 'users',
    title: 'Users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'profile',
    title: 'Profile',
    loadChildren: () => import('./users/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'issue',
    title: 'Issue',
    loadChildren: () => import('./issue/issue.module').then(m => m.IssueModule)
  }
];

const routes: Routes = [{ path: '', redirectTo: 'home', pathMatch: 'full' }, ...routeProps];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
