import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FirebaseService} from "../../services/firebase.service";

@Component({
    templateUrl: 'admin-results.component.html',
    styleUrls: ['admin-results.component.scss']
})
export class AdminResultsComponent implements OnInit {

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
                result['finalScore'] = result.numberCorrect  * 100 / (result.numberCorrect + result.numberWrong);
                if (result['finalScore'] >= 80) {
                    result['status'] = "Passed";
                }
                else {
                    result['status'] = "Failed";
                }

                // for (let result2 of results) {
                //     if (result.user == result2.user) {
                //         // if (result.numberCorrect >)
                //     }
                // }

                handledResults.push(result);
            }

            let finalResults = [];
            for (let r1 of handledResults) {
                for (let r2 of handledResults) {
                    if (r2.user == r1.user) {
                        if (r2.numberCorrect < r1.numberCorrect) {
                            r2['ignore'] = true;
                        }
                    }
                }
            }
            // console.log(handledResults);
            for (let result of handledResults) {
                if (!result['ignore']) {
                    finalResults.push(result);
                }
            }
            this.loadingString = "No results found";
            this.results = finalResults;

        });
    }

}
