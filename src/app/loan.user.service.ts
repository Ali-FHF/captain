import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';

import { DataBoss } from './databoss';
// import { MessageService } from './message.service';

// const httpOptions = {
// 	headers: new HttpHeaders({'Content-type':'application/json'})
// }; 

@Injectable()
export class LoanUserService {

	// private apiURL = 'https://apis.firsthelpfinancial.net/ords/collectionreports/user_insurance_reported/?offset=0&limit=50'; 


	constructor(private http: Http){}

	getLoanDataBoss(): Observable<DataBoss[]> {

		return this.http.get("https://apis.firsthelpfinancial.net/ords/collectionreports/user_insurance_reported/?offset=0&limit=50")
		.map((res: Response) => res.json().items)
		.catch((error: any) => Observable.throw(error.json().error || 'Server Error' )); 
	}


	



}

