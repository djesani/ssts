import { RouteInfo } from "./sidebar.metadata";
export const ROUTES: RouteInfo[] = [

  // Admin Modules
  {
    path: "/events",
    title: "Events",
    moduleName: "dashboard",
    iconType: "feather",
    icon: "calendar-day",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [],
  },
  {
    path: "/calendarIcons",
    title: "Calendar Icons",
    moduleName: "dashboard",
    iconType: "feather",
    icon: "info-circle",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [],
  }

];
