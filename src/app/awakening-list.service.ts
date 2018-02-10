import { Injectable } from '@angular/core';

import { DataSource } from './data-source/source-manager.service'

import { Awakening } from './shared/awakening'

@Injectable()
export class AwakeningListService {
	constructor(private dataSource: DataSource) { }

	originalResponse: any;
	awakeningList: Awakening[] = [];

	getAwakeningList() {
		return this.dataSource.awakeningList$
			.subscribe(
				response => this.awakeningList = response,
				error => console.log("Error happened: " + error),
				() => {
					console.info("Subscribed to PADHerder/awakenings");
					// this.awakeningList = this.copyAwakenings(this.originalResponse);

					// testing: return awakeningList
					// console.log(this.awakeningList);

				} // success
			) // subscribe
	} // getAwakeningList

	copyAwakenings(originalResponse) {
		let awakeningList: Awakening[] = [];

		for (let awakening of originalResponse) {
			awakeningList.push(<Awakening> awakening);
		}
	
		return awakeningList;
	} // copyAwakenings

	filter(awakeningList: Awakening[], filter: (awakening) => boolean) {
		return awakeningList.filter(filter);
	} // filter

}