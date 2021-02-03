import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { takeUntil } from "rxjs/operators";
import { AuthService } from "src/app/services/auth.service";
import { BaseComponent } from "../base.component";

@Component({
  selector: 'main-frame',
  templateUrl: './main-frame.component.html',
  styleUrls: ['./main-frame.component.scss']
})
export class MainFrameComponent extends BaseComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(
    private authSvc: AuthService,
  ) {
    super();
  }

  ngOnInit(): void {
    this.authSvc.getUserInfo().pipe(
      takeUntil(this.unsubscribe),
    ).subscribe((userInfo) => {
      this.isLoggedIn = userInfo.isAuthenticated;
    });
  }

  logout(): void {
    this.authSvc.logout();
   }
}