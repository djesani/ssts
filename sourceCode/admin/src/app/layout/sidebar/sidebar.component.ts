import { Router } from "@angular/router";
import { DOCUMENT } from "@angular/common";
import { Component, Inject, OnInit, Renderer2 } from "@angular/core";
import { AuthService } from "src/app/core/auth/auth.service";
@Component({
  selector: "app-sidebar",
  standalone: false,
  templateUrl: "./sidebar.component.html",
})
export class SidebarComponent implements OnInit {
  sideMenuExpanded = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.initLeftSidebar();
  }
  initLeftSidebar() {
    this.isSideMenuExpanded();
  }
  mouseHover(e) {
    const body = this.document.body;
    if (
      body.classList.contains("sidemenu-collapsed") &&
      !this.sideMenuExpanded
    ) {
      this.renderer.addClass(this.document.body, "sidemenu-collapsed-hover");
    }
  }
  mouseOut(e) {
    const body = this.document.body;
    if (body.classList.contains("sidemenu-collapsed")) {
      this.renderer.removeClass(this.document.body, "sidemenu-collapsed-hover");
    }
    if (
      body.classList.contains("sidemenu-collapsed-hover") &&
      this.sideMenuExpanded
    ) {
      this.renderer.removeClass(this.document.body, "sidemenu-collapsed-hover");
      this.renderer.addClass(this.document.body, "sidemenu-expanded");
    }
  }
  logout() {
    this.authService.logout().subscribe((res) => {
      if (!res.success) {
        this.router.navigate(["/public/login"]);
      }
    });
  }

  touchstart() {
    const body = this.document.body;
    if (
      body.classList.contains("sidemenu-collapsed.sidemenu-collapsed-hover")
    ) {
      this.renderer.addClass(this.document.body, "sidemenu-collapsed-hover");
    }
  }

  isSideMenuExpanded() {
    if (localStorage.getItem("sidemenu-expanded") == "true") {
      this.sideMenuExpanded = true;
      this.renderer.removeClass(this.document.body, "sidemenu-collapsed");
      this.renderer.addClass(this.document.body, "sidemenu-expanded");
    } else {
      this.sideMenuExpanded = false;
      this.renderer.addClass(this.document.body, "sidemenu-collapsed");
      this.renderer.removeClass(this.document.body, "sidemenu-expanded");
      this.renderer.removeClass(this.document.body, "sidemenu-collapsed-hover");
    }
  }

  toggleSidebar() {
    localStorage.setItem("sidemenu-expanded", this.sideMenuExpanded.toString());
    this.isSideMenuExpanded();
  }
}
