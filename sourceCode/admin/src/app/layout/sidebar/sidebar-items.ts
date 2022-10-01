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
  }

];
