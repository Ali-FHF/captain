import { Component , Input , OnChanges, OnInit, SimpleChanges} from '@angular/core'; 
import { BehaviorSubject } from 'rxjs/BehaviorSubject'; 
import { Post, GroupPosts} from './post.interface'; 

@Component({

	selector: 'posts', 
	template:`

			<div class="list-group"> 
				<div *ngFor="let group of groupPosts" class="list-group-item"> 

				<h4> {{ group.category}} </h4> 

				<ul> 
					<li *ngFor=" let post of group.posts"> 

						{{post.title}}

					</li> 				

				</ul> 

				</div> 
			</div> 

	`
})


	export class PostsComponent implements OnInit, OnChanges{

		@Input()
		data: Post[]; 

		groupPosts: GroupPosts[]; 


		ngOnInit() {

				this.groupPosts = this.groupByCategory(this.data); 
		}


			ngOnChanges(changes: SimpleChanges) {

			}


			groupByCategory(data: Post[]): GroupPosts[] {

				// our logic to group the posts by category 

				if (!data) return; 

					// find out all the unique categories 

					const categories = new Set(data.map(userpost => userpost.category)); 


					// produce a list of category with it's post 


			const result = Array.from(categories).map(userpost => ({


					category: userpost, 
					posts: data.filter(post => post.category === userpost)


				}));

					return result; 
			}


	}


