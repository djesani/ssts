ng g m shared/user-profile --route=profile --module app.module
ng g s shared/user-profile/user-profile

ng g c shared/not-found --module app.module

ng g m shared/dashboard --route=dashboard --module app.module
ng g c shared/dashboard/dashboard-main
ng g c shared/dashboard/dashboard-nav-side
ng g c shared/dashboard/dashboard-nav-top

ng g m events      --route=events         --module app.module
ng g c events/events-list
ng g c events/events-detail
ng g c events/events-form

----

ng add @fortawesome/angular-fontawesome

---