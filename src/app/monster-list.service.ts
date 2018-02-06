import { Injectable } from '@angular/core';

import { sampleTeamIds } from './sample-team'
import { PADHerderService } from './pad-herder.service'
import { Filters } from './shared/filters'
import { SortOption } from './shared/sortOption'

import { Monster } from './shared/monster'


import 'rxjs/add/operator/map';

@Injectable()
export class MonsterListService {
  constructor(private PADHerderService: PADHerderService,
  	private Filters: Filters,
  	private SortOption: SortOption) { }

  originalResponse;
  monsterList: Monster[] = [];

  getSampleData() {
  	return sampleTeamIds;
  }

  getPADHerderMonsterList() {
  	return this.PADHerderService.getPADHerderMonsterList()
		.map((response: Response) => response.json())
  		.subscribe(
  			response => {
  				this.originalResponse = response;
  				// console.log(response);
  			},
  			error => console.log("Error happened: " + error),
  			() => {
  				console.info("Subscribed to PADHerder/monsters");
  				this.monsterList = this.copyPADMonsters(this.originalResponse);


  				// testing: return 100 Monsters sorted by total stats
			  	let sortOption = this.SortOption.totalSort;
  				let filteredList: Monster[] = this.filterPADObjects(this.monsterList,
  					this.Filters.isMaxLevel).sort(sortOption).slice(0,100);
  				console.log(filteredList);


  			} // success
  		) // subscribe
  } // getPADHerderMonsterList

  copyPADMonsters(originalResponse) {
  	let monsterList: Monster[] = [];

  	// map essential properties to Monster objects
	let propertyList = ["id","name","element","element2","type","type2","type3","hp_max","atk_max","rcv_max","max_level","awoken_skills","image40_href","image60_href"]
		
	for (let mon in originalResponse) {
		monsterList.push(new Monster);
		let current = monsterList[mon];
		
		for (let prop of propertyList) {
			current[prop] = originalResponse[mon][prop];
		} // for-prop
	} // for-mon
	
	return monsterList;
  } // copyPADMonsters

  filterPADObjects(monsterList: Monster[], filter: (monster) => boolean) {
  	return monsterList.filter(filter);
  }

}