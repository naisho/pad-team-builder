import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { Monster } from './shared/monster';
import { Slot } from './shared/slot';
import { Awakening } from './shared/awakening';
import './shared/monster-array';

import { MonsterListService } from './monster-list.service';
import { AwakeningListService } from './awakening-list.service';

enum Position {	'leader', 'sub1', 'sub2', 'sub3', 'sub4', 'friend_leader' };
enum Attribute { 'fire', 'water', 'wood', 'light', 'dark', 'heart' };
enum Type { 'evo material', 'balanced', 'physical', 'healer', 'dragon', 'god',
	'attacker', 'devil', 'machine', 'awoken skill material'=12,
	'protected', 'enhance material' };

export class onChange extends ErrorStateMatcher {
	isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    	const isSubmitted = form && form.submitted;
    	return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
	}
}

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  templateUrl: './andrew.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	constructor(
		private monsterList: MonsterListService,
		private awakeningList: AwakeningListService,
	) {
		this.monsterList.monsterList$
			.subscribe(response => {
				this.globalList = response
			},
				(e) => {
					console.error("Failed to subscribe to MonsterListService.");
					console.error("ERROR: ", e);
				},
				() => {
					console.info("Subscribed to MonsterListService.");
					// this.filteredList = this.globalList; // show all monsters on page by default
				}
			);

		this.awakeningList.awakeningList$
			.subscribe(response => { this.allAwakeningOptions = response },
				() => { console.error("Failed to subscribe to AwakeningListService.") },
				() => { console.log("Subscribed to AwakeningListService.") }
			);
	};

	globalList: Monster[] = []; // untouched list of all monster
		filteredList: Monster[] = []; // pre-processed list of monsters
		sortedFilteredList: Monster[] = []; // list of monsters shown on view

	// allSortOptions: SortOption[]; // untouched list of all sort options
		// defaultSortOptions: SortOption[]; // untouched list of default sort options
		// currentSortOption: SortOption['totalSort']; // current sort option
		sortValue: string = 'total'; // current sort option

	allAwakeningOptions: Awakening[]; // untouched list of all awakenings
		defaultAwakeningOptions: Awakening[]; // untouched list of default awakening options
		currentAwakeningOptions: Awakening[] = []; // list of current awakening filters

	// allFilterOptions: SortOption[]; // untouched list of all filter options

	// search must have at least two characters and valid characters
	searchControl: FormControl = new FormControl('', [
	    Validators.minLength(2),
	    Validators.pattern("^[a-zA-Z0-9_]*$")
  	]);

	// detect search errors on change instead of submit
	// onChange class located above @component
	searchMatcher = new onChange();


	setSortValue(stat: string) {
		this.sortValue = stat;
		this.updateView();
	}


	searchValue: string = '';

	updateView(): void {
		// filter by name
		if (this.searchControl.errors == null) {
			this.filteredList = this.globalList.filter(
				(monster) => {
					return (monster.name.search(new RegExp(this.searchValue,"i")) > 0);
				}
			)

			// filter by awakening
			this.filteredList = this.filteredList.filterByAwakening(this.currentAwakeningOptions);

			// sort by stat
			// TODO: use sortOption
			this.filteredList = this.filteredList.sortByStat(this.sortValue);
		} else {
			// console.log(this.searchControl.errors);
		}
	}; // filterByName

	addAwakeningOption(option: Awakening): void {
		this.currentAwakeningOptions.push(option);
		this.updateView();
	}
	
	removeAwakeningOption(index: number): void {
		this.currentAwakeningOptions.splice(index, 1);
		this.updateView();
	}

	ngOnInit() {
		// define sort options

		// console.log("compareArrays", this.compareArrays([1,1,1,1,1,1,1,3],[1,1,1,1,1,3]));

		// subscribe
		// setTimeout(()=>{console.log(this.globalList)},5000);

		// post-processing of list to complete monster data



		// populate awakeningOptions from padh
		// post-processing of list to complete awakening data
	};

	currentSelection: Slot;
	clearTeam() {};
	blankSlot(): Slot {
		return new Slot();
	};

	setSlot(monster: Monster, slot: Slot) {
		// set monster for slot
		return true;
	};
}