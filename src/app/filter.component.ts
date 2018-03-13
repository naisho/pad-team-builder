import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';


import { Monster } from './shared/monster';
import { Team } from './shared/team';
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

export function isNotOneCharacterValidator(query: string): ValidatorFn {
	return (control: AbstractControl): {[key: string]: any} => {
		return (query.length == 1) ? {'isNotOneCharacter': true} : null;
	}
}

@Component({
  selector: 'andrew-filter',
  templateUrl: './andrew.html',
  styleUrls: ['./app.component.css']
})

export class FilterComponent {
	constructor(
		private monsterList: MonsterListService,
		private awakeningList: AwakeningListService
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

	// make enums available to view
	Position: typeof Position = Position;
	Attribute: typeof Attribute = Attribute;
	Type: typeof Type = Type;

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

	primaryAttributeFilter: boolean[] = [false, false, false, false, false]; // current primary attribute filter
	subAttributeFilter: boolean[] = [false, false, false, false, false]; // current sub attribute filter

	// allFilterOptions: SortOption[]; // untouched list of all filter options

	// search must have at least two characters and valid characters
	searchControl: FormControl = new FormControl('', [
	    Validators.pattern("^[a-zA-Z0-9_]*$")
	    // Validators.pattern("^.{1}$"), // exactly one character
	    // minFiltersValidator(1)
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
			if (this.searchValue.length >= 2) {
				console.debug("DEBUG: Searching...");
				this.filteredList = this.globalList.filter(
					(monster) => {
						return (monster.name.search(new RegExp(this.searchValue,"i")) > 0);
					}
				)
			} else if ((this.currentAwakeningOptions.length > 0) && (this.searchValue.length < 2)) {
				console.debug("DEBUG: Search length < 2.")
				this.filteredList = this.globalList;
			} else {
				console.debug("DEBUG: Need at least one filter.");
			}

			if (this.filteredList) {
				// re-apply sorting/filters
				if (this.currentAwakeningOptions) {
					console.debug("DEBUG: Filtering by awakenings.")
					this.filteredList = this.filteredList.filterByAwakening(this.currentAwakeningOptions);
				}

				this.primaryAttributeFilter.forEach((enabled, attributeNumber) => {
					if (enabled) {
						this.filteredList = this.filteredList.filterByPrimaryAttribute(attributeNumber);
					}
				});
			
				// TODO: combine filterByAttribute functions together
				this.subAttributeFilter.forEach((enabled, attributeNumber) => {
					if (enabled) {
						this.filteredList = this.filteredList.filterBySubAttribute(attributeNumber);
					}
				});

				this.filteredList = this.filteredList.sortByStat(this.sortValue);
			}
		} else {
			console.debug("DEBUG: ", this.searchControl.errors);
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

	setPrimaryAttribute(attribute: number): void {
		this.primaryAttributeFilter[attribute] = !this.primaryAttributeFilter[attribute];
		this.updateView();
	}

	setSubAttribute(attribute: number): void {
		this.subAttributeFilter[attribute] = !this.subAttributeFilter[attribute];
		this.updateView();
	}

	ngOnInit() {
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