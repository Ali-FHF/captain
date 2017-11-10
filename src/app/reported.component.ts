import { Component, Input, OnInit } from '@angular/core';
import {LoanUserService} from './loan.user.service'; 


@Component({
  selector: 'reported-detail',
  styleUrls: [ './reported.component.css' ],
  templateUrl: './reported.component.html'
})
export class ReportedComponent  {
 
 //  defining an array property called myloandata
myloandata; 

// now i inject the loanService in the constructor 
// and hold it in my private variable 
constructor(private myloanService: LoanUserService) {

	this.myloandata = myloanService.getLoanDataBoss();
}



}