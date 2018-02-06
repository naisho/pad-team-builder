import { Component } from '@angular/core';

import { Monster } from './shared/monster';
import { Slot } from './shared/slot';
import { Awakening } from './shared/awakening';
import { SortOption } from './shared/sortOption';

import { MonsterListService } from './monster-list.service'

enum Position {	'leader', 'sub1', 'sub2', 'sub3', 'sub4', 'friend_leader' }
enum Attribute { 'fire', 'water', 'wood', 'light', 'dark', 'heart' }
enum Type { 'evo material', 'balanced', 'physical', 'healer', 'dragon', 'god',
	'attacker', 'devil', 'machine?', 'awoken skill material'=12,
	'protected', 'enhance material' }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	constructor(private monsterListService: MonsterListService) { };
	monsterListIds: Number[] = this.monsterListService.getSampleData();

	title = 'app';

	currentSelection: Slot;
	team: { A: Slot[], B: Slot[] }

	blankSlot(): Slot {
		return new Slot()
	}


	globalList: Monster[];
		filteredList: Monster[];
	
	defaultSortOptions: SortOption[];
	defaultAwakeningOptions: Awakening[];
	
	allSortOptions: SortOption[];
		allAwakeningOptions: Awakening[];
		allFilterOptions: SortOption[];

	ngOnInit() {
		// define sort options

		// populate globalList fom padh
		this.monsterListService.getPADHerderMonsterList();

		// post-processing of list to complete monster data

		// populate awakeningOptions from padh
		// post-processing of list to complete awakening data
	};

	searchList(globalList: Monster[], sortOptions: SortOption[], awakeningOptions: Awakening[]) {
		// search globalList and return results
		return Monster;
	}

	setSlot(monster: Monster, slot: Slot) {
		// set monster for slot
		return true
	}
}
