import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container-fluid">

<div class="row">
  <div class="col-md-12 loan-header"><h1 class="loanDetails">{{title}}</h1></div>
</div>
</div>
<user-root></user-root>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Home</a>
      <a routerLink="/heroes" routerLinkActive="active">Other Policies</a>
    </nav>
    <router-outlet></router-outlet>
      <verifacto></verifacto> 
  <reported-detail> </reported-detail> 


  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Loan Details';
}