import { Component, OnInit, ViewChild } from '@angular/core';
import { Producto } from 'src/app/domain/producto';
import { NgForm } from '@angular/forms';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  providers: [ProductoService]
})
export class ProductoFormComponent implements OnInit {
	producto: Producto;

	@ViewChild('f') productoForm: NgForm;
	constructor(private productoService: ProductoService) { }

	ngOnInit() {
		this.producto = new Producto();
	}

	public onSubmit() {
		console.log("onSubmit");
		this.productoService.addRecord<Producto>(this.producto).subscribe(result => {
			console.log("addRecord");
			console.log(result);
		}, error => {
			console.log("error");
			console.log(error);
		});
	}

}
