import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Question} from "./Question";
import {FirebaseService} from "../../services/firebase.service";

@Component({
    templateUrl: 'admin-update-exam.component.html',
    styleUrls: ['admin-update-exam.component.scss']
})
export class AdminUpdateExamComponent implements OnInit {

    questionsLoaded: boolean = false;
    user: string;
    numberCorrect: number = 0;
    numberWrong: number = 0;
    oneQuestionKeptEmpty:boolean = false;

    questions: Question[] = [];

    constructor(private _router: Router, private _firebaseService: FirebaseService) {}

    ngOnInit(): void {
        this._firebaseService.getQuestions().subscribe(questions => {
            for (let question of questions) {
                question.answerSelected = question.correctAnswer;
            }
            this.questions = questions;
            this.questionsLoaded = true;
        });
    }

    userSelectedAnswer(question:Question, userAnswer) {
        question.answerSelected = userAnswer;
        // console.log("User selected answer " + userAnswer + " for question " + question.questionID);
    }

    saveExam() {
        for (let question of this.questions) {
            if (question.answerSelected == "None") {
                this.oneQuestionKeptEmpty = true;
                return;
            }
            this.oneQuestionKeptEmpty = false;
            question.correctAnswer = question.answerSelected;

        }
        this._firebaseService.updateQuestions(this.questions);


    }

}
