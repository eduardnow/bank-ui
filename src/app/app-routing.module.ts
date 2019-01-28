import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallbackComponent } from './components/callback/callback.component';
import { AuthGuard } from './services/auth.guard';
import { HolderComponent } from './components/holder/holder.component';
import { AccountComponent } from './components/account/account.component';
import { ViewHolderComponent } from './components/view-holder/view-holder.component';
import { CreateHolderComponent } from './components/create-holder/create-holder.component';

const routes: Routes = [
  {
    path: '',
    component: HolderComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'create',
    component: CreateHolderComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: ':id',
    component: ViewHolderComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'accounts',
    component: AccountComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: CallbackComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
