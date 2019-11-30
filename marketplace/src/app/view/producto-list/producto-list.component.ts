import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/service/producto.service';
import { Producto } from 'src/app/domain/producto';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  providers: [ProductoService]
})
export class ProductoListComponent implements OnInit {
	title: string;
	productos: Producto[];

	constructor(private productoService: ProductoService) { }

	ngOnInit() {
		this.productos = [];
		this.title = "Productos disponibles";
	}

	public getProducts() {
		console.log("getProducts");
		this.productoService.getRecords<Producto[]>().subscribe(result => {
			this.productos = result;
		}, error => {
			console.log("error");
			console.log(error);
		});
	}

}
