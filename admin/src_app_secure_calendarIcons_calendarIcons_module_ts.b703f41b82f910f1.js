"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([["src_app_secure_calendarIcons_calendarIcons_module_ts"],{2087:(w,I,o)=>{o.r(I),o.d(I,{CalendarIconsModule:()=>X});var d=o(177),f=o(1626),r=o(4341),F=o(8017),l=o(9729),m=o(5312),n=o(3953);const u=`${m.c.CONTEXT_PATH}/calendaricons`;let h=(()=>{class e{constructor(t){this.http=t}getAll(){return this.http.get(u)}get(t){return this.http.get(`${u}/${t}`)}add(t){return this.http.post(u,t)}update(t,a){return this.http.patch(`${u}/${t}`,a)}static#n=this.\u0275fac=function(a){return new(a||e)(n.KVO(f.Qq))};static#t=this.\u0275prov=n.jDH({token:e,factory:e.\u0275fac})}return e})();var C=o(60);let b=(()=>{class e{transform(t,a,i){return i?(t||[]).filter(s=>a.split(",").some(g=>s.hasOwnProperty(g)&&new RegExp(i,"gi").test(s[g]))):t}static#n=this.\u0275fac=function(a){return new(a||e)};static#t=this.\u0275pipe=n.EJ8({name:"search",type:e,pure:!0})}return e})();const _=()=>["fas","search"],j=()=>["fas","check-circle"],E=()=>["fas","times-circle"];function k(e,c){1&e&&(n.j41(0,"span",24),n.nrm(1,"fa-icon",11),n.k0s()),2&e&&(n.R7$(),n.Y8G("icon",n.lJ4(1,j)))}function y(e,c){1&e&&(n.j41(0,"span",25),n.nrm(1,"fa-icon",11),n.k0s()),2&e&&(n.R7$(),n.Y8G("icon",n.lJ4(1,E)))}function R(e,c){if(1&e&&(n.j41(0,"div",16)(1,"div",14)(2,"div",17),n.EFF(3),n.k0s()(),n.j41(4,"div",14),n.nrm(5,"img",18),n.k0s(),n.j41(6,"div",19),n.DNE(7,k,2,2,"span",20)(8,y,2,2,"span",21),n.k0s(),n.j41(9,"div",22)(10,"button",23),n.EFF(11,"Edit"),n.k0s()()()),2&e){const t=c.$implicit,a=n.XpG(2);n.R7$(3),n.JRh(t.name),n.R7$(2),n.FCK("src","",a.LOCAL_PATH,"",t.imageurl,"",n.B4B),n.R7$(2),n.Y8G("ngIf",!t.unpublished),n.R7$(),n.Y8G("ngIf",t.unpublished),n.R7$(2),n.Mz_("routerLink","edit/",t.filename,"")}}function T(e,c){if(1&e){const t=n.RV6();n.j41(0,"div",2)(1,"div",3)(2,"header",4)(3,"div",5)(4,"div",6)(5,"button",7),n.EFF(6,"Add"),n.k0s()(),n.j41(7,"div",8)(8,"div",9)(9,"input",10),n.mxI("ngModelChange",function(i){n.eBV(t);const s=n.XpG();return n.DH7(s.query,i)||(s.query=i),n.Njj(i)}),n.k0s(),n.nrm(10,"fa-icon",11),n.k0s()()()()(),n.j41(11,"div",12)(12,"div",13)(13,"div",14),n.EFF(14," Keyword "),n.k0s(),n.j41(15,"div",14),n.EFF(16," Icon "),n.k0s(),n.j41(17,"div",14),n.EFF(18," Published "),n.k0s(),n.nrm(19,"div",14),n.k0s(),n.DNE(20,R,12,8,"div",15),n.nI1(21,"search"),n.k0s()()}if(2&e){const t=n.XpG();n.R7$(9),n.R50("ngModel",t.query),n.R7$(),n.Y8G("icon",n.lJ4(7,_)),n.R7$(10),n.Y8G("ngForOf",n.brH(21,3,t.calendarIcons,"name,description,startDate",t.query))}}let A=(()=>{class e{constructor(t){this.calendarIconsService=t,this.LOCAL_PATH=m.c.LOCAL_PATH}ngOnInit(){this.calendarIconsService.getAll().subscribe(t=>{this.calendarIcons=t})}static#n=this.\u0275fac=function(a){return new(a||e)(n.rXU(h))};static#t=this.\u0275cmp=n.VBU({type:e,selectors:[["app-calendarIcons-list"]],decls:2,vars:1,consts:[["id","main-content2"],["class","calendarIcons",4,"ngIf"],[1,"calendarIcons"],[1,"header-nav"],["id","header-nav"],[1,"row","add-wrapper"],[1,"col-1","btn-add-container"],["routerLink","add",1,"btn","btn-primary","btn-add"],[1,"col-11","search-container"],[1,"header-search-wrapper"],["placeholder","search . . .",1,"header-search-input",3,"ngModelChange","ngModel"],[3,"icon"],[1,"calendarIcons-list"],[1,"row","row-calendarIcon-header"],[1,"col-3"],["class","row row-calendarIcon",4,"ngFor","ngForOf"],[1,"row","row-calendarIcon"],[1,"calendarIcon-name"],[1,"thumb",3,"src"],[1,"col-3","read-only","published-status"],["class","published",4,"ngIf"],["class","unpublished",4,"ngIf"],[1,"col-3","actions"],[1,"btn","btn-primary",3,"routerLink"],[1,"published"],[1,"unpublished"]],template:function(a,i){1&a&&(n.j41(0,"div",0),n.DNE(1,T,22,8,"div",1),n.k0s()),2&a&&(n.R7$(),n.Y8G("ngIf",i.calendarIcons))},dependencies:[d.Sq,d.bT,l.Wk,r.me,r.BC,r.vS,C.aY,b],encapsulation:2})}return e})();var x=o(4361),G=o(7173);function L(e,c){1&e&&(n.j41(0,"span"),n.EFF(1,"Edit "),n.k0s())}function $(e,c){1&e&&(n.j41(0,"span"),n.EFF(1,"Add "),n.k0s())}function V(e,c){if(1&e){const t=n.RV6();n.j41(0,"div",2)(1,"h5",3),n.DNE(2,L,2,0,"span",4)(3,$,2,0,"span",4),n.j41(4,"span",5),n.EFF(5,"Calendar Icon"),n.k0s()(),n.j41(6,"div",6)(7,"form",7),n.bIt("ngSubmit",function(){n.eBV(t);const i=n.XpG();return n.Njj(i.calendarIconFormSubmit())}),n.j41(8,"div",8)(9,"div",9)(10,"div",8)(11,"div",10)(12,"label"),n.EFF(13,"Keyword"),n.k0s(),n.nrm(14,"input",11),n.j41(15,"div",12),n.EFF(16,"Keyword is required"),n.k0s()()(),n.j41(17,"div",8)(18,"div",13)(19,"div",10)(20,"label"),n.EFF(21,"Published"),n.k0s(),n.j41(22,"div",14),n.nrm(23,"input",15),n.k0s()()()()(),n.j41(24,"div",9)(25,"div",8)(26,"div",16)(27,"label"),n.EFF(28,"Image URL"),n.k0s(),n.nrm(29,"input",17),n.j41(30,"div",18)(31,"label",19)(32,"app-file-upload",20),n.bIt("uploadedFilename",function(i){n.eBV(t);const s=n.XpG();return n.Njj(s.uploadedFilename(i))}),n.k0s()()(),n.j41(33,"div",12),n.EFF(34,"Image URL is required"),n.k0s()()()()(),n.j41(35,"div",21)(36,"button",22),n.bIt("click",function(){n.eBV(t);const i=n.XpG();return n.Njj(i.cancelCalendarIcon())}),n.EFF(37,"Cancel"),n.k0s(),n.j41(38,"button",23),n.EFF(39,"Save"),n.k0s()()()()()}if(2&e){const t=n.XpG();n.R7$(2),n.Y8G("ngIf",t.isEdit),n.R7$(),n.Y8G("ngIf",!t.isEdit),n.R7$(4),n.Y8G("formGroup",t.calendarIconForm),n.R7$(25),n.Y8G("existingFileUrl",t.existingFileUrl)("filesource",t.filesource)}}let v=(()=>{class e{constructor(t,a,i,s){this.router=t,this.activatedRoute=a,this.formBuilder=i,this.calendarIconsService=s,this.changeEndDate=!1,this.LOCAL_PATH=m.c.LOCAL_PATH,this.getId=this.activatedRoute.snapshot.paramMap.get("id"),this.urlSegments=this.activatedRoute.snapshot.url,this.hasEdit()}ngOnInit(){this.buildForm(),this.setAddEditValidators(),this.formPreFill(),this.filesource="calendarIcons"}formPreFill(){this.calendarIconsService.getAll().subscribe(t=>{this.calendarIcons=t,this.isEdit?(this.calendarIcon=this.calendarIcons.find(a=>a.filename==this.getId),this.setData()):this.calendarIcon={}})}buildForm(){this.calendarIconForm=this.formBuilder.group({name:["",r.k0.required],imageurl:[null],unpublished:[!0]})}setAddEditValidators(){const t=this.calendarIconForm.get("imageurl");t.setValidators(this.isEdit?null:[r.k0.required]),t.updateValueAndValidity()}calendarIconFormSubmit(){this.calendarIconForm.markAllAsTouched(),this.calendarIconForm.valid&&this.saveCalendarIcon()}get calendarIconFormControls(){return this.calendarIconForm.controls}hasEdit(){this.urlSegments.forEach(t=>{if("edit"==t.path)return this.isEdit=!0})}setData(){this.calendarIconForm.get("name").setValue(this.calendarIcon.name),this.calendarIconForm.get("imageurl").setValue(this.calendarIcon.imageurl),this.calendarIconForm.get("unpublished").setValue(!this.calendarIcon.unpublished),this.existingFileUrl=this.LOCAL_PATH+this.calendarIcon.imageurl}getData(){this.calendarIcon.name=this.calendarIconForm.get("name").value,this.calendarIcon.startDate="1/1/1970",this.calendarIcon.endDate="1/1/1970",this.calendarIcon.unpublished=!this.calendarIconForm.get("unpublished").value}saveCalendarIcon(){this.getData(),this.isEdit?this.calendarIconsService.update(this.calendarIcon.filename,this.calendarIcon).subscribe({next:()=>{this.router.navigate(["calendarIcons"])},error:()=>{this.router.navigate(["calendarIcons"])},complete:()=>{this.router.navigate(["calendarIcons"])}}):this.calendarIconsService.add(this.calendarIcon).subscribe({next:()=>{this.router.navigate(["calendarIcons"])},error:()=>{this.router.navigate(["calendarIcons"])},complete:()=>{this.router.navigate(["calendarIcons"])}})}cancelCalendarIcon(){this.router.navigate(["calendarIcons"])}uploadedFilename(t){this.calendarIcon.imageurl="/images/calendaricons/"+t,this.calendarIconForm.get("imageurl").setValue(this.calendarIcon.imageurl)}static#n=this.\u0275fac=function(a){return new(a||e)(n.rXU(l.Ix),n.rXU(l.nX),n.rXU(r.ok),n.rXU(h))};static#t=this.\u0275cmp=n.VBU({type:e,selectors:[["app-calendarIcons-form"]],decls:2,vars:1,consts:[["id","main-content2"],["class","card calendarIcon",4,"ngIf"],[1,"card","calendarIcon"],[1,"card-header"],[4,"ngIf"],[1,"name"],[1,"card-body"],["ScrollToInvalidControl","",3,"ngSubmit","formGroup"],[1,"row"],[1,"col-lg-6"],[1,"form-control-group"],["type","text","formControlName","name",1,"form-control"],[1,"invalid-feedback"],[1,"col-lg-2"],[1,"form-check"],["type","checkbox","formControlName","unpublished","id","unpublished",1,"form-check-input","custom-control-input","unpublished"],[1,"form-control-group","image-url-fcg"],["type","text","formControlName","imageurl",1,"form-control","hidden"],[1,"input-group","file-upload"],[1,"upload-button"],[3,"uploadedFilename","existingFileUrl","filesource"],[1,"action-buttons"],[1,"btn","btn-default",3,"click"],["type","submit",1,"btn","btn-primary"]],template:function(a,i){1&a&&(n.j41(0,"div",0),n.DNE(1,V,40,5,"div",1),n.k0s()),2&a&&(n.R7$(),n.Y8G("ngIf",i.calendarIcon))},dependencies:[d.bT,r.qT,r.me,r.Zm,r.BC,r.cb,r.j4,r.JD,x.g,G.P],encapsulation:2})}return e})();var p=o(8486);const D=[{path:"",component:A,canActivate:[p.q]},{path:"add",component:v,canActivate:[p.q]},{path:"edit/:id",component:v,canActivate:[p.q]}];let S=(()=>{class e{static#n=this.\u0275fac=function(a){return new(a||e)};static#t=this.\u0275mod=n.$C({type:e});static#e=this.\u0275inj=n.G2t({imports:[l.iI.forChild(D),l.iI]})}return e})(),X=(()=>{class e{static#n=this.\u0275fac=function(a){return new(a||e)};static#t=this.\u0275mod=n.$C({type:e});static#e=this.\u0275inj=n.G2t({providers:[h],imports:[d.MD,S,f.q1,r.YN,r.X1,F.G]})}return e})()}}]);