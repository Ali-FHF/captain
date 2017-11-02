import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { DataBoss } from './databoss';


@Injectable()
export class LoanUserService {

	constructor(private http: Http){}

	getLoanDataBoss(): Observable<DataBoss[]> {

		return this.http.get("https://apis.firsthelpfinancial.net/ords/collectionreports/user_insurance_reported/?offset=0&limit=50")
		.map((res: Response) => res.json().items)
		.catch((error: any) => Observable.throw(error.json().error || 'Server Error' )); 
	}
}

