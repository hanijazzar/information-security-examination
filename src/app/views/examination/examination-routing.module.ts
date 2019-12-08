import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { ExaminationComponent } from './examination.component';

const routes: Routes = [
  {
    path: '',
    component: ExaminationComponent,
    data: {
      title: 'Examination'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExaminationRoutingModule {}
