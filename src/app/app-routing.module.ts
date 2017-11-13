import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { PolicyComponent }      from './policy.component';
import { PolicyDetailComponent }  from './policy-detail.component';
import {VerifactoComponent} from './verifacto.component'; 
import {VerifactoDetailComponent} from './verifacto-detail.component'; 

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'verifacto',  component: VerifactoComponent },
  { path: 'VerifactoDetail', component: VerifactoDetailComponent },
  { path: 'detail/:id', component: PolicyDetailComponent },
  { path: 'policy', component: PolicyComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
