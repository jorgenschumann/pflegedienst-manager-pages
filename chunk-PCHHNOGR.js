import{b as ye}from"./chunk-KMUJ7HOU.js";import{h as oe}from"./chunk-FPP55PYO.js";import{a as le,b as ce}from"./chunk-MXUCGI6M.js";import{a as me,c as ue,f as fe,h as _e,m as he,o as Ce,p as be}from"./chunk-ELJR6EH4.js";import{f as ge,i as pe,j as de}from"./chunk-OEPSP66R.js";import{c as ie,d as E,f as z,h as O}from"./chunk-EACUHEII.js";import{Aa as re,g as X,i as ee,k as ne,n as te,ta as se,ua as $,ya as ae}from"./chunk-5XBUP5D7.js";import{Ba as j,Bb as b,Cb as y,Ea as a,Gb as Z,Hb as c,Ib as G,Kb as U,Pb as W,R as D,Ra as x,Rb as k,S as R,Sa as H,Sb as Y,Va as Q,X as M,Xa as d,a as v,ac as J,b as F,bb as w,c as N,ca as B,cb as r,da as A,fa as S,hb as u,ic as I,la as L,lb as o,mb as i,nb as _,qb as T,ra as h,rb as K,vb as g,wb as p,xb as V,yb as q,zb as C}from"./chunk-Q5CMOO54.js";var $e=["container"],Se=["icon"],we=["closeicon"],ke=["*"],Ie=(e,m)=>({showTransitionParams:e,hideTransitionParams:m}),Ee=e=>({value:"visible()",params:e}),ze=e=>({closeCallback:e});function Oe(e,m){e&1&&T(0)}function Pe(e,m){if(e&1&&d(0,Oe,1,0,"ng-container",7),e&2){let t=p(2);r("ngTemplateOutlet",t.iconTemplate||t.iconTemplate)}}function Fe(e,m){if(e&1&&_(0,"i",3),e&2){let t=p(2);r("ngClass",t.icon)}}function Ne(e,m){if(e&1&&_(0,"span",9),e&2){let t=p(3);r("ngClass",t.cx("text"))("innerHTML",t.text,j)}}function De(e,m){if(e&1&&(o(0,"div"),d(1,Ne,1,2,"span",8),i()),e&2){let t=p(2);a(),r("ngIf",!t.escape)}}function Re(e,m){if(e&1&&(o(0,"span",5),c(1),i()),e&2){let t=p(3);r("ngClass",t.cx("text")),a(),G(t.text)}}function Be(e,m){if(e&1&&d(0,Re,2,2,"span",10),e&2){let t=p(2);r("ngIf",t.escape&&t.text)}}function Ae(e,m){e&1&&T(0)}function Le(e,m){if(e&1&&d(0,Ae,1,0,"ng-container",11),e&2){let t=p(2);r("ngTemplateOutlet",t.containerTemplate||t.containerTemplate)("ngTemplateOutletContext",k(2,ze,t.close.bind(t)))}}function je(e,m){if(e&1&&(o(0,"span",5),q(1),i()),e&2){let t=p(2);r("ngClass",t.cx("text"))}}function He(e,m){if(e&1&&_(0,"i",13),e&2){let t=p(3);r("ngClass",t.closeIcon)}}function Qe(e,m){e&1&&T(0)}function Ke(e,m){if(e&1&&d(0,Qe,1,0,"ng-container",7),e&2){let t=p(3);r("ngTemplateOutlet",t.closeIconTemplate||t._closeIconTemplate)}}function Ve(e,m){e&1&&_(0,"TimesIcon",14)}function qe(e,m){if(e&1){let t=K();o(0,"button",12),g("click",function(l){B(t);let s=p(2);return A(s.close(l))}),d(1,He,1,1,"i",13)(2,Ke,1,1,"ng-container")(3,Ve,1,0,"TimesIcon",14),i()}if(e&2){let t=p(2);w("aria-label",t.closeAriaLabel),a(),u(t.closeIcon?1:-1),a(),u(t.closeIconTemplate||t._closeIconTemplate?2:-1),a(),u(!t.closeIconTemplate&&!t._closeIconTemplate&&!t.closeIcon?3:-1)}}function Ze(e,m){if(e&1&&(o(0,"div",1)(1,"div",2),d(2,Pe,1,1,"ng-container")(3,Fe,1,1,"i",3)(4,De,2,1,"div",4)(5,Be,1,1,"ng-template",null,0,J)(7,Le,1,4,"ng-container")(8,je,2,1,"span",5)(9,qe,4,4,"button",6),i()()),e&2){let t=Z(6),n=p();r("ngClass",n.containerClass)("@messageAnimation",k(13,Ee,Y(10,Ie,n.showTransitionOptions,n.hideTransitionOptions))),w("aria-live","polite")("role","alert"),a(2),u(n.iconTemplate||n._iconTemplate?2:-1),a(),u(n.icon?3:-1),a(),r("ngIf",!n.escape)("ngIfElse",t),a(3),u(n.containerTemplate||n._containerTemplate?7:8),a(2),u(n.closable?9:-1)}}var Ge=({dt:e})=>`
.p-message {
    border-radius: ${e("message.border.radius")};
    outline-width: ${e("message.border.width")};
    outline-style: solid;
}

.p-message-content {
    display: flex;
    align-items: center;
    padding: ${e("message.content.padding")};
    gap: ${e("message.content.gap")};
    height: 100%;
}

.p-message-icon {
    flex-shrink: 0;
}

.p-message-close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-inline-start: auto;
    overflow: hidden;
    position: relative;
    width: ${e("message.close.button.width")};
    height: ${e("message.close.button.height")};
    border-radius: ${e("message.close.button.border.radius")};
    background: transparent;
    transition: background ${e("message.transition.duration")}, color ${e("message.transition.duration")}, outline-color ${e("message.transition.duration")}, box-shadow ${e("message.transition.duration")}, opacity 0.3s;
    outline-color: transparent;
    color: inherit;
    padding: 0;
    border: none;
    cursor: pointer;
    user-select: none;
}

.p-message-close-icon {
    font-size: ${e("message.close.icon.size")};
    width: ${e("message.close.icon.size")};
    height: ${e("message.close.icon.size")};
}

.p-message-close-button:focus-visible {
    outline-width: ${e("message.close.button.focus.ring.width")};
    outline-style: ${e("message.close.button.focus.ring.style")};
    outline-offset: ${e("message.close.button.focus.ring.offset")};
}

.p-message-info {
    background: ${e("message.info.background")};
    outline-color: ${e("message.info.border.color")};
    color: ${e("message.info.color")};
    box-shadow: ${e("message.info.shadow")};
}

.p-message-info .p-message-close-button:focus-visible {
    outline-color: ${e("message.info.close.button.focus.ring.color")};
    box-shadow: ${e("message.info.close.button.focus.ring.shadow")};
}

.p-message-info .p-message-close-button:hover {
    background: ${e("message.info.close.button.hover.background")};
}

.p-message-info.p-message-outlined {
    color: ${e("message.info.outlined.color")};
    outline-color: ${e("message.info.outlined.border.color")};
}

.p-message-info.p-message-simple {
    color: ${e("message.info.simple.color")};
}

.p-message-success {
    background: ${e("message.success.background")};
    outline-color: ${e("message.success.border.color")};
    color: ${e("message.success.color")};
    box-shadow: ${e("message.success.shadow")};
}

.p-message-success .p-message-close-button:focus-visible {
    outline-color: ${e("message.success.close.button.focus.ring.color")};
    box-shadow: ${e("message.success.close.button.focus.ring.shadow")};
}

.p-message-success .p-message-close-button:hover {
    background: ${e("message.success.close.button.hover.background")};
}

.p-message-success.p-message-outlined {
    color: ${e("message.success.outlined.color")};
    outline-color: ${e("message.success.outlined.border.color")};
}

.p-message-success.p-message-simple {
    color: ${e("message.success.simple.color")};
}

.p-message-warn {
    background: ${e("message.warn.background")};
    outline-color: ${e("message.warn.border.color")};
    color: ${e("message.warn.color")};
    box-shadow: ${e("message.warn.shadow")};
}

.p-message-warn .p-message-close-button:focus-visible {
    outline-color: ${e("message.warn.close.button.focus.ring.color")};
    box-shadow: ${e("message.warn.close.button.focus.ring.shadow")};
}

.p-message-warn .p-message-close-button:hover {
    background: ${e("message.warn.close.button.hover.background")};
}

.p-message-warn.p-message-outlined {
    color: ${e("message.warn.outlined.color")};
    outline-color: ${e("message.warn.outlined.border.color")};
}

.p-message-warn.p-message-simple {
    color: ${e("message.warn.simple.color")};
}

.p-message-error {
    background: ${e("message.error.background")};
    outline-color: ${e("message.error.border.color")};
    color: ${e("message.error.color")};
    box-shadow: ${e("message.error.shadow")};
}

.p-message-error .p-message-close-button:focus-visible {
    outline-color: ${e("message.error.close.button.focus.ring.color")};
    box-shadow: ${e("message.error.close.button.focus.ring.shadow")};
}

.p-message-error .p-message-close-button:hover {
    background: ${e("message.error.close.button.hover.background")};
}

.p-message-error.p-message-outlined {
    color: ${e("message.error.outlined.color")};
    outline-color: ${e("message.error.outlined.border.color")};
}

.p-message-error.p-message-simple {
    color: ${e("message.error.simple.color")};
}

.p-message-secondary {
    background: ${e("message.secondary.background")};
    outline-color: ${e("message.secondary.border.color")};
    color: ${e("message.secondary.color")};
    box-shadow: ${e("message.secondary.shadow")};
}

.p-message-secondary .p-message-close-button:focus-visible {
    outline-color: ${e("message.secondary.close.button.focus.ring.color")};
    box-shadow: ${e("message.secondary.close.button.focus.ring.shadow")};
}

.p-message-secondary .p-message-close-button:hover {
    background: ${e("message.secondary.close.button.hover.background")};
}

.p-message-secondary.p-message-outlined {
    color: ${e("message.secondary.outlined.color")};
    outline-color: ${e("message.secondary.outlined.border.color")};
}

.p-message-secondary.p-message-simple {
    color: ${e("message.secondary.simple.color")};
}

.p-message-contrast {
    background: ${e("message.contrast.background")};
    outline-color: ${e("message.contrast.border.color")};
    color: ${e("message.contrast.color")};
    box-shadow: ${e("message.contrast.shadow")};
}

.p-message-contrast .p-message-close-button:focus-visible {
    outline-color: ${e("message.contrast.close.button.focus.ring.color")};
    box-shadow: ${e("message.contrast.close.button.focus.ring.shadow")};
}

.p-message-contrast .p-message-close-button:hover {
    background: ${e("message.contrast.close.button.hover.background")};
}

.p-message-contrast.p-message-outlined {
    color: ${e("message.contrast.outlined.color")};
    outline-color: ${e("message.contrast.outlined.border.color")};
}

.p-message-contrast.p-message-simple {
    color: ${e("message.contrast.simple.color")};
}

.p-message-text {
    display: inline-flex;
    align-items: center;
    font-size: ${e("message.text.font.size")};
    font-weight: ${e("message.text.font.weight")};
}

.p-message-icon {
    font-size: ${e("message.icon.size")};
    width: ${e("message.icon.size")};
    height: ${e("message.icon.size")};
}

.p-message-enter-from {
    opacity: 0;
}

.p-message-enter-active {
    transition: opacity 0.3s;
}

.p-message.p-message-leave-from {
    max-height: 1000px;
}

.p-message.p-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin: 0;
}

.p-message-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin 0.3s;
}

.p-message-leave-active .p-message-close-button {
    opacity: 0;
}

.p-message-sm .p-message-content {
    padding: ${e("message.content.sm.padding")};
}

.p-message-sm .p-message-text {
    font-size: ${e("message.text.sm.font.size")};
}

.p-message-sm .p-message-icon {
    font-size: ${e("message.icon.sm.size")};
    width: ${e("message.icon.sm.size")};
    height: ${e("message.icon.sm.size")};
}

.p-message-sm .p-message-close-icon {
    font-size: ${e("message.close.icon.sm.size")};
    width: ${e("message.close.icon.sm.size")};
    height: ${e("message.close.icon.sm.size")};
}

.p-message-lg .p-message-content {
    padding: ${e("message.content.lg.padding")};
}

.p-message-lg .p-message-text {
    font-size: ${e("message.text.lg.font.size")};
}

.p-message-lg .p-message-icon {
    font-size: ${e("message.icon.lg.size")};
    width: ${e("message.icon.lg.size")};
    height: ${e("message.icon.lg.size")};
}

.p-message-lg .p-message-close-icon {
    font-size: ${e("message.close.icon.lg.size")};
    width: ${e("message.close.icon.lg.size")};
    height: ${e("message.close.icon.lg.size")};
}

.p-message-outlined {
    background: transparent;
    outline-width: ${e("message.outlined.border.width")};
}

.p-message-simple {
    background: transparent;
    outline-color: transparent;
    box-shadow: none;
}

.p-message-simple .p-message-content {
    padding: ${e("message.simple.content.padding")};
}

.p-message-outlined .p-message-close-button:hover,
.p-message-simple .p-message-close-button:hover {
    background: transparent;
}`,Ue={root:({props:e})=>["p-message p-component p-message-"+e.severity,{"p-message-simple":e.variant==="simple"}],content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},ve=(()=>{class e extends ae{name="message";theme=Ge;classes=Ue;static \u0275fac=(()=>{let t;return function(l){return(t||(t=S(e)))(l||e)}})();static \u0275prov=D({token:e,factory:e.\u0275fac})}return e})();var P=(()=>{class e extends re{severity="info";text;escape=!0;style;styleClass;closable=!1;icon;closeIcon;life;showTransitionOptions="300ms ease-out";hideTransitionOptions="200ms cubic-bezier(0.86, 0, 0.07, 1)";size;variant;onClose=new L;get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}get containerClass(){let t=this.variant==="outlined"?"p-message-outlined":this.variant==="simple"?"p-message-simple":"",n=this.size==="small"?"p-message-sm":this.size==="large"?"p-message-lg":"";return`p-message-${this.severity} ${t} ${n}`.trim()+(this.styleClass?" "+this.styleClass:"")}visible=h(!0);_componentStyle=M(ve);containerTemplate;iconTemplate;closeIconTemplate;templates;_containerTemplate;_iconTemplate;_closeIconTemplate;ngOnInit(){super.ngOnInit(),this.life&&setTimeout(()=>{this.visible.set(!1)},this.life)}ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"container":this._containerTemplate=t.template;break;case"icon":this._iconTemplate=t.template;break;case"closeicon":this._closeIconTemplate=t.template;break}})}close(t){this.visible.set(!1),this.onClose.emit({originalEvent:t})}static \u0275fac=(()=>{let t;return function(l){return(t||(t=S(e)))(l||e)}})();static \u0275cmp=x({type:e,selectors:[["p-message"]],contentQueries:function(n,l,s){if(n&1&&(C(s,$e,4),C(s,Se,4),C(s,we,4),C(s,se,4)),n&2){let f;b(f=y())&&(l.containerTemplate=f.first),b(f=y())&&(l.iconTemplate=f.first),b(f=y())&&(l.closeIconTemplate=f.first),b(f=y())&&(l.templates=f)}},inputs:{severity:"severity",text:"text",escape:[2,"escape","escape",I],style:"style",styleClass:"styleClass",closable:[2,"closable","closable",I],icon:"icon",closeIcon:"closeIcon",life:"life",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",size:"size",variant:"variant"},outputs:{onClose:"onClose"},features:[W([ve]),Q],ngContentSelectors:ke,decls:1,vars:1,consts:[["escapeOut",""],[1,"p-message","p-component",3,"ngClass"],[1,"p-message-content"],[1,"p-message-icon",3,"ngClass"],[4,"ngIf","ngIfElse"],[3,"ngClass"],["pRipple","","type","button",1,"p-message-close-button"],[4,"ngTemplateOutlet"],[3,"ngClass","innerHTML",4,"ngIf"],[3,"ngClass","innerHTML"],[3,"ngClass",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["pRipple","","type","button",1,"p-message-close-button",3,"click"],[1,"p-message-close-icon",3,"ngClass"],["styleClass","p-message-close-icon"]],template:function(n,l){n&1&&(V(),d(0,Ze,10,15,"div",1)),n&2&&u(l.visible()?0:-1)},dependencies:[te,X,ee,ne,me,ge,$],encapsulation:2,data:{animation:[ie("messageAnimation",[O(":enter",[z({opacity:0,transform:"translateY(-25%)"}),E("{{showTransitionParams}}")]),O(":leave",[E("{{hideTransitionParams}}",z({height:0,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,opacity:0}))])])]},changeDetection:0})}return e})(),Me=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=H({type:e});static \u0275inj=R({imports:[P,$,$]})}return e})();function Ye(e,m){e&1&&_(0,"p-message",4)}var xe=class e{companyState=M(ye);form=h(v({},this.companyState.profile()));savedHint=h(!1);save(){let n=this.form(),{location:m}=n,t=N(n,["location"]);this.companyState.update(t),this.savedHint.set(!0),setTimeout(()=>this.savedHint.set(!1),2500)}resetToDefault(){this.companyState.resetToDefault(),this.form.set(v({},this.companyState.profile()))}patch(m,t){this.form.update(n=>F(v({},n),{[m]:t}))}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=x({type:e,selectors:[["app-company-settings"]],decls:92,vars:22,consts:[[1,"settings-page"],[1,"page-header"],["routerLink","/dashboard",1,"back-link"],[1,"pi","pi-arrow-left"],["severity","success","text","Stammdaten wurden gespeichert.","styleClass","save-hint"],[1,"settings-grid"],["header","Allgemein"],[1,"field"],["for","name"],["id","name","pInputText","",3,"ngModelChange","ngModel"],["for","legalForm"],["id","legalForm","pInputText","",3,"ngModelChange","ngModel"],[1,"field-row"],["for","street"],["id","street","pInputText","",3,"ngModelChange","ngModel"],[1,"field","field-zip"],["for","zip"],["id","zip","pInputText","",3,"ngModelChange","ngModel"],["for","city"],["id","city","pInputText","",3,"ngModelChange","ngModel"],[1,"hint"],["header","Kontakt"],["for","phone"],["id","phone","pInputText","",3,"ngModelChange","ngModel"],["for","fax"],["id","fax","pInputText","",3,"ngModelChange","ngModel"],["for","email"],["id","email","pInputText","","type","email",3,"ngModelChange","ngModel"],["for","website"],["id","website","pInputText","",3,"ngModelChange","ngModel"],["header","Leitung"],["for","managingDirector"],["id","managingDirector","pInputText","",3,"ngModelChange","ngModel"],["for","careServiceManager"],["id","careServiceManager","pInputText","",3,"ngModelChange","ngModel"],["header","Rechtliches & Abrechnung"],["for","commercialRegister"],["id","commercialRegister","pInputText","",3,"ngModelChange","ngModel"],["for","vatId"],["id","vatId","pInputText","",3,"ngModelChange","ngModel"],["for","taxNumber"],["id","taxNumber","pInputText","",3,"ngModelChange","ngModel"],["for","ikNumber"],["id","ikNumber","pInputText","",3,"ngModelChange","ngModel"],["header","Bankverbindung"],["for","bankName"],["id","bankName","pInputText","",3,"ngModelChange","ngModel"],["for","iban"],["id","iban","pInputText","",3,"ngModelChange","ngModel"],["for","bic"],["id","bic","pInputText","",3,"ngModelChange","ngModel"],[1,"actions"],["label","Zur\xFCcksetzen auf Standard","severity","secondary",3,"onClick","text"],["label","Speichern","icon","pi pi-check",3,"onClick"]],template:function(t,n){t&1&&(o(0,"div",0)(1,"header",1)(2,"a",2),_(3,"i",3),c(4," Zur\xFCck"),i(),o(5,"h2"),c(6,"Unternehmensstammdaten"),i()(),d(7,Ye,1,0,"p-message",4),o(8,"div",5)(9,"p-card",6)(10,"div",7)(11,"label",8),c(12,"Firmenname"),i(),o(13,"input",9),g("ngModelChange",function(s){return n.patch("name",s)}),i()(),o(14,"div",7)(15,"label",10),c(16,"Rechtsform"),i(),o(17,"input",11),g("ngModelChange",function(s){return n.patch("legalForm",s)}),i()(),o(18,"div",12)(19,"div",7)(20,"label",13),c(21,"Stra\xDFe & Hausnummer"),i(),o(22,"input",14),g("ngModelChange",function(s){return n.patch("street",s)}),i()(),o(23,"div",15)(24,"label",16),c(25,"PLZ"),i(),o(26,"input",17),g("ngModelChange",function(s){return n.patch("zip",s)}),i()(),o(27,"div",7)(28,"label",18),c(29,"Ort"),i(),o(30,"input",19),g("ngModelChange",function(s){return n.patch("city",s)}),i()()(),o(31,"p",20),c(32),i()(),o(33,"p-card",21)(34,"div",7)(35,"label",22),c(36,"Telefon"),i(),o(37,"input",23),g("ngModelChange",function(s){return n.patch("phone",s)}),i()(),o(38,"div",7)(39,"label",24),c(40,"Fax"),i(),o(41,"input",25),g("ngModelChange",function(s){return n.patch("fax",s)}),i()(),o(42,"div",7)(43,"label",26),c(44,"E-Mail"),i(),o(45,"input",27),g("ngModelChange",function(s){return n.patch("email",s)}),i()(),o(46,"div",7)(47,"label",28),c(48,"Website"),i(),o(49,"input",29),g("ngModelChange",function(s){return n.patch("website",s)}),i()()(),o(50,"p-card",30)(51,"div",7)(52,"label",31),c(53,"Gesch\xE4ftsf\xFChrung"),i(),o(54,"input",32),g("ngModelChange",function(s){return n.patch("managingDirector",s)}),i()(),o(55,"div",7)(56,"label",33),c(57,"Pflegedienstleitung (PDL)"),i(),o(58,"input",34),g("ngModelChange",function(s){return n.patch("careServiceManager",s)}),i()()(),o(59,"p-card",35)(60,"div",7)(61,"label",36),c(62,"Handelsregister"),i(),o(63,"input",37),g("ngModelChange",function(s){return n.patch("commercialRegister",s)}),i()(),o(64,"div",7)(65,"label",38),c(66,"USt-IdNr."),i(),o(67,"input",39),g("ngModelChange",function(s){return n.patch("vatId",s)}),i()(),o(68,"div",7)(69,"label",40),c(70,"Steuernummer"),i(),o(71,"input",41),g("ngModelChange",function(s){return n.patch("taxNumber",s)}),i()(),o(72,"div",7)(73,"label",42),c(74,"IK-Nummer (Institutionskennzeichen)"),i(),o(75,"input",43),g("ngModelChange",function(s){return n.patch("ikNumber",s)}),i()()(),o(76,"p-card",44)(77,"div",7)(78,"label",45),c(79,"Bank"),i(),o(80,"input",46),g("ngModelChange",function(s){return n.patch("bankName",s)}),i()(),o(81,"div",7)(82,"label",47),c(83,"IBAN"),i(),o(84,"input",48),g("ngModelChange",function(s){return n.patch("iban",s)}),i()(),o(85,"div",7)(86,"label",49),c(87,"BIC"),i(),o(88,"input",50),g("ngModelChange",function(s){return n.patch("bic",s)}),i()()()(),o(89,"div",51)(90,"p-button",52),g("onClick",function(){return n.resetToDefault()}),i(),o(91,"p-button",53),g("onClick",function(){return n.save()}),i()()()),t&2&&(a(7),u(n.savedHint()?7:-1),a(6),r("ngModel",n.form().name),a(4),r("ngModel",n.form().legalForm),a(5),r("ngModel",n.form().street),a(4),r("ngModel",n.form().zip),a(4),r("ngModel",n.form().city),a(2),U(" Geokoordinaten (Firmensitz-Marker auf der Tourenkarte): ",n.form().location.lat,", ",n.form().location.lng," \u2013 wird hier nicht automatisch neu berechnet, falls die Adresse ge\xE4ndert wird. "),a(5),r("ngModel",n.form().phone),a(4),r("ngModel",n.form().fax),a(4),r("ngModel",n.form().email),a(4),r("ngModel",n.form().website),a(5),r("ngModel",n.form().managingDirector),a(4),r("ngModel",n.form().careServiceManager),a(5),r("ngModel",n.form().commercialRegister),a(4),r("ngModel",n.form().vatId),a(4),r("ngModel",n.form().taxNumber),a(4),r("ngModel",n.form().ikNumber),a(5),r("ngModel",n.form().bankName),a(4),r("ngModel",n.form().iban),a(4),r("ngModel",n.form().bic),a(2),r("text",!0))},dependencies:[he,ue,fe,_e,oe,ce,le,be,Ce,de,pe,Me,P],styles:[".settings-page[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;max-width:64rem}.page-header[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.3rem}.page-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0}.page-header[_ngcontent-%COMP%]   .back-link[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.35rem;color:var(--text-muted);text-decoration:none;font-size:.82rem;width:fit-content}.page-header[_ngcontent-%COMP%]   .back-link[_ngcontent-%COMP%]:hover{color:var(--text-heading)}.settings-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:.85rem}.field[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.25rem;margin-bottom:.75rem}.field[_ngcontent-%COMP%]:last-child{margin-bottom:0}.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:.78rem;color:var(--text-muted);font-weight:600}.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%}.field-row[_ngcontent-%COMP%]{display:flex;gap:.6rem}.field-row[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]{flex:1 1 auto}.field-row[_ngcontent-%COMP%]   .field-zip[_ngcontent-%COMP%]{flex:0 0 6rem}.hint[_ngcontent-%COMP%]{color:var(--text-muted);font-size:.78rem;margin:.25rem 0 0}.actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:.5rem}  .save-hint{margin-bottom:.25rem}"]})};export{xe as CompanySettingsComponent};
