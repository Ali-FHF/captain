import { Component } from '@angular/core';
import {VerifactoService} from './verifacto.service'; 



@Component({
selector: 'verifacto', 
templateUrl: './verifacto.component.html'
})
	export class VerifactoComponent  {

		facto; 

		constructor(private factoService:VerifactoService) { 

				this.facto = factoService.getVerifactoData(); 
		}

	

}