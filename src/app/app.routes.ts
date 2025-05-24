import { Routes } from '@angular/router';
import {NotFoundComponent} from "./shared/not-found/not-found.component";

export const routes: Routes = [
  { path: 'core', loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule),},
  { path: 'auth', loadChildren: () => import('./core/auth/auth.module').then(m => m.AuthModule)  },
  { path: 'not-found', component: NotFoundComponent, },
  { path: '', redirectTo: 'core', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent, },
];
