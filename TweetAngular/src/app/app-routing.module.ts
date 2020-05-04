import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TwListComponent } from './component/tw-list/tw-list.component';
import { TwEditComponent } from './component/tw-edit/tw-edit.component';

const routes: Routes = [
  { path: '', redirectTo:'/tw-list', pathMatch:'full' },
  { path: 'tw-list', component: TwListComponent },
  { path: 'tw/:id', component: TwEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
