import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { SIDEBAR_LINKS } from "src/app/shell/sidebar-links";

const preffix: "assets/docs/" = "assets/docs/";

@Component({
  selector: "app-docs",
  templateUrl: "./docs.component.html",
  styleUrls: ["./docs.component.scss"],
})
export class DocsComponent implements OnInit {
  src: Observable<string>;
  str: string = "assets/docs/getting-started.pdf";
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.src = this.route.paramMap.pipe(
      map((paramMap: ParamMap) => preffix.concat(paramMap.get("name")))
    );
  }

  onError() {
    this.router.navigate([SIDEBAR_LINKS[0].value]);
  }
}
