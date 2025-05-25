import { Routes } from '@angular/router';
import {NotFoundComponent} from "./shared/not-found/not-found.component";
import {AuthUserGuard} from "./core/guards/auth-user/auth-user.guard";
import {RedirectHomeGuard} from "./core/guards/redirect-home/redirect-home.guard";

export const routes: Routes = [
  { path: 'core',
    canActivate: [AuthUserGuard],
    loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule),},
  { path: 'auth', canActivate: [RedirectHomeGuard], loadChildren: () => import('./core/auth/auth.module').then(m => m.AuthModule)  },
  { path: 'not-found', component: NotFoundComponent, },
  { path: '', redirectTo: 'core', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent, },
];
