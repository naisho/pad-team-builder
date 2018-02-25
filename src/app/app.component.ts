import { Component, Inject } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { Monster } from './shared/monster';
import { Team } from './shared/team';
import { Slot } from './shared/slot';
import { Awakening } from './shared/awakening';
import { SortOption } from './shared/sortOption';

import { MonsterListService } from './monster-list.service';
import { AwakeningListService } from './awakening-list.service';
import { DefaultService } from './default.service';

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
  selector: 'app-root',
  templateUrl: './app.component.html',
<<<<<<< HEAD
  //templateUrl: './andrew.html',
=======
>>>>>>> parent of adb0cf6... Merge remote-tracking branch 'refs/remotes/origin/master'
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	constructor(
		private monsterList: MonsterListService,
		private awakeningList: AwakeningListService,
<<<<<<< HEAD
		public dialog: MatDialog
	) {

=======
		private def: DefaultService
	) {
		this.monsterList.monsterList$
			.subscribe(response => { this.globalList = response },
				() => {},
				() => {
					console.log("Subscribed to MonsterListService.");
					this.filteredList = this.globalList; // show all monsters on page by default
				}
			);

		this.allAwakeningOptions = this.awakeningList.awakeningList;
>>>>>>> parent of adb0cf6... Merge remote-tracking branch 'refs/remotes/origin/master'
	};

	globalList: Monster[]; // untouched list of all monster
		filteredList: Monster[]; // list of monsters shown on view
	
	allSortOptions: SortOption[]; // untouched list of all sort options
		defaultSortOptions: SortOption[]; // untouched list of default sort options
	
	allAwakeningOptions: Awakening[]; // untouched list of all awakenings
		defaultAwakeningOptions: Awakening[]; // untouched list of default awakening options
		
	allFilterOptions: SortOption[]; // untouched list of all filter options


	filterByName(searchString: string) {
		if (this.searchControl.errors == null) {
			this.filteredList = this.globalList.filter(
				(element) => {
					return (element.name.search(new RegExp(searchString,"i")) > 0)
				}
			) // filter
		} else {
			// console.log("this.searchControl.errors");
		}
	}; // filterByName

<<<<<<< HEAD

	teams: Team[] = [];

	ngOnInit() {
		var maxTeams = 2;
		for(var i=0; i<maxTeams; i++) {
			this.teams[i] = new Team('new name ', new Array(6));
		}
=======
	// search must have at least two characters and valid characters
	searchControl = new FormControl('', [
	    Validators.minLength(2),
	    Validators.pattern("^[a-zA-Z0-9_]*$")
  	]);

	// detect search errors on change instead of submit
	searchMatcher = new onChange();


	currentSelection: Slot;

	clearTeam() {};

	blankSlot(): Slot {
		return new Slot();
	};



	ngOnInit() {
		// define sort options

		// subscribe
		// setTimeout(()=>{console.log(this.globalList)},5000);

		// post-processing of list to complete monster data



		// populate awakeningOptions from padh
		// post-processing of list to complete awakening data
>>>>>>> parent of adb0cf6... Merge remote-tracking branch 'refs/remotes/origin/master'
	};

	searchList(globalList: Monster[], sortOptions: SortOption[], awakeningOptions: Awakening[]) {
		// search globalList and return results
		return Monster;
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