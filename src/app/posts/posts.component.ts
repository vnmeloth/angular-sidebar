import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  posts$: Object;
  showLoadingIndicator: boolean = true;
  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getPosts().subscribe(data => {this.posts$ = data; this.showLoadingIndicator = false});
  }
}
