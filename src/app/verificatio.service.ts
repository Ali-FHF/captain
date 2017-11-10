import {Injectable} from '@angular/core'; 
import {Http, Response} from '@angular/http'; 
import {Observable} from 'rxjs/Rx'; 
import 'rxjs/add/operator/map';
import {VerifactoDataModel} from './verifactodatamodel'; 



@Injectable()
export class VerifactoService {


	constructor(private http: Http) {}

	getVerifactoData(): Observable<VerifactoDataModel[]> {

				return this.http.get('https://apis.firsthelpfinancial.net/ords/collectionreports/api_user_insurance_verified/?offset=0&limit=50')
				.map((res:Response) => res.json())
				.catch((error:any) => Observable.throw(error.json().error || 'Server Error')); 
	}
} 