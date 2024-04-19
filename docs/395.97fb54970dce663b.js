"use strict";(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[395],{3395:(O,p,l)=>{l.r(p),l.d(p,{AnimationModule:()=>k});var g=l(6814),d=l(6749),e=l(8124),m=l(5881);function h(r,s){if(1&r&&(e.TgZ(0,"li",2)(1,"a",3),e._uU(2),e.qZA()()),2&r){const t=s.$implicit;e.Q6J("ngbNavItem",t.link),e.xp6(1),e.Q6J("routerLink",t.link),e.xp6(1),e.Oqu(t.title)}}function f(r,s){if(1&r&&(e.TgZ(0,"div",4),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Oqu(t.error)}}const b=(r,s,t)=>({"grid-square":!0,"open-square":r,"game-over-1":s,"game-over-2":t});function _(r,s){if(1&r){const t=e.EpF();e.TgZ(0,"div",5),e.NdJ("click",function(){const a=e.CHM(t).index,o=e.oxw();return e.KtG(o.makeMove(a))}),e._uU(1),e.qZA()}if(2&r){const t=s.$implicit,n=s.index,i=e.oxw();e.Q6J("id",n)("ngClass",e.kEZ(3,b,16===t,i.gameOver&&1===i.dances[n],i.gameOver&&2===i.dances[n])),e.xp6(1),e.hij("",t," ")}}function C(r,s){1&r&&(e.TgZ(0,"div",6),e._uU(1,"Congratulations! You have won!"),e.qZA())}const M=[{path:"",component:(()=>{class r{router;currentPath;routerSubscription;links=[{title:"Square Game",link:"square-game"},{title:"Transitions",link:"transitions"},{title:"Animations",link:"animations"},{title:"JavaScript Animations",link:"javascript"}];constructor(t){this.router=t}ngOnInit(){this.checkForSpecificRoute(),this.currentPath=this.router.url.replace("/animation/",""),this.routerSubscription=this.router.events.subscribe(t=>{t instanceof d.m2&&(this.checkForSpecificRoute(),this.currentPath=t.url.replace("/animation/",""))})}checkForSpecificRoute(){"/animation"===this.router.url&&this.router.navigate([`${this.router.url}/${this.links[0].link}`])}ngOnDestroy(){this.routerSubscription.unsubscribe()}resetFocus(){window.focus()}static \u0275fac=function(n){return new(n||r)(e.Y36(d.F0))};static \u0275cmp=e.Xpm({type:r,selectors:[["app-css-animations"]],decls:3,vars:2,consts:[["ngbNav","","destroyOnHide","true",1,"nav-tabs",3,"activeId","navChange"],[3,"ngbNavItem",4,"ngFor","ngForOf"],[3,"ngbNavItem"],["ngbNavLink","",3,"routerLink"]],template:function(n,i){1&n&&(e.TgZ(0,"ul",0),e.NdJ("navChange",function(){return i.resetFocus()}),e.YNc(1,h,3,3,"li",1),e.qZA(),e._UZ(2,"router-outlet")),2&n&&(e.Q6J("activeId",i.currentPath),e.xp6(1),e.Q6J("ngForOf",i.links))},dependencies:[g.sg,m.Pz,m.nv,m.Is,m.Vx,m.tO,d.lC,d.rH],styles:['[_nghost-%COMP%]{height:100%}.nav-tabs[_ngcontent-%COMP%]{background-color:var(--accent-purple);border:none;z-index:var(--z-nav-tabs);padding-top:.25em;box-shadow:0 3px 5px var(--accent-purple-dark)}.nav-item[_ngcontent-%COMP%]{background-color:inherit;margin-right:.25em}.nav-link.active[_ngcontent-%COMP%]{background-color:var(--accent-purple-dark);color:var(--primary-white)}.nav-link[_ngcontent-%COMP%]{position:relative;color:var(--primary-white);border-radius:0;border:none;font-family:var(--font-header);text-decoration:none}.nav-link[_ngcontent-%COMP%]:focus, .nav-link[_ngcontent-%COMP%]:hover{outline:none;background-color:var(--accent-purple-dark)}.nav-link.active[_ngcontent-%COMP%]:after{position:absolute;inset:.2em;content:"";border-top:2px solid var(--primary-white);border-left:2px solid var(--primary-white);border-right:2px solid var(--primary-white)}.nav-link[_ngcontent-%COMP%]:before{border-bottom:2px solid var(--primary-white);content:"";position:absolute;inset:.2em;transform:scaleX(0);transition:transform .25s ease-in-out}.nav-link[_ngcontent-%COMP%]:hover:before, .nav-link[_ngcontent-%COMP%]:focus:before{transform:scaleX(1)}']})}return r})(),children:[{path:"square-game",component:(()=>{class r{grid=[];dances=[];error;gameOver=!1;ngOnInit(){for(let i=1;i<17;i++)this.grid.push(i),Math.floor((i-1)/4)%2==0?this.dances.push(i%2==0?1:2):this.dances.push(i%2==0?2:1);const t=this.grid.findIndex(i=>16===i),n=this.getNumberOfInversions();Math.floor(t/4)%2==0&&n%2!=1?(this.grid[t]=this.grid[15],this.grid[15]=16):Math.floor(t/4)%2==1&&n%2!=0&&(this.grid[t]=this.grid[11],this.grid[11]=16)}makeMove(t){if(this.gameOver)return;const n=this.grid.findIndex(i=>16===i);if(this.isValidMoveV2(t,n)){const i=this.getMoves(t,n);i.indicesToMove.forEach(a=>{document.getElementById(a.toString(10)).setAttribute("moveDirection",i.direction)}),delete this.error,setTimeout(()=>{const a=JSON.parse(JSON.stringify(this.grid));i.indicesToMove.forEach((o,u)=>{document.getElementById(o.toString(10)).removeAttribute("moveDirection"),0!==u&&(this.grid[o]=a[i.indicesToMove[u-1]])}),this.grid[n]=a[i.indicesToMove[i.indicesToMove.length-1]],this.grid[t]=16,this.isGameOver()&&(console.log("Game Over!"),this.gameOver=!0)},200)}}isValidMoveV2(t,n){return n%4==t%4||Math.floor(n/4)===Math.floor(t/4)}getMoves(t,n){const i=n-t,a=[];if(i>0&&i<4){for(let o=t;o<n;o++)a.push(o);return{direction:"right",indicesToMove:a}}if(i<0&&i>-4){for(let o=t;o>n;o--)a.push(o);return{direction:"left",indicesToMove:a}}if(i>0){for(let o=t;o<n;o+=4)a.push(o);return{direction:"down",indicesToMove:a}}for(let o=t;o>n;o-=4)a.push(o);return{direction:"up",indicesToMove:a}}isValidMove(t,n){let i=!1;switch(n%4){case 0:i=t===n+1||this.isValidVerticalMove(t,n);break;case 1:case 2:i=t===n-1||t===n+1||this.isValidVerticalMove(t,n);break;case 3:i=t===n-1||this.isValidVerticalMove(t,n);break;default:return}if(i)return t===n-1?"right":t===n+1?"left":t<n?"down":"up"}isValidVerticalMove(t,n){switch(Math.floor(n/4)){case 0:return t===n+4;case 1:case 2:return t===n-4||t===n+4;case 3:return t===n-4;default:return!1}}isGameOver(){for(let t=0;t<16;t++)if(this.grid[t]!==t+1)return!1;return!0}getNumberOfInversions(){let t=0;for(let n=0;n<this.grid.length-1;n++)for(let i=n+1;i<this.grid.length-1;i++)this.grid[n]>this.grid[i]&&t++;return t}static \u0275fac=function(n){return new(n||r)};static \u0275cmp=e.Xpm({type:r,selectors:[["app-square-game"]],decls:4,vars:3,consts:[["class","error-message",4,"ngIf"],[1,"grid-game"],[3,"id","ngClass","click",4,"ngFor","ngForOf"],["class","game-over-message",4,"ngIf"],[1,"error-message"],[3,"id","ngClass","click"],[1,"game-over-message"]],template:function(n,i){1&n&&(e.YNc(0,f,2,1,"div",0),e.TgZ(1,"div",1),e.YNc(2,_,2,7,"div",2),e.qZA(),e.YNc(3,C,2,0,"div",3)),2&n&&(e.Q6J("ngIf",i.error),e.xp6(2),e.Q6J("ngForOf",i.grid),e.xp6(1),e.Q6J("ngIf",i.gameOver))},dependencies:[g.mk,g.sg,g.O5],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;--grid-element-width: 10em;--grid-element-gap: .5em;--grid-movement-duration: .2s}.error-message[_ngcontent-%COMP%]{position:absolute;top:3em;color:var(--accent-pink);font-size:1.2em;padding:1em}.grid-game[_ngcontent-%COMP%]{display:grid;grid-template-columns:var(--grid-element-width) var(--grid-element-width) var(--grid-element-width) var(--grid-element-width);grid-template-rows:var(--grid-element-width) var(--grid-element-width) var(--grid-element-width) var(--grid-element-width);grid-gap:var(--grid-element-gap);padding:2em;border:2px solid var(--accent-purple-dark)}.grid-game[_ngcontent-%COMP%]   .grid-square[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;background-color:var(--primary-white);border:2px solid var(--accent-purple)}.grid-game[_ngcontent-%COMP%]   .grid-square[_ngcontent-%COMP%]:hover{animation:_ngcontent-%COMP%_pulse 1s infinite alternate;cursor:pointer}.grid-game[_ngcontent-%COMP%]   .open-square[_ngcontent-%COMP%]{visibility:hidden}.grid-game[_ngcontent-%COMP%]   .grid-square[moveDirection=up][_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_moveUp;width:var(--grid-element-width);height:var(--grid-element-width);animation-duration:var(--grid-movement-duration)}.grid-game[_ngcontent-%COMP%]   .grid-square[moveDirection=down][_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_moveDown;width:var(--grid-element-width);height:var(--grid-element-width);animation-duration:var(--grid-movement-duration)}.grid-game[_ngcontent-%COMP%]   .grid-square[moveDirection=right][_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_moveRight;width:var(--grid-element-width);height:var(--grid-element-width);animation-duration:var(--grid-movement-duration)}.grid-game[_ngcontent-%COMP%]   .grid-square[moveDirection=left][_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_moveLeft;width:var(--grid-element-width);height:var(--grid-element-width);animation-duration:var(--grid-movement-duration)}.grid-game[_ngcontent-%COMP%]   .game-over-1[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_danceOne 4s infinite alternate}.grid-game[_ngcontent-%COMP%]   .game-over-2[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_danceTwo 4s infinite}@keyframes _ngcontent-%COMP%_pulse{0%{background-color:var(--primary-white);transform:scale(1)}to{background-color:var(--accent-purple-light);transform:scale(1.05)}}@keyframes _ngcontent-%COMP%_danceOne{0%{background-color:var(--accent-purple-dark);color:var(--primary-white);transform:rotate(0)}50%{background-color:var(--accent-purple-light);color:var(--primary-black);transform:rotate(360deg)}to{background-color:var(--accent-purple-dark);color:var(--primary-white);transform:rotate(720deg)}}@keyframes _ngcontent-%COMP%_danceTwo{0%{background-color:var(--accent-purple-light);color:var(--primary-black);transform:rotate(0)}50%{background-color:var(--accent-purple-dark);color:var(--primary-white);transform:rotate(-360deg)}to{background-color:var(--accent-purple-light);color:var(--primary-black);transform:rotate(-720deg)}}@keyframes _ngcontent-%COMP%_moveUp{0%{margin-top:0}to{margin-top:calc(-1 * (var(--grid-element-width) + var(--grid-element-gap)))}}@keyframes _ngcontent-%COMP%_moveDown{0%{margin-top:0}to{margin-top:calc(var(--grid-element-width) + var(--grid-element-gap))}}@keyframes _ngcontent-%COMP%_moveRight{0%{margin-left:0}to{margin-left:calc(var(--grid-element-width) + var(--grid-element-gap))}}@keyframes _ngcontent-%COMP%_moveLeft{0%{margin-left:0}to{margin-left:calc(-1 * (var(--grid-element-width) + var(--grid-element-gap)))}}"]})}return r})()},{path:"transitions",component:(()=>{class r{moveButton(){const t=document.getElementById("button1");"true"===t.getAttribute("movedRight")?t.setAttribute("movedRight","false"):t.setAttribute("movedRight","true")}scaleButton(){const t=document.getElementById("button2");"true"===t.getAttribute("scaled")?t.setAttribute("scaled","false"):t.setAttribute("scaled","true")}static \u0275fac=function(n){return new(n||r)};static \u0275cmp=e.Xpm({type:r,selectors:[["app-transitions"]],decls:10,vars:0,consts:[[1,"transitions"],[1,"title"],[1,"button-row"],["id","button1",1,"btn","btn-primary",3,"click"],["id","button2",1,"btn","btn-primary",3,"click"],["id","button3",1,"btn","btn-primary"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"h1",1),e._uU(2,"Transitions"),e.qZA(),e.TgZ(3,"div",2)(4,"button",3),e.NdJ("click",function(){return i.moveButton()}),e._uU(5,"Click Me!"),e.qZA()(),e.TgZ(6,"button",4),e.NdJ("click",function(){return i.scaleButton()}),e._uU(7,"Click Me!"),e.qZA(),e.TgZ(8,"button",5),e._uU(9,"Hover on Me!"),e.qZA()())},styles:[".transitions[_ngcontent-%COMP%]{margin:2em 5vw;height:100%;display:flex;flex-direction:column;align-items:center}.button-row[_ngcontent-%COMP%]{display:flex;padding:1vw;border-radius:5px;border:2px solid var(--accent-purple);width:100%}#button1[_ngcontent-%COMP%]{width:8vw;transition:transform 2s ease-in-out}#button1[movedright=true][_ngcontent-%COMP%]{transform:translate(80vw)}#button2[_ngcontent-%COMP%]{margin-top:5em;text-align:center;width:10em;height:20em;transition:transform 1s ease-in}#button2[scaled=true][_ngcontent-%COMP%]{transform:scale(2,.5) rotate(180deg)}#button3[_ngcontent-%COMP%]{margin-top:2em;width:10em;transition:width .25s ease}#button3[_ngcontent-%COMP%]:hover{width:20em}"]})}return r})()},{path:"animations",component:(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275cmp=e.Xpm({type:r,selectors:[["app-animations"]],decls:4,vars:0,consts:[[1,"animations"],[1,"animated"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"h1"),e._uU(2,"Animations"),e.qZA(),e._UZ(3,"div",1),e.qZA())},styles:[".animations[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;align-items:center;margin:5em}.animated[_ngcontent-%COMP%]{margin-top:15em;width:10em;height:10em;background:var(--accent-purple);border-radius:5px;border:2px solid var(--accent-purple-dark);animation:_ngcontent-%COMP%_bouncearound 10s infinite,borderpulse 2s alternate infinite ease}@keyframes _ngcontent-%COMP%_bouncearound{10%{transform:translate(10em,10em) rotate(90deg);background:white}20%{transform:translate(-10em,-5em) rotate(-45deg);background:red}30%{transform:translate(-5em,15em) rotate(270deg) scale(2,.25);background:green}50%{transform:translate(0) rotate(0);background:black}75%{transform:scale(1.5,.5) rotate(135deg);background:blue}to{transform:translate(0) rotate(180deg) scale(1);background:var(--accent-purple)}}@keyframes _ngcontent-%COMP%_borderpulse{to{border:10px solid var(--accent-purple)}}"]})}return r})()},{path:"javascript",component:(()=>{class r{isTitleBig=!1;boxX=0;boxY=0;mouseDownX;mouseDownY;boxElement;containerElement;isMouseDown;ngOnInit(){this.boxElement=document.getElementById("drag-me"),this.containerElement=document.getElementById("container"),this.boxElement.addEventListener("mousedown",t=>this.mouseDown(t)),document.addEventListener("mousemove",t=>this.dragBox(t)),document.addEventListener("mouseup",t=>this.mouseUp(t)),document.getElementById("animation-title").style.fontSize="2em",document.addEventListener("keydown",t=>this.animateTitle(t))}dragBox(t){this.isMouseDown&&(this.boxElement.style.transform=`translate(${this.getDeltaX(t)}px, ${this.getDeltaY(t)}px)`)}mouseDown(t){this.boxElement.style.animation="pulse 0.5s infinite alternate",this.boxElement.style.boxShadow="0 2px 2px var(--accent-purple-dark)",this.mouseDownX=t.x,this.mouseDownY=t.y,this.isMouseDown=!0}mouseUp(t){this.isMouseDown&&(this.boxElement.style.animation="",this.boxElement.style.boxShadow="",this.boxX=this.getDeltaX(t),this.boxY=this.getDeltaY(t),this.isMouseDown=!1)}getDeltaX(t){return Math.max(Math.min(this.boxX+t.x-this.mouseDownX,this.containerElement.clientWidth-this.boxElement.clientWidth),0)}getDeltaY(t){return Math.max(Math.min(this.boxY+t.y-this.mouseDownY,this.containerElement.clientHeight-this.boxElement.clientHeight),0)}animateTitle(t){if("Enter"===t.code){let c=function(w){return parseFloat(w.style.fontSize.replace("em",""))};const n=document.getElementById("animation-title"),i=1,a=50,o=c(n),u=setInterval(()=>{c(n)<o+i&&!this.isTitleBig?(n.style.fontSize=(c(n)+i/a).toString()+"em",console.log("current font size is"+c(n))):c(n)>o-i&&this.isTitleBig?(n.style.fontSize=(c(n)-i/a).toString()+"em",console.log("current font size is"+c(n))):(clearInterval(u),this.isTitleBig=!this.isTitleBig)},5)}}static \u0275fac=function(n){return new(n||r)};static \u0275cmp=e.Xpm({type:r,selectors:[["app-javascript-animations"]],decls:6,vars:0,consts:[[1,"javascript-animation"],["id","animation-title"],["id","container",1,"draggable-area"],["id","drag-me",1,"draggable-box"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"h1",1),e._uU(2,"JavaScript Animations"),e.qZA(),e.TgZ(3,"div",2)(4,"div",3),e._uU(5,"Drag Me!"),e.qZA()()())},styles:[".javascript-animation[_ngcontent-%COMP%]{margin:2em;height:100vh;overflow:hidden}.draggable-area[_ngcontent-%COMP%]{margin-top:2em;background:var(--white);border:5px solid var(--accent-purple-dark);width:100%;height:50%;border-radius:5px}.draggable-box[_ngcontent-%COMP%]{color:var(--white);background:var(--accent-purple);width:10em;height:10em;border-radius:5px;border:2px solid var(--accent-purple-dark);display:flex;justify-content:center;align-items:center;cursor:pointer}@keyframes _ngcontent-%COMP%_pulse{0%{background:var(--accent-purple)}to{background:var(--accent-purple-dark)}}"]})}return r})()}]}];let k=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275mod=e.oAB({type:r});static \u0275inj=e.cJS({imports:[g.ez,m.IJ,d.Bz.forChild(M)]})}return r})()}}]);