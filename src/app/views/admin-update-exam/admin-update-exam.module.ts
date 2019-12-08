import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { AdminUpdateExamComponent } from './admin-update-exam.component';
import { AdminUpdateExamRoutingModule } from './admin-update-exam-routing.module';
import {CommonModule} from "@angular/common";
import {FirebaseService} from "../../services/firebase.service";

@NgModule({
  imports: [
    FormsModule,
    AdminUpdateExamRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    CommonModule
  ],
  declarations: [ AdminUpdateExamComponent ],
  providers: [FirebaseService]
})
export class AdminUpdateExamModule { }
