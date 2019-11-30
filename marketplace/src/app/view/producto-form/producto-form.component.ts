import { Component, OnInit, ViewChild } from '@angular/core';
import { Producto } from 'src/app/domain/producto';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html'
})
export class ProductoFormComponent implements OnInit {
	producto: Producto;

	@ViewChild('f') productoForm: NgForm;
	constructor() { }

	ngOnInit() {
		this.producto = new Producto();
	}

	public onSubmit() {
		console.log("onSubmit");
	}

}
