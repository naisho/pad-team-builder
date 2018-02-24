import { Injectable } from '@angular/core';

import { DataSource } from './data-source/source-manager.service';

import { Filters } from './shared/filters';

import { Monster } from './shared/monster';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class MonsterListService {
	constructor(private dataSource: DataSource,
		private Filters: Filters,
		) {	}

	monsterList$: Observable<Monster[]> = this.dataSource.monsterList$
		.map( r => this.truncateProps(r) )
		.map( r => r.filter((mon) => mon.isMaxLevel()) )
		// .map(r => r.sort(this.SortOption.totalSort))

	private truncateProps(originalResponse: Monster[]) {
		let propertyList = ["id","name","element","element2","type","type2","type3","hp_max","atk_max","rcv_max","max_level","awoken_skills","image40_href","image60_href"]
		let monsterList: Monster[] = [];

		// cannot use for...in because of extended array monster-array.ts
		originalResponse.forEach((monster, index) => {
			monsterList.push(new Monster);
			for (let prop of propertyList) {
				monsterList[index][prop] = monster[prop];
			} // for-prop
		}); // for-mon
		return monsterList;
	} // getRelevantProps
}