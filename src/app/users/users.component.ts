import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import {
  Event,
  Router,
  Routes,
  NavigationStart,
  NavigationEnd
} from "@angular/router";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  users$: Object;
  showLoadingIndicator: boolean = true;
  constructor(private data: DataService, private _router: Router) {}

  ngOnInit() {
    // this._router.events.subscribe((routerEvent: Event) => {
    //   if (routerEvent instanceof NavigationStart) {
    //     this.showLoadingIndicator=true;
    //   }
    //   if (routerEvent instanceof NavigationEnd) {
    //     this.showLoadingIndicator=false;
    //   }
    // });
    this.data.getUsers().subscribe(data => {
      this.users$ = data;
      this.showLoadingIndicator = false;
    });
  }
}
