"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([["src_app_secure_calendarIcons_calendarIcons_module_ts"],{1275:(Y,g,r)=>{r.r(g),r.d(g,{CalendarIconsModule:()=>O});var d=r(6814),I=r(9862),o=r(95),_=r(2575),l=r(1654),p=r(553),n=r(5678);const u=`${p.N.CONTEXT_PATH}/calendaricons`;let h=(()=>{class e{constructor(t){this.http=t}getAll(){return this.http.get(u)}get(t){return this.http.get(`${u}/${t}`)}add(t){return this.http.post(u,t)}update(t,a){return this.http.patch(`${u}/${t}`,a)}static#n=this.\u0275fac=function(a){return new(a||e)(n.LFG(I.eN))};static#t=this.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac})}return e})();var Z=r(5597);let C=(()=>{class e{transform(t,a,i){return i?(t||[]).filter(c=>a.split(",").some(v=>c.hasOwnProperty(v)&&new RegExp(i,"gi").test(c[v]))):t}static#n=this.\u0275fac=function(a){return new(a||e)};static#t=this.\u0275pipe=n.Yjl({name:"search",type:e,pure:!0})}return e})();const A=()=>["fas","check-circle"];function F(e,s){1&e&&(n.TgZ(0,"span",24),n._UZ(1,"fa-icon",11),n.qZA()),2&e&&(n.xp6(1),n.Q6J("icon",n.DdM(1,A)))}const T=()=>["fas","times-circle"];function b(e,s){1&e&&(n.TgZ(0,"span",25),n._UZ(1,"fa-icon",11),n.qZA()),2&e&&(n.xp6(1),n.Q6J("icon",n.DdM(1,T)))}function x(e,s){if(1&e&&(n.TgZ(0,"div",16)(1,"div",14)(2,"div",17),n._uU(3),n.qZA()(),n.TgZ(4,"div",14),n._UZ(5,"img",18),n.qZA(),n.TgZ(6,"div",19),n.YNc(7,F,2,2,"span",20)(8,b,2,2,"span",21),n.qZA(),n.TgZ(9,"div",22)(10,"button",23),n._uU(11,"Edit"),n.qZA()()()),2&e){const t=s.$implicit,a=n.oxw(2);n.xp6(3),n.Oqu(t.name),n.xp6(2),n.hYB("src","",a.LOCAL_PATH,"",t.imageurl,"",n.LSH),n.xp6(2),n.Q6J("ngIf",!t.unpublished),n.xp6(1),n.Q6J("ngIf",t.unpublished),n.xp6(2),n.MGl("routerLink","edit/",t.filename,"")}}const U=()=>["fas","search"];function y(e,s){if(1&e){const t=n.EpF();n.TgZ(0,"div",2)(1,"div",3)(2,"header",4)(3,"div",5)(4,"div",6)(5,"button",7),n._uU(6,"Add"),n.qZA()(),n.TgZ(7,"div",8)(8,"div",9)(9,"input",10),n.NdJ("ngModelChange",function(i){n.CHM(t);const c=n.oxw();return n.KtG(c.query=i)}),n.qZA(),n._UZ(10,"fa-icon",11),n.qZA()()()()(),n.TgZ(11,"div",12)(12,"div",13)(13,"div",14),n._uU(14," Keyword "),n.qZA(),n.TgZ(15,"div",14),n._uU(16," Icon "),n.qZA(),n.TgZ(17,"div",14),n._uU(18," Published "),n.qZA(),n._UZ(19,"div",14),n.qZA(),n.YNc(20,x,12,6,"div",15),n.ALo(21,"search"),n.qZA()()}if(2&e){const t=n.oxw();n.xp6(9),n.Q6J("ngModel",t.query),n.xp6(1),n.Q6J("icon",n.DdM(7,U)),n.xp6(10),n.Q6J("ngForOf",n.Dn7(21,3,t.calendarIcons,"name,description,startDate",t.query))}}let L=(()=>{class e{constructor(t){this.calendarIconsService=t,this.LOCAL_PATH=p.N.LOCAL_PATH}ngOnInit(){this.calendarIconsService.getAll().subscribe(t=>{this.calendarIcons=t})}static#n=this.\u0275fac=function(a){return new(a||e)(n.Y36(h))};static#t=this.\u0275cmp=n.Xpm({type:e,selectors:[["app-calendarIcons-list"]],decls:2,vars:1,consts:[["id","main-content2"],["class","calendarIcons",4,"ngIf"],[1,"calendarIcons"],[1,"header-nav"],["id","header-nav"],[1,"row","add-wrapper"],[1,"col-1","btn-add-container"],["routerLink","add",1,"btn","btn-primary","btn-add"],[1,"col-11","search-container"],[1,"header-search-wrapper"],["placeholder","search . . .",1,"header-search-input",3,"ngModel","ngModelChange"],[3,"icon"],[1,"calendarIcons-list"],[1,"row","row-calendarIcon-header"],[1,"col-3"],["class","row row-calendarIcon",4,"ngFor","ngForOf"],[1,"row","row-calendarIcon"],[1,"calendarIcon-name"],[1,"thumb",3,"src"],[1,"col-3","read-only","published-status"],["class","published",4,"ngIf"],["class","unpublished",4,"ngIf"],[1,"col-3","actions"],[1,"btn","btn-primary",3,"routerLink"],[1,"published"],[1,"unpublished"]],template:function(a,i){1&a&&(n.TgZ(0,"div",0),n.YNc(1,y,22,8,"div",1),n.qZA()),2&a&&(n.xp6(1),n.Q6J("ngIf",i.calendarIcons))},dependencies:[d.sg,d.O5,l.rH,o.Fj,o.JJ,o.On,Z.BN,C],encapsulation:2})}return e})();var q=r(1051),J=r(1935);function w(e,s){1&e&&(n.TgZ(0,"span"),n._uU(1,"Edit "),n.qZA())}function S(e,s){1&e&&(n.TgZ(0,"span"),n._uU(1,"Add "),n.qZA())}function E(e,s){if(1&e){const t=n.EpF();n.TgZ(0,"div",2)(1,"h5",3),n.YNc(2,w,2,0,"span",4)(3,S,2,0,"span",4),n.TgZ(4,"span",5),n._uU(5,"Calendar Icon"),n.qZA()(),n.TgZ(6,"div",6)(7,"form",7),n.NdJ("ngSubmit",function(){n.CHM(t);const i=n.oxw();return n.KtG(i.calendarIconFormSubmit())}),n.TgZ(8,"div",8)(9,"div",9)(10,"div",8)(11,"div",10)(12,"label"),n._uU(13,"Keyword"),n.qZA(),n._UZ(14,"input",11),n.TgZ(15,"div",12),n._uU(16,"Keyword is required"),n.qZA()()(),n.TgZ(17,"div",8)(18,"div",13)(19,"div",10)(20,"label"),n._uU(21,"Published"),n.qZA(),n.TgZ(22,"div",14),n._UZ(23,"input",15),n.qZA()()()()(),n.TgZ(24,"div",9)(25,"div",8)(26,"div",16)(27,"label"),n._uU(28,"Image URL"),n.qZA(),n._UZ(29,"input",17),n.TgZ(30,"div",18)(31,"label",19)(32,"app-file-upload",20),n.NdJ("uploadedFilename",function(i){n.CHM(t);const c=n.oxw();return n.KtG(c.uploadedFilename(i))}),n.qZA()()(),n.TgZ(33,"div",12),n._uU(34,"Image URL is required"),n.qZA()()()()(),n.TgZ(35,"div",21)(36,"button",22),n.NdJ("click",function(){n.CHM(t);const i=n.oxw();return n.KtG(i.cancelCalendarIcon())}),n._uU(37,"Cancel"),n.qZA(),n.TgZ(38,"button",23),n._uU(39,"Save"),n.qZA()()()()()}if(2&e){const t=n.oxw();n.xp6(2),n.Q6J("ngIf",t.isEdit),n.xp6(1),n.Q6J("ngIf",!t.isEdit),n.xp6(4),n.Q6J("formGroup",t.calendarIconForm),n.xp6(25),n.Q6J("existingFileUrl",t.existingFileUrl)("filesource",t.filesource)}}let f=(()=>{class e{constructor(t,a,i,c){this.router=t,this.activatedRoute=a,this.formBuilder=i,this.calendarIconsService=c,this.changeEndDate=!1,this.LOCAL_PATH=p.N.LOCAL_PATH,this.getId=this.activatedRoute.snapshot.paramMap.get("id"),this.urlSegments=this.activatedRoute.snapshot.url,this.hasEdit()}ngOnInit(){this.buildForm(),this.setAddEditValidators(),this.formPreFill(),this.filesource="calendarIcons"}formPreFill(){this.calendarIconsService.getAll().subscribe(t=>{this.calendarIcons=t,this.isEdit?(this.calendarIcon=this.calendarIcons.find(a=>a.filename==this.getId),this.setData()):this.calendarIcon={}})}buildForm(){this.calendarIconForm=this.formBuilder.group({name:["",o.kI.required],imageurl:[null],unpublished:[!0]})}setAddEditValidators(){const t=this.calendarIconForm.get("imageurl");t.setValidators(this.isEdit?null:[o.kI.required]),t.updateValueAndValidity()}calendarIconFormSubmit(){this.calendarIconForm.markAllAsTouched(),this.calendarIconForm.valid&&this.saveCalendarIcon()}get calendarIconFormControls(){return this.calendarIconForm.controls}hasEdit(){this.urlSegments.forEach(t=>{if("edit"==t.path)return this.isEdit=!0})}setData(){this.calendarIconForm.get("name").setValue(this.calendarIcon.name),this.calendarIconForm.get("imageurl").setValue(this.calendarIcon.imageurl),this.calendarIconForm.get("unpublished").setValue(!this.calendarIcon.unpublished),this.existingFileUrl=this.LOCAL_PATH+this.calendarIcon.imageurl}getData(){this.calendarIcon.name=this.calendarIconForm.get("name").value,this.calendarIcon.startDate="1/1/1970",this.calendarIcon.endDate="1/1/1970",this.calendarIcon.unpublished=!this.calendarIconForm.get("unpublished").value}saveCalendarIcon(){this.getData(),this.isEdit?this.calendarIconsService.update(this.calendarIcon.filename,this.calendarIcon).subscribe({next:()=>{this.router.navigate(["calendarIcons"])},error:()=>{this.router.navigate(["calendarIcons"])},complete:()=>{this.router.navigate(["calendarIcons"])}}):this.calendarIconsService.add(this.calendarIcon).subscribe({next:()=>{this.router.navigate(["calendarIcons"])},error:()=>{this.router.navigate(["calendarIcons"])},complete:()=>{this.router.navigate(["calendarIcons"])}})}cancelCalendarIcon(){this.router.navigate(["calendarIcons"])}uploadedFilename(t){this.calendarIcon.imageurl="/images/calendaricons/"+t,this.calendarIconForm.get("imageurl").setValue(this.calendarIcon.imageurl)}static#n=this.\u0275fac=function(a){return new(a||e)(n.Y36(l.F0),n.Y36(l.gz),n.Y36(o.qu),n.Y36(h))};static#t=this.\u0275cmp=n.Xpm({type:e,selectors:[["app-calendarIcons-form"]],decls:2,vars:1,consts:[["id","main-content2"],["class","card calendarIcon",4,"ngIf"],[1,"card","calendarIcon"],[1,"card-header"],[4,"ngIf"],[1,"name"],[1,"card-body"],["ScrollToInvalidControl","",3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-6"],[1,"form-control-group"],["type","text","formControlName","name",1,"form-control"],[1,"invalid-feedback"],[1,"col-lg-2"],[1,"form-check"],["type","checkbox","formControlName","unpublished","id","unpublished",1,"form-check-input","custom-control-input","unpublished"],[1,"form-control-group","image-url-fcg"],["type","text","formControlName","imageurl",1,"form-control","hidden"],[1,"input-group","file-upload"],[1,"upload-button"],[3,"existingFileUrl","filesource","uploadedFilename"],[1,"action-buttons"],[1,"btn","btn-default",3,"click"],["type","submit",1,"btn","btn-primary"]],template:function(a,i){1&a&&(n.TgZ(0,"div",0),n.YNc(1,E,40,5,"div",1),n.qZA()),2&a&&(n.xp6(1),n.Q6J("ngIf",i.calendarIcon))},dependencies:[d.O5,o._Y,o.Fj,o.Wl,o.JJ,o.JL,o.sg,o.u,q.s,J.Y],encapsulation:2})}return e})();var m=r(4286);const N=[{path:"",component:L,canActivate:[m.a]},{path:"add",component:f,canActivate:[m.a]},{path:"edit/:id",component:f,canActivate:[m.a]}];let M=(()=>{class e{static#n=this.\u0275fac=function(a){return new(a||e)};static#t=this.\u0275mod=n.oAB({type:e});static#e=this.\u0275inj=n.cJS({imports:[l.Bz.forChild(N),l.Bz]})}return e})(),O=(()=>{class e{static#n=this.\u0275fac=function(a){return new(a||e)};static#t=this.\u0275mod=n.oAB({type:e});static#e=this.\u0275inj=n.cJS({providers:[h],imports:[d.ez,M,I.JF,o.u5,o.UX,_.m]})}return e})()}}]);