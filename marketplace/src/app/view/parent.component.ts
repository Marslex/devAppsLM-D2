import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-parent',
	template: `<router-outlet></router-outlet>`
})
export class ParentComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

}
