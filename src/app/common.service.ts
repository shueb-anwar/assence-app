import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Deal } from './deal';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
	public apiUrl: string = "/api";
	public subject = new Subject<any>();

	constructor( private http: HttpClient ) { }

  	public getDeals(): Observable<Deal[]> {
  		return this.http.get<Deal[]>(this.apiUrl);
	}
}
