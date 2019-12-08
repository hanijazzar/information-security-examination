import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Question} from "./Question";
import {FirebaseService} from "../../services/firebase.service";

@Component({
    templateUrl: 'examination.component.html',
    styleUrls: ['examination.component.scss']
})
export class ExaminationComponent implements OnInit {

    examStarted: boolean = false;
    user: string;
    numberCorrect: number = 0;
    numberWrong: number = 0;
    oneQuestionKeptEmpty:boolean = false;

    questions: Question[] = [];

    constructor(private _router: Router, private _firebaseService: FirebaseService) {}

    ngOnInit(): void {

         this._firebaseService.getQuestions().subscribe(questions => {
              this.questions = questions
         });


    }


    submitAnswers() {
        this.user = localStorage.getItem("user");
        for (let question of this.questions) {
            if (question.answerSelected == "None") {
                this.oneQuestionKeptEmpty = true;
                return;
            }
            this.oneQuestionKeptEmpty = false;
            // console.log("User selected answer " + question.answerSelected + " for question " + question.questionID);
            if (question.answerSelected == question.correctAnswer) {
                this.numberCorrect++;
            }
            else {
                this.numberWrong++;
            }
        }
        let userResult = {
            user: this.user,
            numberCorrect: this.numberCorrect,
            numberWrong: this.numberWrong
        };

        if (!this.oneQuestionKeptEmpty) {
            this._firebaseService.saveExamResultsForUser(userResult);
            this._router.navigate(['/results']);
        }

 

    }

    userSelectedAnswer(question:Question, userAnswer) {
        question.answerSelected = userAnswer;
        // console.log("User selected answer " + userAnswer + " for question " + question.questionID);
    }

    startExam() {
        this.examStarted = true;
    }

}
