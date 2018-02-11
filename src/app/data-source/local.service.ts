import { Injectable }       from '@angular/core';
import { Http, Response }   from '@angular/http';

import { Observable } from 'rxjs/observable'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Monster } from '../shared/monster'
import { Awakening } from '../shared/awakening'

@Injectable()
export class LocalService {
    constructor(private http: Http) { };

    getMonsterList(): Observable<Monster[]> {
		return this.http
            .get('../static/monsters.json')
            .map(response => response.json())
            .catch(this.handleError);
    }; // getMonsterList

    getAwakeningList(): Observable<Awakening[]> {
        return this.http
            .get('../static/awakenings.json')
            .map(response => response.json())
            .catch(this.handleError);
    }; // getAwakeningList


    private handleError(error: Response) {
        console.error(error);
        let msg = `Error status code ${error.status} at ${error.url}`;
        return Observable.throw(msg);
    };
}