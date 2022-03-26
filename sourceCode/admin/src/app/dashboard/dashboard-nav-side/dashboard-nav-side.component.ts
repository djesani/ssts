import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-nav-side',
  templateUrl: './dashboard-nav-side.component.html',
  styles: [
  ]
})
export class DashboardNavSideComponent implements OnInit {

  sideMenuStatus = false;

  isSideMenuShow() {
    if (localStorage.getItem("isSideMenuShow") == 'true') {
      this.sideMenuStatus = true;
    }
  }

  ngOnInit(): void {
    this.isSideMenuShow();
  }

  toggleSidebar(value) {
    if (localStorage.getItem("isSideMenuShow") == 'true') {
      document.getElementById("header-nav").style.marginLeft = "250px";
      document.getElementById("side-nav").style.width = "250px";
      document.getElementById("main-content").style.marginLeft = "250px";
    } else {
      if (value == true) {
        document.getElementById("header-nav").style.marginLeft = "250px";
        document.getElementById("side-nav").style.width = "250px";
        document.getElementById("main-content").style.marginLeft = "250px";
      } else {
        document.getElementById("header-nav").style.marginLeft = "50px";
        document.getElementById("side-nav").style.width = "50px";
        document.getElementById("main-content").style.marginLeft = "50px";
      }
    }
    localStorage.setItem('isSideMenuShow', this.sideMenuStatus.toString());
  }

  isLoggedIn(): boolean {
    if (JSON.parse(localStorage.getItem("currentUser"))) {
      return true;
    } else {
      return false;
    }
  }

}
