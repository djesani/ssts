"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([["src_app_secure_calendarIcons_calendarIcons_module_ts"],{6344:(Q,_,r)=>{r.r(_),r.d(_,{CalendarIconsModule:()=>p});var f=r(6895),b=r(529),i=r(4006),A=r(5980),g=r(8478),I=r(2340),n=r(4650);const v=`${I.N.CONTEXT_PATH}/calendaricons`;class d{constructor(e){this.http=e}getAll(){return this.http.get(v)}get(e){return this.http.get(`${v}/${e}`)}add(e){return this.http.post(v,e)}update(e,t){return this.http.patch(`${v}/${e}`,t)}}d.\u0275fac=function(e){return new(e||d)(n.LFG(b.eN))},d.\u0275prov=n.Yz7({token:d,factory:d.\u0275fac});var O=r(2216);class m{transform(e,t,o){return o?(e||[]).filter(c=>t.split(",").some(u=>c.hasOwnProperty(u)&&new RegExp(o,"gi").test(c[u]))):e}}m.\u0275fac=function(e){return new(e||m)},m.\u0275pipe=n.Yjl({name:"search",type:m,pure:!0});const Z=function(){return["fas","check-circle"]};function M(a,e){1&a&&(n.TgZ(0,"span",24),n._UZ(1,"fa-icon",11),n.qZA()),2&a&&(n.xp6(1),n.Q6J("icon",n.DdM(1,Z)))}const T=function(){return["fas","times-circle"]};function y(a,e){1&a&&(n.TgZ(0,"span",25),n._UZ(1,"fa-icon",11),n.qZA()),2&a&&(n.xp6(1),n.Q6J("icon",n.DdM(1,T)))}function P(a,e){if(1&a&&(n.TgZ(0,"div",16)(1,"div",14)(2,"div",17),n._uU(3),n.qZA()(),n.TgZ(4,"div",14),n._UZ(5,"img",18),n.qZA(),n.TgZ(6,"div",19),n.YNc(7,M,2,2,"span",20),n.YNc(8,y,2,2,"span",21),n.qZA(),n.TgZ(9,"div",22)(10,"button",23),n._uU(11,"Edit"),n.qZA()()()),2&a){const t=e.$implicit,o=n.oxw(2);n.xp6(3),n.Oqu(t.name),n.xp6(2),n.hYB("src","",o.LOCAL_PATH,"",t.imageurl,"",n.LSH),n.xp6(2),n.Q6J("ngIf",!t.unpublished),n.xp6(1),n.Q6J("ngIf",t.unpublished),n.xp6(2),n.MGl("routerLink","edit/",t.filename,"")}}const F=function(){return["fas","search"]};function w(a,e){if(1&a){const t=n.EpF();n.TgZ(0,"div",2)(1,"div",3)(2,"header",4)(3,"div",5)(4,"div",6)(5,"button",7),n._uU(6,"Add"),n.qZA()(),n.TgZ(7,"div",8)(8,"div",9)(9,"input",10),n.NdJ("ngModelChange",function(c){n.CHM(t);const u=n.oxw();return n.KtG(u.query=c)}),n.qZA(),n._UZ(10,"fa-icon",11),n.qZA()()()()(),n.TgZ(11,"div",12)(12,"div",13)(13,"div",14),n._uU(14," Name "),n.qZA(),n.TgZ(15,"div",14),n._uU(16," Icon "),n.qZA(),n.TgZ(17,"div",14),n._uU(18," Published "),n.qZA(),n._UZ(19,"div",14),n.qZA(),n.YNc(20,P,12,6,"div",15),n.ALo(21,"search"),n.qZA()()}if(2&a){const t=n.oxw();n.xp6(9),n.Q6J("ngModel",t.query),n.xp6(1),n.Q6J("icon",n.DdM(7,F)),n.xp6(10),n.Q6J("ngForOf",n.Dn7(21,3,t.calendarIcons,"name,description,startDate",t.query))}}class h{constructor(e){this.calendarIconsService=e,this.LOCAL_PATH=I.N.LOCAL_PATH}ngOnInit(){this.calendarIconsService.getAll().subscribe(e=>{this.calendarIcons=e})}}h.\u0275fac=function(e){return new(e||h)(n.Y36(d))},h.\u0275cmp=n.Xpm({type:h,selectors:[["app-calendarIcons-list"]],decls:2,vars:1,consts:[["id","main-content2"],["class","calendarIcons",4,"ngIf"],[1,"calendarIcons"],[1,"header-nav"],["id","header-nav"],[1,"row","add-wrapper"],[1,"col-sm-1","btn-add-container"],["routerLink","add",1,"btn","btn-primary","btn-add"],[1,"col-sm-11"],[1,"header-search-wrapper"],["placeholder","search . . .",1,"header-search-input",3,"ngModel","ngModelChange"],[3,"icon"],[1,"calendarIcons-list"],[1,"row","row-calendarIcon-header"],[1,"col-3"],["class","row row-calendarIcon",4,"ngFor","ngForOf"],[1,"row","row-calendarIcon"],[1,"calendarIcon-name"],[1,"thumb",3,"src"],[1,"col-3","read-only","published-status"],["class","published",4,"ngIf"],["class","unpublished",4,"ngIf"],[1,"col-3","actions"],[1,"btn","btn-primary",3,"routerLink"],[1,"published"],[1,"unpublished"]],template:function(e,t){1&e&&(n.TgZ(0,"div",0),n.YNc(1,w,22,8,"div",1),n.qZA()),2&e&&(n.xp6(1),n.Q6J("ngIf",t.calendarIcons))},dependencies:[f.sg,f.O5,g.rH,i.Fj,i.JJ,i.On,O.BN,m],styles:["table[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n\n    .mat-table[_ngcontent-%COMP%] {\n        background: transparent;\n    }\n\n    .mat-header-row[_ngcontent-%COMP%] {\n        border-bottom: 2px solid #690f79;\n        padding: 10px 0;\n        color: var(--bs-secondary);\n        font-size: 16px;\n        font-weight: bold;\n    }\n\n    .mat-header-cell[_ngcontent-%COMP%], .mat-cell[_ngcontent-%COMP%] {\n        font-size: 16px;\n        color: #5b1e67;\n        padding: 0 10px;\n    }\n\n    .mat-header-cell[_ngcontent-%COMP%] {\n        font-size: 18px;\n    }\n\n    .calendarIcons-list[_ngcontent-%COMP%] {\n        padding: 80px 0px 0;\n        margin: 0 20px;\n    }\n\n    td.mat-cell[_ngcontent-%COMP%]:first-of-type, td.mat-footer-cell[_ngcontent-%COMP%]:first-of-type {\n        padding-left: 0px;\n    }\n\n    .row.row-calendarIcon-header[_ngcontent-%COMP%] {\n        border-bottom: 2px solid #690f79;\n        padding: 10px 0;\n        color: var(--bs-secondary);\n        font-weight: bold;\n        font-size: 18px;\n    }\n\n    .published-status[_ngcontent-%COMP%] {\n        text-align: left;\n    }\n\n    .row-calendarIcon[_ngcontent-%COMP%] {\n        margin: 10px 0;\n        display: flex;\n        align-items: center;\n    }\n\n    .row-calendarIcon[_ngcontent-%COMP%]:hover {\n        background-color: #690f791d;\n    }\n\n    button[_ngcontent-%COMP%] {\n        color: white;\n    }\n\n    .actions[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: space-around;\n    }\n\n    .calendarIcons-list[_ngcontent-%COMP%] {\n        padding: 80px 10px 0;\n        margin: 0 20px;\n    }\n\n    .row.row-calendarIcon-header[_ngcontent-%COMP%] {\n        border-bottom: 2px solid #690f79;\n        padding: 10px 0;\n        color: var(--bs-secondary);\n    }\n\n    .row-calendarIcon[_ngcontent-%COMP%] {\n        align-items: center;\n    }"]});var x=r(6913),U=r(8420);const N=["name"];function L(a,e){1&a&&(n.TgZ(0,"span"),n._uU(1,"Edit "),n.qZA())}function q(a,e){1&a&&(n.TgZ(0,"span"),n._uU(1,"Add "),n.qZA())}function S(a,e){if(1&a){const t=n.EpF();n.TgZ(0,"div",2)(1,"h5",3),n.YNc(2,L,2,0,"span",4),n.YNc(3,q,2,0,"span",4),n.TgZ(4,"span",5),n._uU(5,"Calendar Icon"),n.qZA()(),n.TgZ(6,"div",6)(7,"form",7),n.NdJ("ngSubmit",function(){n.CHM(t);const c=n.oxw();return n.KtG(c.calendarIconFormSubmit())}),n.TgZ(8,"div",8)(9,"div",9)(10,"div",8)(11,"div",10)(12,"label"),n._uU(13,"Name"),n.qZA(),n._UZ(14,"input",11),n.TgZ(15,"div",12),n._uU(16,"Name is required"),n.qZA()()(),n.TgZ(17,"div",8)(18,"div",13)(19,"div",10)(20,"label"),n._uU(21,"Published"),n.qZA(),n.TgZ(22,"div",14),n._UZ(23,"input",15),n.qZA()()()()(),n.TgZ(24,"div",9)(25,"div",8)(26,"div",16)(27,"label"),n._uU(28,"Image URL"),n.qZA(),n.TgZ(29,"div",17)(30,"div",18),n._UZ(31,"img",19),n.qZA(),n.TgZ(32,"label",20)(33,"input",21),n.NdJ("uploadOutput",function(c){n.CHM(t);const u=n.oxw();return n.KtG(u.onUploadOutput(c))}),n.qZA(),n.TgZ(34,"div",12),n._uU(35,"Image URL is required"),n.qZA()()(),n.TgZ(36,"div",12),n._uU(37,"Image URL is required"),n.qZA()()()()(),n.TgZ(38,"div",22)(39,"button",23),n.NdJ("click",function(){n.CHM(t);const c=n.oxw();return n.KtG(c.cancelCalendarIcon())}),n._uU(40,"Cancel"),n.qZA(),n.TgZ(41,"button",24),n._uU(42,"Save"),n.qZA()()()()()}if(2&a){const t=n.oxw();n.xp6(2),n.Q6J("ngIf",t.isEdit),n.xp6(1),n.Q6J("ngIf",!t.isEdit),n.xp6(4),n.Q6J("formGroup",t.calendarIconForm),n.xp6(24),n.hYB("src","",t.LOCAL_PATH,"",t.calendarIcon.imageurl,"",n.LSH),n.xp6(2),n.Q6J("uploadInput",t.uploadInput)}}new Date;class l{constructor(e,t,o,c){this.router=e,this.activatedRoute=t,this.formBuilder=o,this.calendarIconsService=c,this.changeEndDate=!1,this.LOCAL_PATH=I.N.LOCAL_PATH,this.getId=this.activatedRoute.snapshot.paramMap.get("id"),this.urlSegments=this.activatedRoute.snapshot.url,this.hasEdit(),this.options={concurrency:1,maxUploads:3,maxFileSize:1e6},this.files=[],this.uploadInput=new n.vpe,this.humanizeBytes=x.kK}ngOnInit(){this.buildForm(),this.setAddEditValidators(),this.loadData()}loadData(){this.calendarIconsService.getAll().subscribe(e=>{this.calendarIcons=e,this.isEdit?(this.calendarIcon=this.calendarIcons.find(t=>t.filename==this.getId),this.setData()):this.calendarIcon={}})}buildForm(){this.calendarIconForm=this.formBuilder.group({name:["",i.kI.required],imageName:[null],imageurl:[null],unpublished:[!0],filename:[null]})}setAddEditValidators(){const e=this.calendarIconForm.get("imageName");e.setValidators(this.isEdit?null:[i.kI.required]),e.updateValueAndValidity()}calendarIconFormSubmit(){this.calendarIconForm.markAllAsTouched(),this.calendarIconForm.valid&&this.saveCalendarIcon()}get calendarIconFormControls(){return this.calendarIconForm.controls}hasEdit(){this.urlSegments.forEach(e=>{if("edit"==e.path)return this.isEdit=!0})}setData(){this.calendarIconForm.get("name").setValue(this.calendarIcon.name),this.calendarIconForm.get("imageurl").setValue(this.calendarIcon.imageurl),this.calendarIconForm.get("unpublished").setValue(!this.calendarIcon.unpublished),this.calendarIconForm.get("filename").setValue(this.calendarIcon.filename),this.calendarIconForm.get("imageName").setValue("")}getData(){this.calendarIcon.name=this.calendarIconForm.get("name").value,this.calendarIcon.unpublished=!this.calendarIconForm.get("unpublished").value,this.calendarIcon.filename=this.calendarIconForm.get("filename").value}saveCalendarIcon(){this.getData(),this.isEdit?this.calendarIconsService.update(this.calendarIcon.filename,this.calendarIcon).subscribe(e=>{console.log("edit-data",e)},e=>{this.router.navigate(["calendarIcons"])},()=>{this.router.navigate(["calendarIcons"])}):this.calendarIconsService.add(this.calendarIcon).subscribe(e=>{console.log("add-data",e)},e=>{this.router.navigate(["calendarIcons"])},()=>{this.router.navigate(["calendarIcons"])})}cancelCalendarIcon(){this.router.navigate(["calendarIcons"])}onUploadOutput(e){switch(e.type){case"allAddedToQueue":this.uploadInput.emit({type:"uploadAll",url:`${I.N.CONTEXT_PATH}/calendaricons/fileupload`,method:"POST"});break;case"addedToQueue":typeof e.file<"u"&&this.files.push(e.file);break;case"uploading":if(typeof e.file<"u"){const o=this.files.findIndex(c=>typeof e.file<"u"&&c.id===e.file.id);this.files[o]=e.file}break;case"removed":this.files=this.files.filter(o=>o!==e.file);break;case"dragOver":this.dragOver=!0;break;case"dragOut":case"drop":this.dragOver=!1;break;case"done":this.calendarIcon.imageurl="/images/calendaricons/"+e.file.name}}cancelUpload(e){this.uploadInput.emit({type:"cancel",id:e})}removeFile(e){this.uploadInput.emit({type:"remove",id:e})}removeAllFiles(){this.uploadInput.emit({type:"removeAll"})}}l.\u0275fac=function(e){return new(e||l)(n.Y36(g.F0),n.Y36(g.gz),n.Y36(i.qu),n.Y36(d))},l.\u0275cmp=n.Xpm({type:l,selectors:[["app-calendarIcons-form"]],viewQuery:function(e,t){if(1&e&&n.Gf(N,5),2&e){let o;n.iGM(o=n.CRH())&&(t.inputEl=o.first)}},decls:2,vars:1,consts:[["id","main-content2"],["class","card calendarIcon",4,"ngIf"],[1,"card","calendarIcon"],[1,"card-header"],[4,"ngIf"],[1,"name"],[1,"card-body"],["ScrollToInvalidControl","",3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-6"],[1,"form-control-group"],["type","text","formControlName","name",1,"form-control"],[1,"invalid-feedback"],[1,"col-lg-2"],[1,"form-check"],["type","checkbox","formControlName","unpublished","id","unpublished",1,"form-check-input","custom-control-input","unpublished"],[1,"form-control-group","image-url-fcg"],[1,"input-group","file-upload"],[1,"input-group-prepend"],[1,"thumb",3,"src"],[1,"upload-button"],["type","file","ngFileSelect","","formControlName","imageName",1,"form-control","file",3,"uploadInput","uploadOutput"],[1,"action-buttons"],[1,"btn","btn-default",3,"click"],["type","submit",1,"btn","btn-primary"]],template:function(e,t){1&e&&(n.TgZ(0,"div",0),n.YNc(1,S,43,6,"div",1),n.qZA()),2&e&&(n.xp6(1),n.Q6J("ngIf",t.calendarIcon))},dependencies:[f.O5,i._Y,i.Fj,i.Wl,i.JJ,i.JL,i.sg,i.u,x.qx,U.s],styles:[".card.calendarIcon[_ngcontent-%COMP%] {\n        margin: 0;\n        padding: 0;\n        border: 0;\n        border-radius: 0;\n        width: 100%;\n        height: 100%;\n    }\n\n    .card.calendarIcon[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n        display: inline-block;\n    }\n\n    .card.calendarIcon[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n        color: #fff;\n        padding: 15px !important;\n    }\n\n    .card.calendarIcon[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n        padding-top: 80px !important;\n        width: 100%;\n        background: #5305660d;\n    }\n\n    .row-calendarIcon[_ngcontent-%COMP%] {\n        border-bottom: 1px solid #9227a624;\n        padding: 5px 0;\n        padding: 5px 0;\n    }\n\n    .row-calendarIcon[_ngcontent-%COMP%]:hover {\n        background-color: #8f24a91a;\n    }\n\n    .row-calendarIcon-header[_ngcontent-%COMP%] {\n        font-weight: bold;\n        font-size: 18px;\n    }\n\n    .card.calendarIcon[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n        padding: 0;\n        margin: 0;\n        background: linear-gradient(45deg, #8e24aa, #ff6e40);\n        display: flex;\n        flex-direction: row;\n        flex-wrap: nowrap;\n        flex-shrink: 0;\n        box-sizing: border-box;\n        align-self: stretch;\n        align-items: center;\n        height: 64px;\n        box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%), 0 1px 5px 0 rgb(0 0 0 / 12%);\n        box-shadow: 0 5px 5px 5px #0000002e;\n        transition-duration: .2s;\n        transition-timing-function: cubic-bezier(.4, 0, .2, 1);\n        transition-property: max-height, box-shadow;\n        position: fixed;\n        width: 100%;\n        z-index: 99;\n        border-radius: 0;\n    }\n\n\n    .calendarIcons[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%], .card.calendarIcon[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]{\n        background: linear-gradient(45deg, #fe8a10, #feaf1f);\n        border: 1px solid #fe8a10 !important;\n        box-shadow: 0px 0px 3px 0 rgb(255 110 64 / 50%);\n        color: #fff !important;\n        transition: none;\n    }\n\n    .calendarIcons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover, .card.calendarIcon[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n        background: linear-gradient(0deg, #fe8a10, #feaf1f);\n        color: #fff;\n    }\n\n    .calendarIcons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n        min-width: 100px;\n    }"]});var C=r(9390);const J=[{path:"",component:h,canActivate:[C.a],data:{permissions:{only:"ADMIN",redirectTo:"login"}}},{path:"add",component:l,canActivate:[C.a],data:{permissions:{only:"ADMIN",redirectTo:"login"}}},{path:"edit/:id",component:l,canActivate:[C.a],data:{permissions:{only:"ADMIN",redirectTo:"login"}}}];class s{}s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=n.oAB({type:s}),s.\u0275inj=n.cJS({imports:[g.Bz.forChild(J),g.Bz]});var k=r(7375),E=r(7155);class p{}p.\u0275fac=function(e){return new(e||p)},p.\u0275mod=n.oAB({type:p}),p.\u0275inj=n.cJS({providers:[d],imports:[f.ez,s,b.JF,i.u5,i.UX,A.m,k.UM,E.p0]})}}]);