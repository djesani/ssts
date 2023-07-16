import { Router, NavigationEnd } from "@angular/router";
import { DOCUMENT } from "@angular/common";
import {
  Component,
  Inject,
  ElementRef,
  OnInit,
  Renderer2,
  HostListener,
  OnDestroy,
} from "@angular/core";
import { ROUTES } from "./sidebar-items";
import { AuthService } from "src/app/core/guard/auth.service";
import { Role } from "src/app/core/models/role";
@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html"
})
export class SidebarComponent implements OnInit, OnDestroy {
  public sidebarItems: any[];
  level1Menu = "";
  level2Menu = "";
  level3Menu = "";
  public innerHeight: any;
  public bodyTag: any;
  listMaxHeight: string;
  listMaxWidth: string;
  userFullName: string;
  userImg: string;
  userType: string;
  headerHeight = 60;
  currentRoute: string;
  routerObj = null;
  sideMenuShow = true;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    public elementRef: ElementRef,
    private authService: AuthService,
    private router: Router
  ) {
    const body = this.elementRef.nativeElement.closest("body");
    this.routerObj = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // logic for select active menu in dropdown
        const role = ["admin"];
        const currenturl = event.url.split("?")[0];
        const firstString = currenturl.split("/").slice(1)[0];

        if (role.indexOf(firstString) !== -1) {
          this.level1Menu = event.url.split("/")[2];
          this.level2Menu = event.url.split("/")[3];
        } else {
          this.level1Menu = event.url.split("/")[1];
          this.level2Menu = event.url.split("/")[2];
        }

        // close sidebar on mobile screen after menu select
        this.renderer.removeClass(this.document.body, "overlay-open");
      }
    });
  }
  @HostListener("window:resize", ["$event"])
  // windowResizecall(event) {
  //   this.setMenuHeight();
  //   this.checkStatuForResize(false);
  // }
  @HostListener("document:mousedown", ["$event"])
  onGlobalClick(event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.renderer.removeClass(this.document.body, "overlay-open");
    }
  }
  callLevel1Toggle(event: any, element: any) {
    if (element === this.level1Menu) {
      this.level1Menu = "0";
    } else {
      this.level1Menu = element;
    }
    const hasClass = event.target.classList.contains("toggled");
    if (hasClass) {
      this.renderer.removeClass(event.target, "toggled");
    } else {
      this.renderer.addClass(event.target, "toggled");
    }
  }
  callLevel2Toggle(event: any, element: any) {
    if (element === this.level2Menu) {
      this.level2Menu = "0";
    } else {
      this.level2Menu = element;
    }
  }
  callLevel3Toggle(event: any, element: any) {
    if (element === this.level3Menu) {
      this.level3Menu = "0";
    } else {
      this.level3Menu = element;
    }
  }
  ngOnInit() {
    if (this.authService.currentUserValue) {
      const userRole = this.authService.currentUserValue.role;
      this.userFullName =
        this.authService.currentUserValue.firstName +
        " " +
        this.authService.currentUserValue.lastName;
      this.userImg = this.authService.currentUserValue.img;

      this.sidebarItems = ROUTES.filter(
        (x) => x.role.indexOf(userRole) !== -1 || x.role.indexOf("All") !== -1
      );
      if (userRole === Role.Admin) {
        this.userType = Role.Admin;
      } else {
        this.userType = Role.Admin;
      }
    }

    // this.sidebarItems = ROUTES.filter((sidebarItem) => sidebarItem);
    this.initLeftSidebar();
    this.bodyTag = this.document.body;
  }
  ngOnDestroy() {
    this.routerObj.unsubscribe();
  }
  initLeftSidebar() {
    const _this = this;
    // Set menu height
    // _this.setMenuHeight();
    // _this.checkStatuForResize(true);

    this.isSideMenuShow();
  }
  // setMenuHeight() {
  //   this.innerHeight = window.innerHeight;
  //   const height = this.innerHeight - this.headerHeight;
  //   this.listMaxHeight = height + "";
  //   this.listMaxWidth = "500px";
  // }
  // isOpen() {
  //   return this.bodyTag.classList.contains("overlay-open");
  // }
  // checkStatuForResize(firstTime) {
  //   if (window.innerWidth < 1170) {
  //     this.renderer.addClass(this.document.body, "ls-closed");
  //   } else {
  //     this.renderer.removeClass(this.document.body, "ls-closed");
  //   }
  // }
  mouseHover(e) {
    const body = this.document.body;
    if (body.classList.contains("sidemenu-expanded") && !this.sideMenuShow) {
      this.renderer.addClass(this.document.body, "sidemenu-expanded-hover");
    }
  }
  mouseOut(e) {
    const body = this.document.body;
    if (body.classList.contains("sidemenu-expanded")) {
      this.renderer.removeClass(this.document.body, "sidemenu-expanded-hover");
    }
    if (body.classList.contains("sidemenu-expanded-hover") && this.sideMenuShow) {
      this.renderer.removeClass(this.document.body, "sidemenu-expanded-hover");
      this.renderer.addClass(this.document.body, "sidemenu-keep-expanded");
    }
  }
  logout() {
    this.authService.logout().subscribe((res) => {
      if (!res.success) {
        this.router.navigate(["/public/login"]);
      }
    });
  }

  isSideMenuShow() {
    if (localStorage.getItem("sidemenu-keep-expanded") == 'true') {
      this.sideMenuShow = true;
      this.renderer.removeClass(this.document.body, "sidemenu-expanded");
    } else {
      this.sideMenuShow = false;
      this.renderer.addClass(this.document.body, "sidemenu-expanded");
    }
    if (this.sideMenuShow) {
      this.renderer.addClass(this.document.body, "sidemenu-keep-expanded");
    } else {
      this.renderer.removeClass(this.document.body, "sidemenu-keep-expanded");
    }
  }

  toggleSidebar() {
    localStorage.setItem('sidemenu-keep-expanded', this.sideMenuShow.toString());
    this.isSideMenuShow();
  }
}
