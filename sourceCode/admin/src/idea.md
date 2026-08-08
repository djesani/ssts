This is an Admin dashboard for contant management with features of user management, content management, and analytics.

Using Angular 20, Bootstrap 5, fontawesome for Fonts, 

It has a shell that is generic and resued accross various othe micro apps.

The shell has a sidebar that is collapsible and has a topbar that has a search bar and a notification bar.

The shell has a sidebar that is collapsible and has a topbar that has a search bar and a notification bar.

The shell has a sidebar that is collapsible and has a topbar that has a search bar and a notification bar.

It is using NgModules - lazy routing as a micro frontend architecture.  

THE architectural emphaios is on CRUd like functionalty for each of scaling and consistencly, = sepearation of concerns. Related components will be grouped together in the same module. Each module will have its own routing and state management. Each module will be lazy loaded. 

The shell will have its own routing and state management. The shell will be lazy loaded. 

the entry point will be the shell.  - named app.module.ts   

there is shared folder that has common components and services that are used by the shell and the micro apps. - named shared.module.ts

there is secure folder that has common components and services that are used by the shell and the micro apps. - named secure.module.ts  

there is public folder that has common components and services that are used by the shell and the micro apps. - named public.module.ts  

there is layout folder  for layout components that are used by the shell and the micro apps. - named layout.module.ts

there is a core folder that has common components and services that are used by the shell and the micro apps. - named core.module.ts

the micro apps are added in the secure folder

at the momenet there are two micrapps 
1) events
2) calendarIcons - this is not active a the moment - not being used


The Events micro app has its own routing and state management. The Events micro app will be lazy loaded. 
there is an event form which is used for both edit and add mode and segregated based on context

it has a list of events and a form to add or edit events

there is a list of users and a form to add or edit users
 there is a event compoent for edit and add mode

 here is the detailed control for events
 start date
 end date
 name
 description
 image
 unpublished    

 these are controls for Calendar Icons
 name
 description
 image
 unpublished        

 




