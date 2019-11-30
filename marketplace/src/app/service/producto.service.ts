import { Injectable } from '@angular/core';
import { GenericService } from './generic-service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductoService extends GenericService {

	constructor(httpClient: HttpClient) {
		super("http://BASEPATH:PORT", httpClient, "/productos");
	}

	
}
