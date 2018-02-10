import { Injectable }       from '@angular/core';
import { Http, Response }   from '@angular/http';

import { Observable } from 'rxjs/observable'
import 'rxjs/add/operator/catch';

@Injectable()
export class LocalService {
    constructor(private http: Http) { };

    getMonsterList() {
		return this.http
            .get('./assets/monsters.json')
            .catch(this.handleError);
    }; // getMonsterList

    getAwakeningList() {
        return this.http
            .get('./assets/awakenings.json')
            .catch(this.handleError);
    }; // getAwakeningList


    private handleError(error: Response) {
        console.error(error);
        let msg = `Error status code ${error.status} at ${error.url}`;
        return Observable.throw(msg);
    };
}