import { RouteInfo } from "./sidebar.metadata";
export const ROUTES: RouteInfo[] = [

  // Admin Modules
  {
    path: "/events",
    title: "Events",
    moduleName: "dashboard",
    iconType: "feather",
    icon: "calendar",
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
    icon: "image",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [],
  }

];
