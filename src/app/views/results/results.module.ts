import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { ResultsComponent } from './results.component';
import { ResultsRoutingModule } from './results-routing.module';
import {FirebaseService} from "../../services/firebase.service";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    FormsModule,
    ResultsRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    HttpClientModule,
    CommonModule
  ],
  declarations: [ ResultsComponent ],
  providers: [FirebaseService]
})
export class ResultsModule { }
