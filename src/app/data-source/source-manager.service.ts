import { Injectable } from '@angular/core';

import { PADHerderService } from './pad-herder.service'
import { LocalService } from './local.service'


@Injectable()
export class DataSource {
    constructor(
    	private monSource: PADHerderService,
    	private awkSource: PADHerderService,
    	private sortSource: LocalService
    ) { };
	
    monsterList$ = this.monSource.getMonsterList();
    awakeningList$ = this.awkSource.getAwakeningList();
    sortOptionList$ = null;

}