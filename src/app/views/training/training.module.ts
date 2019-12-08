import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { TrainingComponent } from './training.component';
import { TrainingRoutingModule } from './training-routing.module';
import {CollapseModule} from "ngx-bootstrap";
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    FormsModule,
    TrainingRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    CollapseModule,
    CommonModule
  ],
  declarations: [ TrainingComponent ]
})
export class TrainingModule { }
