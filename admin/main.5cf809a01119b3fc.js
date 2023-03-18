"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([["main"],{9390:(U,C,o)=>{o.d(C,{a:()=>d});var c=o(4650),e=o(2273),T=o(8478);let d=(()=>{class r{constructor(m,b){this.authService=m,this.router=b}canActivate(m,b){return this.authService.currentUserValue&&(!m.data.role||-1!==m.data.role.indexOf(this.authService.currentUserValue.role))||(this.router.navigate(["/public/login"],{queryParams:{returnUrl:b.url}}),!1)}}return r.\u0275fac=function(m){return new(m||r)(c.LFG(e.e),c.LFG(T.F0))},r.\u0275prov=c.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},2273:(U,C,o)=>{o.d(C,{e:()=>m});var c=o(1135),e=o(9646),T=o(4004),d=o(2340),r=o(4650),M=o(529);let m=(()=>{class b{constructor(I){this.http=I,this.currentUserSubject=new c.X(JSON.parse(localStorage.getItem("currentUser"))),this.currentUser=this.currentUserSubject.asObservable()}get currentUserValue(){return this.currentUserSubject.value}login(I,y){return this.http.post(`${d.N.CONTEXT_PATH}/auth/basic`,{username:I,password:y}).pipe((0,T.U)(g=>(localStorage.setItem("currentUser",JSON.stringify(g)),this.currentUserSubject.next(g),g)))}logout(){return localStorage.removeItem("currentUser"),this.currentUserSubject.next(null),(0,e.of)({success:!1})}}return b.\u0275fac=function(I){return new(I||b)(r.LFG(M.eN))},b.\u0275prov=r.Yz7({token:b,factory:b.\u0275fac,providedIn:"root"}),b})()},8252:(U,C,o)=>{o.d(C,{u:()=>c});var c=(()=>{return(e=c||(c={})).All="All",e.Admin="Admin",c;var e})()},9618:(U,C,o)=>{o.d(C,{J:()=>T});var c=o(4650),e=o(8478);let T=(()=>{class d{}return d.\u0275fac=function(M){return new(M||d)},d.\u0275cmp=c.Xpm({type:d,selectors:[["app-page404"]],decls:5,vars:0,consts:[[1,"center"],["routerLink","/public/login"]],template:function(M,m){1&M&&(c.TgZ(0,"div",0)(1,"h3"),c._uU(2,"404 page not found"),c.qZA(),c.TgZ(3,"a",1),c._uU(4,"Login"),c.qZA()())},dependencies:[e.rH],encapsulation:2}),d})()},8779:(U,C,o)=>{o.r(C),o.d(C,{PublicModule:()=>J});var c=o(6895),e=o(4006),T=o(8478),d=o(8252),r=o(4650),M=o(2273);function m(u,v){if(1&u&&(r.TgZ(0,"div",14),r._uU(1),r.qZA()),2&u){const p=r.oxw();r.xp6(1),r.Oqu(p.error)}}const y=[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:(()=>{class u{constructor(p,A,O,Z){this.formBuilder=p,this.route=A,this.router=O,this.authService=Z,this.submitted=!1,this.error="",this.hide=!0,this.loading=!1}ngOnInit(){this.loginForm=this.formBuilder.group({username:["admin",e.kI.required],password:["Swaminarayan19",e.kI.required]})}get f(){return this.loginForm.controls}onSubmit(){this.submitted=!0,this.error="",this.loginForm.invalid?this.error="Username and Password not valid !":this.authService.login(this.f.username.value,this.f.password.value).subscribe(p=>{p?setTimeout(()=>{const A=this.authService.currentUserValue.role;A===d.u.All||A===d.u.Admin?(this.returnUrl=this.route.snapshot.queryParams.returnUrl||"/",this.router.navigate([this.returnUrl])):this.router.navigate(["/public/login"])},1e3):this.error="Invalid Login"},p=>{this.error=p,this.submitted=!1})}}return u.\u0275fac=function(p){return new(p||u)(r.Y36(e.qu),r.Y36(T.gz),r.Y36(T.F0),r.Y36(M.e))},u.\u0275cmp=r.Xpm({type:u,selectors:[["app-login"]],decls:20,vars:2,consts:[[1,"col-md-6","offset-md-3","mt-5","login"],[1,"alert","alert-info"],[1,"card"],[1,"card-header"],[1,"welcome-msg"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","username"],["type","text","formControlName","username",1,"form-control"],["for","password"],["type","password","formControlName","password",1,"form-control"],[1,"btn","btn-primary"],["class","alert alert-danger mt-3 mb-0",4,"ngIf"],[1,"alert","alert-danger","mt-3","mb-0"]],template:function(p,A){1&p&&(r.TgZ(0,"div",0),r._UZ(1,"div",1),r.TgZ(2,"div",2)(3,"h4",3),r._uU(4,"Login"),r.qZA(),r.TgZ(5,"h2",4),r._uU(6," Welcome to Admin "),r.qZA(),r.TgZ(7,"div",5)(8,"form",6),r.NdJ("ngSubmit",function(){return A.onSubmit()}),r.TgZ(9,"div",7)(10,"label",8),r._uU(11,"Username"),r.qZA(),r._UZ(12,"input",9),r.qZA(),r.TgZ(13,"div",7)(14,"label",10),r._uU(15,"Password"),r.qZA(),r._UZ(16,"input",11),r.qZA(),r.TgZ(17,"button",12),r._uU(18," Login "),r.qZA(),r.YNc(19,m,2,1,"div",13),r.qZA()()()()),2&p&&(r.xp6(8),r.Q6J("formGroup",A.loginForm),r.xp6(11),r.Q6J("ngIf",A.error))},dependencies:[c.O5,e._Y,e.Fj,e.JJ,e.JL,e.sg,e.u],encapsulation:2}),u})()},{path:"logout",component:(()=>{class u{constructor(p,A){this.router=p,this.authService=A}ngOnInit(){this.logout()}logout(){this.authService.logout().subscribe(p=>{p.success||this.router.navigate(["/public/login"])})}}return u.\u0275fac=function(p){return new(p||u)(r.Y36(T.F0),r.Y36(M.e))},u.\u0275cmp=r.Xpm({type:u,selectors:[["ng-component"]],decls:0,vars:0,template:function(p,A){},encapsulation:2}),u})()},{path:"page404",component:o(9618).J}];let g=(()=>{class u{}return u.\u0275fac=function(p){return new(p||u)},u.\u0275mod=r.oAB({type:u}),u.\u0275inj=r.cJS({imports:[T.Bz.forChild(y),T.Bz]}),u})(),J=(()=>{class u{}return u.\u0275fac=function(p){return new(p||u)},u.\u0275mod=r.oAB({type:u}),u.\u0275inj=r.cJS({imports:[c.ez,e.u5,e.UX,g]}),u})()},5980:(U,C,o)=>{o.d(C,{m:()=>V});var c=o(6895),e=o(4006),T=o(8478),d=o(2953),r=o(529),M=o(8423),m=o(4650);let b=(()=>{class i extends d.DO{constructor(){super(...arguments),this.DELIMITER="/"}fromModel(l){if(l){let L=l.split(this.DELIMITER);return{day:parseInt(L[0],10),month:parseInt(L[1],10),year:parseInt(L[2],10)}}return null}toModel(l){return l&&(this.paddedDay=l.day<10?"0"+l.day:""+l.day,this.paddedMonth=l.month<10?"0"+l.month:""+l.month),l?this.paddedDay+this.DELIMITER+this.paddedMonth+this.DELIMITER+l.year:null}}return i.\u0275fac=function(){let S;return function(L){return(S||(S=m.n5z(i)))(L||i)}}(),i.\u0275prov=m.Yz7({token:i,factory:i.\u0275fac}),i})(),x=(()=>{class i extends d.NG{constructor(){super(...arguments),this.DELIMITER="/"}parse(l){if(l){let L=l.split(this.DELIMITER);return{day:parseInt(L[0],10),month:parseInt(L[1],10),year:parseInt(L[2],10)}}return null}format(l){return l&&(this.paddedDay=l.day<10?"0"+l.day:""+l.day,this.paddedMonth=l.month<10?"0"+l.month:""+l.month),l?this.paddedDay+this.DELIMITER+this.paddedMonth+this.DELIMITER+l.year:""}}return i.\u0275fac=function(){let S;return function(L){return(S||(S=m.n5z(i)))(L||i)}}(),i.\u0275prov=m.Yz7({token:i,factory:i.\u0275fac}),i})();var I=o(2216),y=o(2687);let g=(()=>{class i{constructor(l){this.library=l,l.addIcons(y.wn1,y.J9Y,y.$nv,y.gNZ,y.m08,y.oTz,y.Toy,y.OS1,y.egO,y.f8k,y.nYk)}}return i.\u0275fac=function(l){return new(l||i)(m.LFG(I.by))},i.\u0275mod=m.oAB({type:i}),i.\u0275inj=m.cJS({imports:[I.uH,I.uH]}),i})();var J=o(6913),u=o(7392),v=o(4859),p=o(9602),A=o(3238),O=o(266),Z=o(4633),D=o(811),B=o(9549),R=o(4144),Y=o(455);const w=[v.ot,R.c,Z.ie,u.Ps,O.AV,p.FA,A.XK,D.vV,B.lN,Y.rP];let K=(()=>{class i{}return i.\u0275fac=function(l){return new(l||i)},i.\u0275mod=m.oAB({type:i}),i.\u0275inj=m.cJS({imports:[w,v.ot,R.c,Z.ie,u.Ps,O.AV,p.FA,A.XK,D.vV,B.lN,Y.rP]}),i})();var z=o(6323),Q=o(2642);let G=(()=>{class i{}return i.\u0275fac=function(l){return new(l||i)},i.\u0275mod=m.oAB({type:i}),i.\u0275inj=m.cJS({imports:[c.ez,z.p.pick(Q.kEt),z.p]}),i})();const j=[c.ez,e.u5,e.UX,T.Bz,d.IJ,M.ef,r.JF,d.M,J.TA,g];let V=(()=>{class i{}return i.\u0275fac=function(l){return new(l||i)},i.\u0275mod=m.oAB({type:i}),i.\u0275inj=m.cJS({providers:[{provide:d.DO,useClass:b},{provide:d.NG,useClass:x}],imports:[j,c.ez,e.u5,e.UX,T.Bz,d.IJ,M.ef,r.JF,d.M,J.TA,g,K,G]}),i})()},2340:(U,C,o)=>{o.d(C,{N:()=>c});const c={production:!0,apiUrl:"/admin",CONTEXT_PATH:"/admin",LOCAL_PATH:""}},2541:(U,C,o)=>{var c=o(1481),e=o(4650),T=o(1516),d=o(6895),r=o(529),M=o(9390),m=o(2273);let x=(()=>{class n{constructor(t){!function b(n,a){if(n)throw new Error(`${a} has already been loaded. Import ${a} modules in the AppModule only.`)}(t,"CoreModule")}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(n,12))},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[M.a,m.e],imports:[d.ez,d.ez]}),n})();var I=o(8779),y=o(5980),g=o(8478);let J=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-layout-public"]],decls:2,vars:0,consts:[["id","main-content",1,"right-section","page"]],template:function(t,s){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"router-outlet"),e.qZA())},dependencies:[g.lC],encapsulation:2}),n})();const u=[{path:"/events",title:"Events",moduleName:"dashboard",iconType:"feather",icon:"calendar",class:"",groupTitle:!1,badge:"",badgeClass:"",role:["Admin"],submenu:[]},{path:"/calendarIcons",title:"Calendar Icons",moduleName:"dashboard",iconType:"feather",icon:"image",class:"",groupTitle:!1,badge:"",badgeClass:"",role:["Admin"],submenu:[]}];var v=o(8252),p=o(4006),A=o(6323);function O(n,a){if(1&n&&(e.TgZ(0,"div",18),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Oqu(t.title)}}const Z=function(n){return[n]};function D(n,a){if(1&n&&(e.TgZ(0,"span",22),e._uU(1),e.qZA()),2&n){const t=e.oxw(2).$implicit;e.Q6J("ngClass",e.VKq(2,Z,t.badgeClass)),e.xp6(1),e.Oqu(t.badge)}}function B(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"a",19),e.NdJ("click",function(h){e.CHM(t);const f=e.oxw().$implicit,F=e.oxw();return e.KtG(F.callLevel1Toggle(h,f.moduleName))}),e._UZ(1,"i-feather",20),e.TgZ(2,"span",13),e._uU(3),e.qZA(),e.YNc(4,D,2,4,"span",21),e.qZA()}if(2&n){const t=e.oxw().$implicit;e.Q6J("routerLink",""===t.class?e.VKq(5,Z,t.path):null)("ngClass",e.VKq(7,Z,t.class)),e.xp6(1),e.Q6J("name",t.icon),e.xp6(2),e.hij("",t.title," "),e.xp6(1),e.Q6J("ngIf",""!=t.badge)}}function R(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"li",25)(1,"a",26),e.NdJ("click",function(h){const F=e.CHM(t).$implicit,_=e.oxw(5);return e.KtG(_.callLevel3Toggle(h,F.moduleName))}),e._uU(2),e.qZA()()}if(2&n){const t=a.$implicit,s=e.oxw(5);e.Q6J("ngClass",s.level3Menu===t.moduleName?"activeSubSub":"")("routerLinkActive",t.submenu.length>0?"":"active"),e.xp6(1),e.Q6J("routerLink",t.submenu.length>0?null:e.VKq(5,Z,t.path))("ngClass",e.VKq(7,Z,t.class)),e.xp6(1),e.hij(" ",t.title," ")}}function Y(n,a){if(1&n&&(e.TgZ(0,"ul",28),e.YNc(1,R,3,9,"li",24),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("ngForOf",t.submenu)}}function w(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"li",25)(1,"a",26),e.NdJ("click",function(h){const F=e.CHM(t).$implicit,_=e.oxw(3);return e.KtG(_.callLevel2Toggle(h,F.moduleName))}),e._uU(2),e.qZA(),e.YNc(3,Y,2,1,"ul",27),e.qZA()}if(2&n){const t=a.$implicit,s=e.oxw(3);e.Q6J("ngClass",s.level2Menu===t.moduleName?"activeSub":"")("routerLinkActive",t.submenu.length>0?"":"active"),e.xp6(1),e.Q6J("routerLink",t.submenu.length>0?null:e.VKq(6,Z,t.path))("ngClass",e.VKq(8,Z,t.class)),e.xp6(1),e.hij(" ",t.title," "),e.xp6(1),e.Q6J("ngIf",t.submenu.length>0)}}function K(n,a){if(1&n&&(e.TgZ(0,"ul",23),e.YNc(1,w,4,10,"li",24),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("ngForOf",t.submenu)}}function z(n,a){if(1&n&&(e.TgZ(0,"li",14),e.YNc(1,O,2,1,"div",15),e.YNc(2,B,5,9,"a",16),e.YNc(3,K,2,1,"ul",17),e.qZA()),2&n){const t=a.$implicit,s=e.oxw();e.ekj("active",s.level1Menu===t.moduleName&&0!=t.submenu.length),e.Q6J("routerLinkActive",0!=t.submenu.length?"":"active"),e.xp6(1),e.Q6J("ngIf",!0===t.groupTitle),e.xp6(1),e.Q6J("ngIf",!t.groupTitle),e.xp6(1),e.Q6J("ngIf",t.submenu.length>0)}}const Q=function(n,a){return{position:"relative","max-height":n,"max-width":a}};let G=(()=>{class n{constructor(t,s,h,f,F){this.document=t,this.renderer=s,this.elementRef=h,this.authService=f,this.router=F,this.level1Menu="",this.level2Menu="",this.level3Menu="",this.headerHeight=60,this.routerObj=null,this.sideMenuShow=!0,this.elementRef.nativeElement.closest("body"),this.routerObj=this.router.events.subscribe(P=>{if(P instanceof g.m2){const W=["admin"],$=P.url.split("?")[0].split("/").slice(1)[0];-1!==W.indexOf($)?(this.level1Menu=P.url.split("/")[2],this.level2Menu=P.url.split("/")[3]):(this.level1Menu=P.url.split("/")[1],this.level2Menu=P.url.split("/")[2]),this.renderer.removeClass(this.document.body,"overlay-open")}})}onGlobalClick(t){this.elementRef.nativeElement.contains(t.target)||this.renderer.removeClass(this.document.body,"overlay-open")}callLevel1Toggle(t,s){this.level1Menu=s===this.level1Menu?"0":s,t.target.classList.contains("toggled")?this.renderer.removeClass(t.target,"toggled"):this.renderer.addClass(t.target,"toggled")}callLevel2Toggle(t,s){this.level2Menu=s===this.level2Menu?"0":s}callLevel3Toggle(t,s){this.level3Menu=s===this.level3Menu?"0":s}ngOnInit(){if(this.authService.currentUserValue){const t=this.authService.currentUserValue.role;this.userFullName=this.authService.currentUserValue.firstName+" "+this.authService.currentUserValue.lastName,this.userImg=this.authService.currentUserValue.img,this.sidebarItems=u.filter(s=>-1!==s.role.indexOf(t)||-1!==s.role.indexOf("All")),this.userType=v.u.Admin}this.initLeftSidebar(),this.bodyTag=this.document.body}ngOnDestroy(){this.routerObj.unsubscribe()}initLeftSidebar(){this.isSideMenuShow()}mouseHover(t){this.document.body.classList.contains("side-closed")&&!this.sideMenuShow&&this.renderer.addClass(this.document.body,"side-closed-hover")}mouseOut(t){const s=this.document.body;s.classList.contains("side-closed")&&this.renderer.removeClass(this.document.body,"side-closed-hover"),s.classList.contains("side-closed-hover")&&this.sideMenuShow&&(this.renderer.removeClass(this.document.body,"side-closed-hover"),this.renderer.addClass(this.document.body,"sideMenuShow"))}logout(){this.authService.logout().subscribe(t=>{t.success||this.router.navigate(["/public/login"])})}isSideMenuShow(){"true"==localStorage.getItem("sideMenuShow")?(this.sideMenuShow=!0,this.renderer.removeClass(this.document.body,"side-closed")):(this.sideMenuShow=!1,this.renderer.addClass(this.document.body,"side-closed")),this.sideMenuShow?this.renderer.addClass(this.document.body,"sideMenuShow"):this.renderer.removeClass(this.document.body,"sideMenuShow")}toggleSidebar(){localStorage.setItem("sideMenuShow",this.sideMenuShow.toString()),this.isSideMenuShow()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d.K0),e.Y36(e.Qsj),e.Y36(e.SBq),e.Y36(m.e),e.Y36(g.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-sidebar"]],hostBindings:function(t,s){1&t&&e.NdJ("resize",function(f){return s.onGlobalClick(f)},!1,e.Jf7)("mousedown",function(f){return s.onGlobalClick(f)},!1,e.evT)},decls:17,vars:6,consts:[["id","leftsidebar",1,"sidebar",3,"mouseenter","mouseleave"],[1,"brand"],[1,"logo"],["src","assets/brand/materialize-logo.png","alt","logo"],[1,"name"],[1,"switch"],["type","checkbox",1,"sideMenuStatus",3,"ngModel","ngModelChange","change"],[1,"slider","round"],[1,"nav"],[1,"list-",3,"ngStyle"],[3,"active","routerLinkActive",4,"ngFor","ngForOf"],[1,"nav-link",3,"click"],["name","log-out",1,"sidebarIcon"],[1,"hide-menu"],[3,"routerLinkActive"],["class","header",4,"ngIf"],["class","nav-link",3,"routerLink","ngClass","click",4,"ngIf"],["class","ml-menu",4,"ngIf"],[1,"header"],[1,"nav-link",3,"routerLink","ngClass","click"],[1,"sidebarIcon",3,"name"],[3,"ngClass",4,"ngIf"],[3,"ngClass"],[1,"ml-menu"],[3,"ngClass","routerLinkActive",4,"ngFor","ngForOf"],[3,"ngClass","routerLinkActive"],[3,"routerLink","ngClass","click"],["class","ml-menu-2",4,"ngIf"],[1,"ml-menu-2"]],template:function(t,s){1&t&&(e.TgZ(0,"aside",0),e.NdJ("mouseenter",function(f){return s.mouseHover(f)})("mouseleave",function(f){return s.mouseOut(f)}),e.TgZ(1,"div",1)(2,"div",2),e._UZ(3,"img",3),e.qZA(),e.TgZ(4,"div",4),e._uU(5," ADMIN "),e.qZA(),e.TgZ(6,"label",5)(7,"input",6),e.NdJ("ngModelChange",function(f){return s.sideMenuShow=f})("change",function(){return s.toggleSidebar()}),e.qZA(),e._UZ(8,"span",7),e.qZA()(),e.TgZ(9,"div",8)(10,"ul",9),e.YNc(11,z,4,6,"li",10),e.TgZ(12,"li")(13,"a",11),e.NdJ("click",function(){return s.logout()}),e._UZ(14,"i-feather",12),e.TgZ(15,"span",13),e._uU(16,"Logout "),e.qZA()()()()()()),2&t&&(e.xp6(7),e.Q6J("ngModel",s.sideMenuShow),e.xp6(3),e.Q6J("ngStyle",e.WLB(3,Q,s.listMaxHeight+"px",s.listMaxWidth+"px")),e.xp6(1),e.Q6J("ngForOf",s.sidebarItems))},dependencies:[d.mk,d.sg,d.O5,d.PC,g.rH,g.Od,p.Wl,p.JJ,p.On,A.u],encapsulation:2}),n})(),j=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-layout-secure"]],decls:3,vars:0,consts:[["id","main-content",1,"right-section","page"]],template:function(t,s){1&t&&(e._UZ(0,"app-sidebar"),e.TgZ(1,"div",0),e._UZ(2,"router-outlet"),e.qZA())},dependencies:[g.lC,G],encapsulation:2}),n})();var V=o(9618);const i=[{path:"",component:j,canActivate:[M.a],children:[{path:"",redirectTo:"/events",pathMatch:"full"},{path:"events",loadChildren:()=>Promise.all([o.e("default-src_app_shared_directives_scroll-to-invalid-control_directive_ts-node_modules_angular-4b5ed2"),o.e("src_app_secure_events_events_module_ts")]).then(o.bind(o,5459)).then(n=>n.EventsModule)}]},{path:"",component:j,canActivate:[M.a],children:[{path:"",redirectTo:"/calendarIcons",pathMatch:"full"},{path:"calendarIcons",loadChildren:()=>Promise.all([o.e("default-src_app_shared_directives_scroll-to-invalid-control_directive_ts-node_modules_angular-4b5ed2"),o.e("src_app_secure_calendarIcons_calendarIcons_module_ts")]).then(o.bind(o,6344)).then(n=>n.CalendarIconsModule)}]},{path:"public",component:J,children:[{path:"",loadChildren:()=>Promise.resolve().then(o.bind(o,8779)).then(n=>n.PublicModule)}]},{path:"**",component:V.J}];let S=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[g.Bz.forRoot(i),g.Bz]}),n})();var l=o(8423);let L=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-page-loader"]],decls:2,vars:1,consts:[["bdColor","rgb(63,69,95)","size","medium","color","#0af0d5","type","ball-scale-pulse",3,"fullScreen"],[2,"color","white"]],template:function(t,s){1&t&&(e.TgZ(0,"ngx-spinner",0),e._UZ(1,"p",1),e.qZA()),2&t&&e.Q6J("fullScreen",!0)},dependencies:[l.Ro],encapsulation:2}),n})(),ee=(()=>{class n{constructor(t,s){this._router=t,this.spinner=s,this._router.events.subscribe(h=>{h instanceof g.OD&&(this.spinner.show(),this.currentUrl=h.url.substring(h.url.lastIndexOf("/")+1)),h instanceof g.m2&&this.spinner.hide(),window.scrollTo(0,0)})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.F0),e.Y36(l.t2))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-root"]],decls:2,vars:0,template:function(t,s){1&t&&e._UZ(0,"app-page-loader")(1,"router-outlet")},dependencies:[g.lC,L],encapsulation:2}),n})();var X=o(9646),H=o(2843),te=o(5577);const ne=[{id:1,img:"assets/images/user/admin.jpg",username:"admin",password:"Swaminarayan19",firstName:"",lastName:"",role:v.u.Admin,token:"admin-token"}];let oe=(()=>{class n{intercept(t,s){const{url:h,method:f,body:_}=t;return(0,X.of)(null).pipe((0,te.z)(function P(){return!0===(h.endsWith("/auth/basic")&&"POST"===f)?function W(){const{username:N,password:ce}=_,E=ne.find(q=>q.username===N&&q.password===ce);return E?function k(N){return(0,X.of)(new r.Zn({status:200,body:N}))}({id:E.id,img:E.img,username:E.username,firstName:E.firstName,lastName:E.lastName,role:E.role,token:E.token}):function $(N){return(0,H._)({error:{message:N}})}("Username or password is incorrect")}():s.handle(t)}))}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})(),re={provide:r.TP,useClass:oe,multi:!0};var se=o(262);let ie=(()=>{class n{constructor(t){this.authService=t}intercept(t,s){return s.handle(t).pipe((0,se.K)(h=>(401===h.status&&(this.authService.logout(),location.reload()),(0,H._)(h.error.message||h.statusText))))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(m.e))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})(),ae=(()=>{class n{constructor(t){this.authService=t}intercept(t,s){let h=this.authService.currentUserValue;return h&&h.token&&(t=t.clone({setHeaders:{Authorization:`Bearer ${h.token}`}})),s.handle(t)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(m.e))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})(),le=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n,bootstrap:[ee]}),n.\u0275inj=e.cJS({providers:[{provide:d.S$,useClass:d.Do},{provide:r.TP,useClass:ae,multi:!0},{provide:r.TP,useClass:ie,multi:!0},re],imports:[c.b2,T.PW,S,x,I.PublicModule,y.m]}),n})();o(2340).N.production&&(0,e.G48)(),c.q6().bootstrapModule(le).catch(n=>console.error(n))}},U=>{U.O(0,["vendor"],()=>U(U.s=2541)),U.O()}]);