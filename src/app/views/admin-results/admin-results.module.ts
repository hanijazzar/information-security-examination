import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { AdminResultsComponent } from './admin-results.component';
import { AdminResultsRoutingModule } from './admin-results-routing.module';
import {FirebaseService} from "../../services/firebase.service";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    FormsModule,
    AdminResultsRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
      CommonModule
  ],
  declarations: [ AdminResultsComponent ],
    providers: [FirebaseService]
})
export class AdminResultsModule { }
