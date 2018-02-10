import { Injectable } from '@angular/core';
import { SortOption } from './shared/sortOption'
import { Awakening } from './shared/awakening'

@Injectable()
export class DefaultService {
  constructor() { }

	awakenings

  	defaultSortOptions: SortOption[];

	defaultAwakeningOptions: Awakening[];

	allSortOptions: SortOption[];
	/*
	#, ATK, HP, RCV, Total
	Attribute, Type, Rarity, Cost, Awoken, MP, Sub Att., Skill
	*/

	allAwakeningOptions: Awakening[];

	allFilterOptions: SortOption[];

	// id: number;
	// padh_id: number;
	// description: string;
	// slotSize: number;

}