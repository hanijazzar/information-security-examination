import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { AdminResultsComponent } from './admin-results.component';

const routes: Routes = [
  {
    path: '',
    component: AdminResultsComponent,
    data: {
      title: 'All Results'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminResultsRoutingModule {}
