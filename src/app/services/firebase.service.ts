import {Injectable} from "@angular/core";
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class FirebaseService {

    questions: Observable<any[]>;
    users: Observable<any[]>;
    results: Observable<any[]>;

    constructor(private db: AngularFireDatabase) {}

    getQuestions(): Observable<any[]> {
        this.questions = this.db.list('questions').valueChanges();
        return this.questions;
    }

    getUsers(): Observable<any[]> {
        this.users = this.db.list('users').valueChanges();
        return this.users;
    }

    getAllResults(): Observable<any[]> {
        this.results = this.db.list('results').valueChanges();
        return this.results;
    }

    saveExamResultsForUser(userResult) {
        const results =  this.db.list('results');
        results.push(userResult);
    }

    updateQuestions(updatedQuestions) {
        const questions =  this.db.list('questions');
        console.log(questions);
        questions.remove().then(() => {
            for (let question of updatedQuestions) {
                questions.push(question);
            }
        })
    }


}