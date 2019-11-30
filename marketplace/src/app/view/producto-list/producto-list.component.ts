import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html'
})
export class ProductoListComponent implements OnInit {
	title: string;

	constructor() { }

	ngOnInit() {
		this.title = "Productos disponibles";
	}

}
