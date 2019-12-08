import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { AdminUpdateExamComponent } from './admin-update-exam.component';

const routes: Routes = [
  {
    path: '',
    component: AdminUpdateExamComponent,
    data: {
      title: 'AdminUpdateExam'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminUpdateExamRoutingModule {}
