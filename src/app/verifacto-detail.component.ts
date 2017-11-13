import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location}  from '@angular/common';
import {VerifactoDataModel} from './verifactodatamodel';  
import {VerifactoService} from './verifacto.service'; 

@Component({

	selector:'verifacto-detail', 
	templateUrl:'./verifacto-detail.component.html'
})


export class VerifactoDetailComponent  {

verifacto: VerifactoDataModel; 

constructor( private factoService: VerifactoService, 
			private route: ActivatedRoute, 
			private location: Location){}




goBack(): void {

	this.location.back(); 
}

}





