import { Injectable } from '@angular/core';

import { DataSource } from './data-source/source-manager.service';

import { Filters } from './shared/filters';
import { SortOption } from './shared/sortOption';

import { Monster } from './shared/monster';

import { Observable } from 'rxjs/Observable';
// import { BehaviorSubject } from 'rxjs';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class MonsterListService {
	constructor(private dataSource: DataSource,
		private Filters: Filters,
		private SortOption: SortOption
		) {	}

	monsterList$: Observable<Monster[]> = this.dataSource.monsterList$
		.map(r => this.truncateProps(r))
		.map(r => this.filterPADObjects(r, this.Filters.isMaxLevel))
		.map(r => r.sort(this.SortOption.totalSort))

	private truncateProps(originalResponse: Monster[]) {
		let propertyList = ["id","name","element","element2","type","type2","type3","hp_max","atk_max","rcv_max","max_level","awoken_skills","image40_href","image60_href"]
		let monsterList: Monster[] = [];

		for (let mon in originalResponse) {
			monsterList.push(new Monster);
			let current = monsterList[mon];
		
			for (let prop of propertyList) {
				current[prop] = originalResponse[mon][prop];
			} // for-prop
		} // for-mon
	
		return monsterList;
	} // getRelevantProps

	private filterPADObjects(monsterList: Monster[], filter: (monster) => boolean) {
		return monsterList.filter(filter);
	} // filterPADObjects



}