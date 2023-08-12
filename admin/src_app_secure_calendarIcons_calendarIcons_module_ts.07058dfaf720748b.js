"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([["src_app_secure_calendarIcons_calendarIcons_module_ts"],{1275:(P,I,c)=>{c.r(I),c.d(I,{CalendarIconsModule:()=>O});var d=c(6814),v=c(9862),i=c(95),_=c(2575),l=c(1654),m=c(553),n=c(9468);const u=`${m.N.CONTEXT_PATH}/calendaricons`;let h=(()=>{var e;class o{constructor(a){this.http=a}getAll(){return this.http.get(u)}get(a){return this.http.get(`${u}/${a}`)}add(a){return this.http.post(u,a)}update(a,r){return this.http.patch(`${u}/${a}`,r)}}return(e=o).\u0275fac=function(a){return new(a||e)(n.LFG(v.eN))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac}),o})();var Z=c(5597);let A=(()=>{var e;class o{transform(a,r,s){return s?(a||[]).filter(p=>r.split(",").some(C=>p.hasOwnProperty(C)&&new RegExp(s,"gi").test(p[C]))):a}}return(e=o).\u0275fac=function(a){return new(a||e)},e.\u0275pipe=n.Yjl({name:"search",type:e,pure:!0}),o})();const F=function(){return["fas","check-circle"]};function T(e,o){1&e&&(n.TgZ(0,"span",24),n._UZ(1,"fa-icon",11),n.qZA()),2&e&&(n.xp6(1),n.Q6J("icon",n.DdM(1,F)))}const b=function(){return["fas","times-circle"]};function x(e,o){1&e&&(n.TgZ(0,"span",25),n._UZ(1,"fa-icon",11),n.qZA()),2&e&&(n.xp6(1),n.Q6J("icon",n.DdM(1,b)))}function U(e,o){if(1&e&&(n.TgZ(0,"div",16)(1,"div",14)(2,"div",17),n._uU(3),n.qZA()(),n.TgZ(4,"div",14),n._UZ(5,"img",18),n.qZA(),n.TgZ(6,"div",19),n.YNc(7,T,2,2,"span",20),n.YNc(8,x,2,2,"span",21),n.qZA(),n.TgZ(9,"div",22)(10,"button",23),n._uU(11,"Edit"),n.qZA()()()),2&e){const t=o.$implicit,a=n.oxw(2);n.xp6(3),n.Oqu(t.name),n.xp6(2),n.hYB("src","",a.LOCAL_PATH,"",t.imageurl,"",n.LSH),n.xp6(2),n.Q6J("ngIf",!t.unpublished),n.xp6(1),n.Q6J("ngIf",t.unpublished),n.xp6(2),n.MGl("routerLink","edit/",t.filename,"")}}const L=function(){return["fas","search"]};function y(e,o){if(1&e){const t=n.EpF();n.TgZ(0,"div",2)(1,"div",3)(2,"header",4)(3,"div",5)(4,"div",6)(5,"button",7),n._uU(6,"Add"),n.qZA()(),n.TgZ(7,"div",8)(8,"div",9)(9,"input",10),n.NdJ("ngModelChange",function(r){n.CHM(t);const s=n.oxw();return n.KtG(s.query=r)}),n.qZA(),n._UZ(10,"fa-icon",11),n.qZA()()()()(),n.TgZ(11,"div",12)(12,"div",13)(13,"div",14),n._uU(14," Keyword "),n.qZA(),n.TgZ(15,"div",14),n._uU(16," Icon "),n.qZA(),n.TgZ(17,"div",14),n._uU(18," Published "),n.qZA(),n._UZ(19,"div",14),n.qZA(),n.YNc(20,U,12,6,"div",15),n.ALo(21,"search"),n.qZA()()}if(2&e){const t=n.oxw();n.xp6(9),n.Q6J("ngModel",t.query),n.xp6(1),n.Q6J("icon",n.DdM(7,L)),n.xp6(10),n.Q6J("ngForOf",n.Dn7(21,3,t.calendarIcons,"name,description,startDate",t.query))}}let q=(()=>{var e;class o{constructor(a){this.calendarIconsService=a,this.LOCAL_PATH=m.N.LOCAL_PATH}ngOnInit(){this.calendarIconsService.getAll().subscribe(a=>{this.calendarIcons=a})}}return(e=o).\u0275fac=function(a){return new(a||e)(n.Y36(h))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-calendarIcons-list"]],decls:2,vars:1,consts:[["id","main-content2"],["class","calendarIcons",4,"ngIf"],[1,"calendarIcons"],[1,"header-nav"],["id","header-nav"],[1,"row","add-wrapper"],[1,"col-1","btn-add-container"],["routerLink","add",1,"btn","btn-primary","btn-add"],[1,"col-11","search-container"],[1,"header-search-wrapper"],["placeholder","search . . .",1,"header-search-input",3,"ngModel","ngModelChange"],[3,"icon"],[1,"calendarIcons-list"],[1,"row","row-calendarIcon-header"],[1,"col-3"],["class","row row-calendarIcon",4,"ngFor","ngForOf"],[1,"row","row-calendarIcon"],[1,"calendarIcon-name"],[1,"thumb",3,"src"],[1,"col-3","read-only","published-status"],["class","published",4,"ngIf"],["class","unpublished",4,"ngIf"],[1,"col-3","actions"],[1,"btn","btn-primary",3,"routerLink"],[1,"published"],[1,"unpublished"]],template:function(a,r){1&a&&(n.TgZ(0,"div",0),n.YNc(1,y,22,8,"div",1),n.qZA()),2&a&&(n.xp6(1),n.Q6J("ngIf",r.calendarIcons))},dependencies:[d.sg,d.O5,l.rH,i.Fj,i.JJ,i.On,Z.BN,A],encapsulation:2}),o})();var J=c(1051),S=c(1935);function w(e,o){1&e&&(n.TgZ(0,"span"),n._uU(1,"Edit "),n.qZA())}function M(e,o){1&e&&(n.TgZ(0,"span"),n._uU(1,"Add "),n.qZA())}function N(e,o){if(1&e){const t=n.EpF();n.TgZ(0,"div",2)(1,"h5",3),n.YNc(2,w,2,0,"span",4),n.YNc(3,M,2,0,"span",4),n.TgZ(4,"span",5),n._uU(5,"Calendar Icon"),n.qZA()(),n.TgZ(6,"div",6)(7,"form",7),n.NdJ("ngSubmit",function(){n.CHM(t);const r=n.oxw();return n.KtG(r.calendarIconFormSubmit())}),n.TgZ(8,"div",8)(9,"div",9)(10,"div",8)(11,"div",10)(12,"label"),n._uU(13,"Keyword"),n.qZA(),n._UZ(14,"input",11),n.TgZ(15,"div",12),n._uU(16,"Keyword is required"),n.qZA()()(),n.TgZ(17,"div",8)(18,"div",13)(19,"div",10)(20,"label"),n._uU(21,"Published"),n.qZA(),n.TgZ(22,"div",14),n._UZ(23,"input",15),n.qZA()()()()(),n.TgZ(24,"div",9)(25,"div",8)(26,"div",16)(27,"label"),n._uU(28,"Image URL"),n.qZA(),n._UZ(29,"input",17),n.TgZ(30,"div",18)(31,"label",19)(32,"app-file-upload",20),n.NdJ("uploadedFilename",function(r){n.CHM(t);const s=n.oxw();return n.KtG(s.uploadedFilename(r))}),n.qZA()()(),n.TgZ(33,"div",12),n._uU(34,"Image URL is required"),n.qZA()()()()(),n.TgZ(35,"div",21)(36,"button",22),n.NdJ("click",function(){n.CHM(t);const r=n.oxw();return n.KtG(r.cancelCalendarIcon())}),n._uU(37,"Cancel"),n.qZA(),n.TgZ(38,"button",23),n._uU(39,"Save"),n.qZA()()()()()}if(2&e){const t=n.oxw();n.xp6(2),n.Q6J("ngIf",t.isEdit),n.xp6(1),n.Q6J("ngIf",!t.isEdit),n.xp6(4),n.Q6J("formGroup",t.calendarIconForm),n.xp6(25),n.Q6J("existingFileUrl",t.existingFileUrl)}}let f=(()=>{var e;class o{constructor(a,r,s,p){this.router=a,this.activatedRoute=r,this.formBuilder=s,this.calendarIconsService=p,this.changeEndDate=!1,this.LOCAL_PATH=m.N.LOCAL_PATH,this.getId=this.activatedRoute.snapshot.paramMap.get("id"),this.urlSegments=this.activatedRoute.snapshot.url,this.hasEdit()}ngOnInit(){this.buildForm(),this.setAddEditValidators(),this.formPreFill()}formPreFill(){this.calendarIconsService.getAll().subscribe(a=>{this.calendarIcons=a,this.isEdit?(this.calendarIcon=this.calendarIcons.find(r=>r.filename==this.getId),this.setData()):this.calendarIcon={}})}buildForm(){this.calendarIconForm=this.formBuilder.group({name:["",i.kI.required],imageurl:[null],unpublished:[!0]})}setAddEditValidators(){const a=this.calendarIconForm.get("imageurl");a.setValidators(this.isEdit?null:[i.kI.required]),a.updateValueAndValidity()}calendarIconFormSubmit(){this.calendarIconForm.markAllAsTouched(),this.calendarIconForm.valid&&this.saveCalendarIcon()}get calendarIconFormControls(){return this.calendarIconForm.controls}hasEdit(){this.urlSegments.forEach(a=>{if("edit"==a.path)return this.isEdit=!0})}setData(){this.calendarIconForm.get("name").setValue(this.calendarIcon.name),this.calendarIconForm.get("imageurl").setValue(this.calendarIcon.imageurl),this.calendarIconForm.get("unpublished").setValue(!this.calendarIcon.unpublished),this.existingFileUrl=this.LOCAL_PATH+this.calendarIcon.imageurl}getData(){this.calendarIcon.name=this.calendarIconForm.get("name").value,this.calendarIcon.unpublished=!this.calendarIconForm.get("unpublished").value}saveCalendarIcon(){this.getData(),this.isEdit?this.calendarIconsService.update(this.calendarIcon.filename,this.calendarIcon).subscribe({next:()=>{this.router.navigate(["calendarIcons"])},error:()=>{this.router.navigate(["calendarIcons"])},complete:()=>{this.router.navigate(["calendarIcons"])}}):this.calendarIconsService.add(this.calendarIcon).subscribe({next:()=>{this.router.navigate(["calendarIcons"])},error:()=>{this.router.navigate(["calendarIcons"])},complete:()=>{this.router.navigate(["calendarIcons"])}})}cancelCalendarIcon(){this.router.navigate(["calendarIcons"])}uploadedFilename(a){this.calendarIcon.imageurl="/images/events/"+a,this.calendarIconForm.get("imageurl").setValue(this.calendarIcon.imageurl)}}return(e=o).\u0275fac=function(a){return new(a||e)(n.Y36(l.F0),n.Y36(l.gz),n.Y36(i.qu),n.Y36(h))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-calendarIcons-form"]],decls:2,vars:1,consts:[["id","main-content2"],["class","card calendarIcon",4,"ngIf"],[1,"card","calendarIcon"],[1,"card-header"],[4,"ngIf"],[1,"name"],[1,"card-body"],["ScrollToInvalidControl","",3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-6"],[1,"form-control-group"],["type","text","formControlName","name",1,"form-control"],[1,"invalid-feedback"],[1,"col-lg-2"],[1,"form-check"],["type","checkbox","formControlName","unpublished","id","unpublished",1,"form-check-input","custom-control-input","unpublished"],[1,"form-control-group","image-url-fcg"],["type","text","formControlName","imageurl",1,"form-control","hidden"],[1,"input-group","file-upload"],[1,"upload-button"],[3,"existingFileUrl","uploadedFilename"],[1,"action-buttons"],[1,"btn","btn-default",3,"click"],["type","submit",1,"btn","btn-primary"]],template:function(a,r){1&a&&(n.TgZ(0,"div",0),n.YNc(1,N,40,4,"div",1),n.qZA()),2&a&&(n.xp6(1),n.Q6J("ngIf",r.calendarIcon))},dependencies:[d.O5,i._Y,i.Fj,i.Wl,i.JJ,i.JL,i.sg,i.u,J.s,S.Y],encapsulation:2}),o})();var g=c(4286);const E=[{path:"",component:q,canActivate:[g.a]},{path:"add",component:f,canActivate:[g.a]},{path:"edit/:id",component:f,canActivate:[g.a]}];let Y=(()=>{var e;class o{}return(e=o).\u0275fac=function(a){return new(a||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[l.Bz.forChild(E),l.Bz]}),o})(),O=(()=>{var e;class o{}return(e=o).\u0275fac=function(a){return new(a||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({providers:[h],imports:[d.ez,Y,v.JF,i.u5,i.UX,_.m]}),o})()}}]);