import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'user-root',
  templateUrl: './user.component.html'

})

export class UserComponent {

	users; 

	constructor(private userService: UserService) {

		this.users = userService.getUsers(); 
	}

}

