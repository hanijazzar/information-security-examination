import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { ExaminationComponent } from './examination.component';
import { ExaminationRoutingModule } from './examination-routing.module';
import {CommonModule} from "@angular/common";
import {FirebaseService} from "../../services/firebase.service";

@NgModule({
  imports: [
    FormsModule,
    ExaminationRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    CommonModule
  ],
  declarations: [ ExaminationComponent ],
  providers: [FirebaseService]
})
export class ExaminationModule { }
