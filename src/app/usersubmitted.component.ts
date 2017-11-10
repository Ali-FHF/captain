import {Component, OnInit, Input} from '@angular/core'; 
import { Http } from '@angular/http'; 
import { Post } from './post.interface'; 


@Component({

	selector:'bloggers', 
	template:`
	<h1 class="blog"> Information submitted by: {{blogger}} </h1> 

<div>
<posts [data]="posts"></posts>
</div>

         `
})

export class SubmittedComponent implements OnInit {

	blogger = 'Ali Faqih'; 

	posts: Post[]; 

	constructor(private http: Http) {}


	ngOnInit() {

		this.getPostsByBlogger()
		.subscribe(x => this.posts = x); 
	}


	getPostsByBlogger() {

		const url = './mock-posts.json'; 

		return this.http.get(url)
		.map(x => x.json()); 
	}


}
