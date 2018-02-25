import { Slot } from './slot';

export class Team {
	name: String;
	id: number;
	slots: Slot[];

	constructor(name: String, slots: Slot[]) {
		this.name=name;
		this.slots=slots;
	}
}