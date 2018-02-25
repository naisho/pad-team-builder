import { Component, Inject } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { Monster } from './shared/monster';
import { Team } from './shared/team';
import { Slot } from './shared/slot';
import { Awakening } from './shared/awakening';
import './shared/monster-array';

import { MonsterListService } from './monster-list.service';
import { AwakeningListService } from './awakening-list.service';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

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
  selector: 'app-jennfer',
  templateUrl: './team-view.html',
  styleUrls: ['./app.component.css']
})

export class TeamViewComponent {
	constructor(
		public dialog: MatDialog
	) {

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


	teams: Team[] = [];

	ngOnInit() {
		var maxTeams = 2;
		for(var i=0; i<maxTeams; i++) {
			this.teams[i] = new Team('new name ', new Array(6));
		}
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

	openDialog(team:number, slotType: String, slot: number):void {
    	console.log("team numer " + team + "; slot type " + slotType + "; slot numberrr " + slot);
    	const dialogRef = this.dialog.open(MonsterPickerDialog, {
      		height: '500px',
      		width: '800px',
      		data: {
      		}
    	});

    	dialogRef.afterClosed().subscribe(result => {
    		console.log('result:', result);
    	});	
  	}
}

@Component({
	selector: 'monster-picker-dialog',
	templateUrl: './dialog.html',
	styleUrls: ['./app.component.css']
})
export class MonsterPickerDialog {
	constructor(
		public dialogRef: MatDialogRef<MonsterPickerDialog>,
    	@Inject(MAT_DIALOG_DATA) public data: any) { }
	
	onNoClick(): void {
   		this.dialogRef.close();
  	}
}