import { Injectable } from '@angular/core';
import { GenericService } from './generic-service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoServiceService extends GenericService {

	constructor(httpClient: HttpClient) {
		super("http://BASEPATH:PORT", httpClient, "/productos");
	}

	
}
