import { LoanModel } from './loan';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Injectable} from '@angular/core'; 

@Injectable()
export class LoanService {

private loanUrl = 'https://apis.firsthelpfinancial.net/ords/collectionreports/user_insurance_reported/?offset=0&limit=50';

constructor(private http: Http) {}

getLoanData(): Promise<LoanModel> {

	return this.http.get(this.loanUrl)
	.toPromise()
	.then(response => response.json().data as LoanModel[])
	.catch(this.handleError); 
}

 private handleError(error: any): Promise<any> {
 	// this should let us know if we messed up 
 	console.error('An error occurred', error);
 	return Promise.reject(error.message || error); 
 }



}

