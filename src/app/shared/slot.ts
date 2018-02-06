import { Monster } from './monster'

export class Slot {
	position: number;
	sub: Monster;
	assist: Monster;

	constructor(sub: Monster = null, assist: Monster = null) {
		this.sub = sub;
		this.assist = assist;
	}
}