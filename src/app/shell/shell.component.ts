import { Component, OnDestroy, ChangeDetectorRef, OnInit } from "@angular/core";
import { MediaMatcher } from "@angular/cdk/layout";

import { SIDEBAR_LINKS, ILink } from "./sidebar-links";

@Component({
  selector: "app-shell",
  templateUrl: "./shell.component.html",
  styleUrls: ["./shell.component.scss"],
})
export class ShellComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;
  fillerNav: ILink[];

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia("(max-width: 600px)");
    this.mobileQuery.matches;
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit(): void {
    this.fillerNav = SIDEBAR_LINKS;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
