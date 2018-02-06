import { Injectable }       from '@angular/core';
import { Http, Response }   from '@angular/http';

import { Observable }       from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class PADHerderService {
    constructor(private http: Http) { };
	
    PADHerderMonsterUrl: string = 'https://www.padherder.com/api/monsters/'

    PADHerderAPIUrl = 'https://www.padherder.com/user-api';

    getPADHerderMonsterList() {
    	// id, name
    	// element, element2
    	// type, type2, type3
    	// hp_max, atk_max, rcv_max
    	// max_level
    	// awoken_skills
    	// image40_href, image60_href
    	
		return this.http
			// .get(this.PADHerderMonsterUrl)
            .get('./assets/monsters.json') // use local for dev
            .catch(this.handleError);

    	/*
    		manually calculate stats (in case of limit break etc., or max is wrong)
    			hp_min, hp_scale atk_min, atk_scale, rcv_min, rcv_scale, xp_curve

			display team cost
				team_cost

			calculate average rarity
				rarity

			display stats and info on mouseover?
				active_skill

			useless
				version, jp_only, monster_points, name_jp, feed_xp
    	*/
    }



/*
    getTeam(padh_team_id: string) {
        return this.http
            .get(this.PADHerderAPIUrl + "/team/" + padh_team_id)
            .map((response: Response) => response.json())
            // .do(data => console.log(data))
            .catch(this.handleError);
    }

    getMonData(padh_id: string, p: string) {
        return this.http
            .get(this.PADHerderAPIUrl + '/monster/' + padh_id)
            .map((response: Response) => response.json())
            // .do(data => console.log(data))
            .catch(this.handleError);
    }

    getLeaderSkills() {
        return this.http
            .get("https://www.padherder.com/api/leader_skills/")
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    getMonsterInfo() {
        return this.http
            .get("https://www.padherder.com/api/monsters/")
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }
*/

    private handleError(error: Response) {
        console.error(error);
        let msg = `Error status code ${error.status} at ${error.url}`;
        return Observable.throw(msg);
    }

}