import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {


  listPost!: Post[];
  post: Post = new Post;
  nome!: string;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.findPosts()
  }

  findPosts() {
    this.postService.getPosts().subscribe((data: any) => {
      this.listPost = data;
    })
  }

  cadastrarMensagem(): void {
    this.postService.postMensagem(this.post).subscribe((data: any) => {
      this.post = data
      location.assign('/feed')
    })
  }

}
