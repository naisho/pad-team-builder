import { Injectable } from '@angular/core';

import { PADHerderService } from './pad-herder.service'
import { LocalService } from './local.service'


@Injectable()
export class DataSource {
    constructor(
    	private monsterSource: LocalService,
    	private awakeningSource: LocalService,
    	private sortSource: LocalService
    ) { };
	
    monsterList$ = this.monsterSource.getMonsterList();
    awakeningList$ = this.awakeningSource.getAwakeningList();
    sortOptionList$ = null;

}