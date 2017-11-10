import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { PolicyDetailComponent }  from './policy-detail.component';
import { PolicyComponent }      from './policy.component';
import { PolicyService }          from './policy.service';
import { ReportedComponent }  from './reported.component';
import { AppRoutingModule }     from './app-routing.module';
import { UserComponent } from './user.component';
import { UserService } from './user.service';
import {LoanService} from './loan.service'; 
import {LoanUserService} from './loan.user.service';
import { PostsComponent } from './posts.component'; 
import { VerifactoComponent } from './verifacto.component'; 
import {VerifactoService} from './verifacto.service'; 
import { SubmittedComponent } from './usersubmitted.component'; 
// import {PassengerDashboardModule} from './passenger-dashboard/passenger-dashboard.module'; 



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
	   HttpModule,
      AppRoutingModule
      // custom module
     // PassengerDashboardModule 
   
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    PolicyDetailComponent,
    PostsComponent,
    VerifactoComponent,  
    SubmittedComponent, 
    UserComponent,
    ReportedComponent, 
    PolicyComponent
  ],
  providers: [UserService,PolicyService,VerifactoService,LoanUserService,LoanService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
