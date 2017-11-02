import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroesComponent }      from './heroes.component';
import { HeroService }          from './hero.service';
import { ReportedComponent }  from './reported.component';
import { AppRoutingModule }     from './app-routing.module';
import { UserComponent } from './user.component';
import { UserService } from './user.service';
import {LoanService} from './loan.service'; 
import {LoanUserService} from './loan.user.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
	   HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    UserComponent,
    ReportedComponent, 
    HeroesComponent
  ],
  providers: [UserService,HeroService,LoanUserService,LoanService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
