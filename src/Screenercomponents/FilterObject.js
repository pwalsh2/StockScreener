import React from "react";

export class FilterObject {
	constructor(tag, type, LowerBound, UpperBound) {
		this.tag = tag;
		this.type = type;
		this.LowerBound = LowerBound;
		this.UpperBound = UpperBound;
	}
}
