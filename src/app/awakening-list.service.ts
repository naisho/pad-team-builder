import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { DataSource } from './data-source/source-manager.service'

import { Awakening } from './shared/awakening'

@Injectable()
export class AwakeningListService {
	constructor(private dataSource: DataSource) { }

	awakeningList$: Observable<Awakening[]> = this.dataSource.awakeningList$
		.map(r => this.truncateProps(r))

	awakeningList: Awakening[] = [];

	private truncateProps(originalResponse: Awakening[]) {
		let propertyList = ["id","name","desc"];
		let awakeningList: Awakening[] = [];

		// cannot use for...in because of extended array monster-array.ts
		originalResponse.forEach((monster, index) => {
			awakeningList.push(new Awakening);
			for (let prop of propertyList) {
				awakeningList[index][prop] = monster[prop];
			} // for-prop
		}); // for-mon
		return awakeningList;
	} // getRelevantProps


	filter(awakeningList: Awakening[], filter: (awakening) => boolean) {
		return awakeningList.filter(filter);
	} // filter

}