import { Injectable } from '@angular/core';

import { Monster } from './monster';

@Injectable()
export class Filters {
	isMaxLevel(monster: Monster) {
		return (monster.max_level == 99);
	}
}