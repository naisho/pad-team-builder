import { Component } from '@angular/core';

import { Monster } from './shared/monster';
import { Slot } from './shared/slot';
import { Awakening } from './shared/awakening';
import { SortOption } from './shared/sortOption';

import { MonsterListService } from './monster-list.service';
import { AwakeningListService } from './awakening-list.service';
import { DefaultService } from './default.service';

enum Position {	'leader', 'sub1', 'sub2', 'sub3', 'sub4', 'friend_leader' };
enum Attribute { 'fire', 'water', 'wood', 'light', 'dark', 'heart' };
enum Type { 'evo material', 'balanced', 'physical', 'healer', 'dragon', 'god',
	'attacker', 'devil', 'machine', 'awoken skill material'=12,
	'protected', 'enhance material' };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	constructor(
		private monList: MonsterListService,
		private awkList: AwakeningListService,
		private def: DefaultService
	) {
		this.monList.monsterList$
			.subscribe(response => { this.globalList = response },
				() => {},
				() => { console.log("Subscribed to MonsterListService.") }
			);
		this.allAwakeningOptions = this.awkList.awakeningList;
	};


	title = 'app';

	// monsterListIds: Number[] = this.monsterListService.getSampleData();
	currentSelection: Slot;
	team: { A: Slot[], B: Slot[] };

	clearTeam() {
        
     };

	blankSlot(): Slot {
		return new Slot();
	};


	globalList: Monster[];
		filteredList: Monster[];
	
	defaultSortOptions: SortOption[];
	defaultAwakeningOptions: Awakening[];
	
	allSortOptions: SortOption[];
		allAwakeningOptions: Awakening[];
		allFilterOptions: SortOption[];

	ngOnInit() {
		// define sort options

		// subscribe
		// setTimeout(()=>{console.log(this.globalList)},5000);

		// post-processing of list to complete monster data



		// populate awakeningOptions from padh
		// post-processing of list to complete awakening data
	};

	searchList(globalList: Monster[], sortOptions: SortOption[], awakeningOptions: Awakening[]) {
		// search globalList and return results
		return Monster;
	};

	setSlot(monster: Monster, slot: Slot) {
		// set monster for slot
		return true;
	};
}
