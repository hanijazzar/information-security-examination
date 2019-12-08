import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FirebaseService} from "../../services/firebase.service";

@Component({
    templateUrl: 'results.component.html',
    styleUrls: ['results.component.scss']
})
export class ResultsComponent implements OnInit {
    results: {
        user: string;
        numberCorrect: number;
        numberWrong: number;
    }[] = [];
    loadingString:string = "Loading Results...";

    constructor(private _firebaseService: FirebaseService) {}

  ngOnInit(): void {
      this._firebaseService.getAllResults().subscribe(results => {
          let handledResults = [];
          for (let result of results) {
              if (result.user == localStorage.getItem("user")) {
                  result['finalScore'] = result.numberCorrect  * 100 / (result.numberCorrect + result.numberWrong);
                  if (result['finalScore'] >= 80) {
                      result['status'] = "Passed";
                  }
                  else {
                      result['status'] = "Failed";
                  }
                  handledResults.push(result);
              }  
          }
          this.loadingString = "No results found";
          this.results = handledResults;

      });
  }

}
