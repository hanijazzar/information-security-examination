import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'training.component.html',
    styleUrls: ['training.component.scss']
})
export class TrainingComponent implements OnInit {

    constructor() { }

    isCollapsed1: boolean = true;
    isCollapsed2: boolean = true;
    isCollapsed3: boolean = true;
    isCollapsed4: boolean = true;
    isCollapsed5: boolean = true;
    isCollapsed6: boolean = true;

    collapsed(event: any): void {
        // console.log(event);
    }

    expanded(event: any): void {
        // console.log(event);
    }

  ngOnInit(): void {
  }

}
