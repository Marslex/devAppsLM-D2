import { Observable, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export abstract class GenericService {

	protected baseURL: string;
	protected httpClient: HttpClient;

	constructor(_baseURL: string, _httpClient: HttpClient, entity: string) {
		this.baseURL = _baseURL + entity;
		this.httpClient = _httpClient;
	}

	public getRecords<T>(): Observable<T> {
		return this.httpClient.get(this.baseURL).pipe(map(resp => resp as T));
	}

	public getRecordsQueried<T>(query:string): Observable<T> {
		return this.httpClient.get(this.baseURL+"?"+query).pipe(map(resp => resp as T));
	}

	public getRecord<T>(id: string | number): Observable<T> {
		return this.httpClient.get(this.baseURL + id).pipe(map(resp => resp as T));
	}

	public addRecord<T>(object: any): Observable<T> {
		return this.httpClient.post(this.baseURL, object).pipe(map(resp => resp as T));
	}

	public addRecords<T>(objects: any[]): Observable<T[]> {
		const tasks: Observable<T>[] = [];

		objects.forEach(object => {
			tasks.push(this.httpClient.post(this.baseURL, object).pipe(map(resp => resp as T)));
		});
		return forkJoin(tasks).pipe(map(resp => resp as T[]));
	}

	public updateRecord<T>(id: string | number, object: any): Observable<T> {
		return this.httpClient.put(this.baseURL + id, object).pipe(map(resp => resp as T));
	}

	
}
