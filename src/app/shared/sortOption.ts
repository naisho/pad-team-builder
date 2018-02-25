import { Injectable } from '@angular/core';

import { Monster } from './monster';

@Injectable()
export class SortOption {
	shortDescription: string;
	description: string;
	primaryKey: string;
	secondaryKey: string;

	private propCompare(prop: string) {
		// does not check if prop is valid
		return (a: Monster, b: Monster) => {
			if (a[prop] < b[prop]) { return 1; }
			else if (a[prop] > b[prop]) { return -1; }
			return 0;
		}
	}

	hpSort(a: Monster, b: Monster) { return this.propCompare('hp_max'); }

	atkSort(a: Monster, b: Monster) { return this.propCompare('atk_max'); }

	rcvSort(a: Monster, b: Monster) { return this.propCompare('rcv_max'); }

	totalSort(a: Monster, b: Monster) {
		let getTotal = (mon: Monster) => {
			return (mon.hp_max*10 + mon.atk_max*5 + mon.rcv_max*3);
		}

		if (getTotal(a) < getTotal(b)) { return 1; }
		else if (getTotal(a) > getTotal(b)) { return -1; }
		return 0;
	}
}