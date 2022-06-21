"use strict";(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[700],{3700:(O,h,m)=>{m.r(h),m.d(h,{AnimationModule:()=>_});var l=m(9808),d=m(8555),e=m(5e3),g=m(7077);function v(r,a){if(1&r&&(e.TgZ(0,"li",2),e.TgZ(1,"a",3),e._uU(2),e.qZA(),e.qZA()),2&r){const t=a.$implicit;e.Q6J("ngbNavItem",t.link),e.xp6(1),e.Q6J("routerLink",t.link),e.xp6(1),e.Oqu(t.title)}}function b(r,a){if(1&r&&(e.TgZ(0,"div",4),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Oqu(t.error)}}const k=function(r,a,t){return{"grid-square":!0,"open-square":r,"game-over-1":a,"game-over-2":t}};function w(r,a){if(1&r){const t=e.EpF();e.TgZ(0,"div",5),e.NdJ("click",function(){const s=e.CHM(t).index;return e.oxw().makeMove(s)}),e._uU(1),e.qZA()}if(2&r){const t=a.$implicit,n=a.index,i=e.oxw();e.Q6J("id",n)("ngClass",e.kEZ(3,k,16===t,i.gameOver&&1===i.dances[n],i.gameOver&&2===i.dances[n])),e.xp6(1),e.hij("",t," ")}}function y(r,a){1&r&&(e.TgZ(0,"div",6),e._uU(1,"Congratulations! You have won!"),e.qZA())}const C=[{path:"",component:(()=>{class r{constructor(t){this.router=t,this.links=[{title:"Square Game",link:"square-game"},{title:"Transitions",link:"transitions"},{title:"Animations",link:"animations"},{title:"JavaScript Animations",link:"javascript"}]}ngOnInit(){this.checkForSpecificRoute(),this.currentPath=this.router.url.replace("/animation/",""),this.routerSubscription=this.router.events.subscribe(t=>{t instanceof d.m2&&(this.checkForSpecificRoute(),this.currentPath=t.url.replace("/animation/",""))})}checkForSpecificRoute(){"/animation"===this.router.url&&this.router.navigate([`${this.router.url}/${this.links[0].link}`])}ngOnDestroy(){this.routerSubscription.unsubscribe()}resetFocus(){window.focus()}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(d.F0))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-css-animations"]],decls:3,vars:2,consts:[["ngbNav","","destroyOnHide","true",1,"nav-tabs",3,"activeId","navChange"],[3,"ngbNavItem",4,"ngFor","ngForOf"],[3,"ngbNavItem"],["ngbNavLink","",3,"routerLink"]],template:function(t,n){1&t&&(e.TgZ(0,"ul",0),e.NdJ("navChange",function(){return n.resetFocus()}),e.YNc(1,v,3,3,"li",1),e.qZA(),e._UZ(2,"router-outlet")),2&t&&(e.Q6J("activeId",n.currentPath),e.xp6(1),e.Q6J("ngForOf",n.links))},directives:[g.Pz,l.sg,g.nv,g.Vx,d.yS,d.lC],styles:['[_nghost-%COMP%]{height:100%}.nav-tabs[_ngcontent-%COMP%]{background-color:var(--accent-purple);border:none;z-index:var(--z-nav-tabs);padding-top:.25em;box-shadow:0 3px 5px var(--accent-purple-dark)}.nav-item[_ngcontent-%COMP%]{background-color:inherit;margin-right:.25em}.nav-link.active[_ngcontent-%COMP%]{background-color:var(--accent-purple-dark);color:var(--primary-white)}.nav-link[_ngcontent-%COMP%]{position:relative;color:var(--primary-white);border-radius:0;border:none;font-family:var(--font-header);text-decoration:none}.nav-link[_ngcontent-%COMP%]:focus, .nav-link[_ngcontent-%COMP%]:hover{outline:none;background-color:var(--accent-purple-dark)}.nav-link.active[_ngcontent-%COMP%]:after{position:absolute;inset:.2em;content:"";border-top:2px solid var(--primary-white);border-left:2px solid var(--primary-white);border-right:2px solid var(--primary-white)}.nav-link[_ngcontent-%COMP%]:before{border-bottom:2px solid var(--primary-white);content:"";position:absolute;inset:.2em;transform:scaleX(0);transition:transform .25s ease-in-out}.nav-link[_ngcontent-%COMP%]:hover:before, .nav-link[_ngcontent-%COMP%]:focus:before{transform:scaleX(1)}']}),r})(),children:[{path:"square-game",component:(()=>{class r{constructor(){this.grid=[],this.dances=[],this.gameOver=!1}ngOnInit(){for(let i=1;i<17;i++)this.grid.push(i),Math.floor((i-1)/4)%2==0?this.dances.push(i%2==0?1:2):this.dances.push(i%2==0?2:1);const t=this.grid.findIndex(i=>16===i),n=this.getNumberOfInversions();Math.floor(t/4)%2==0&&n%2!=1?(this.grid[t]=this.grid[15],this.grid[15]=16):Math.floor(t/4)%2==1&&n%2!=0&&(this.grid[t]=this.grid[11],this.grid[11]=16)}shuffleArray(t){for(let n=t.length-1;n>0;n--){const i=Math.floor(Math.random()*(n+1)),s=t[n];t[n]=t[i],t[i]=s}}makeMove(t){if(this.gameOver)return;const n=this.grid.findIndex(i=>16===i);if(this.isValidMoveV2(t,n)){const i=this.getMoves(t,n);i.indicesToMove.forEach(s=>{document.getElementById(s.toString(10)).setAttribute("moveDirection",i.direction)}),delete this.error,setTimeout(()=>{const s=JSON.parse(JSON.stringify(this.grid));i.indicesToMove.forEach((o,u)=>{document.getElementById(o.toString(10)).removeAttribute("moveDirection"),0!==u&&(this.grid[o]=s[i.indicesToMove[u-1]])}),this.grid[n]=s[i.indicesToMove[i.indicesToMove.length-1]],this.grid[t]=16,this.isGameOver()&&(console.log("Game Over!"),this.gameOver=!0)},200)}}isValidMoveV2(t,n){return n%4==t%4||Math.floor(n/4)===Math.floor(t/4)}getMoves(t,n){const i=n-t,s=[];if(i>0&&i<4){for(let o=t;o<n;o++)s.push(o);return{direction:"right",indicesToMove:s}}if(i<0&&i>-4){for(let o=t;o>n;o--)s.push(o);return{direction:"left",indicesToMove:s}}if(i>0){for(let o=t;o<n;o+=4)s.push(o);return{direction:"down",indicesToMove:s}}for(let o=t;o>n;o-=4)s.push(o);return{direction:"up",indicesToMove:s}}isValidMove(t,n){let i=!1;switch(n%4){case 0:i=t===n+1||this.isValidVerticalMove(t,n);break;case 1:case 2:i=t===n-1||t===n+1||this.isValidVerticalMove(t,n);break;case 3:i=t===n-1||this.isValidVerticalMove(t,n);break;default:return}if(i)return t===n-1?"right":t===n+1?"left":t<n?"down":"up"}isValidVerticalMove(t,n){switch(Math.floor(n/4)){case 0:return t===n+4;case 1:case 2:return t===n-4||t===n+4;case 3:return t===n-4;default:return!1}}isGameOver(){for(let t=0;t<16;t++)if(this.grid[t]!==t+1)return!1;return!0}getNumberOfInversions(){let t=0;for(let n=0;n<this.grid.length-1;n++)for(let i=n+1;i<this.grid.length-1;i++)this.grid[n]>this.grid[i]&&t++;return t}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-square-game"]],decls:4,vars:3,consts:[["class","error-message",4,"ngIf"],[1,"grid-game"],[3,"id","ngClass","click",4,"ngFor","ngForOf"],["class","game-over-message",4,"ngIf"],[1,"error-message"],[3,"id","ngClass","click"],[1,"game-over-message"]],template:function(t,n){1&t&&(e.YNc(0,b,2,1,"div",0),e.TgZ(1,"div",1),e.YNc(2,w,2,7,"div",2),e.qZA(),e.YNc(3,y,2,0,"div",3)),2&t&&(e.Q6J("ngIf",n.error),e.xp6(2),e.Q6J("ngForOf",n.grid),e.xp6(1),e.Q6J("ngIf",n.gameOver))},directives:[l.O5,l.sg,l.mk],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;--grid-element-width: 10em;--grid-element-gap: .5em;--grid-movement-duration: .2s}.error-message[_ngcontent-%COMP%]{position:absolute;top:3em;color:var(--accent-pink);font-size:1.2em;padding:1em}.grid-game[_ngcontent-%COMP%]{display:grid;grid-template-columns:var(--grid-element-width) var(--grid-element-width) var(--grid-element-width) var(--grid-element-width);grid-template-rows:var(--grid-element-width) var(--grid-element-width) var(--grid-element-width) var(--grid-element-width);grid-gap:var(--grid-element-gap);padding:2em;border:2px solid var(--accent-purple-dark)}.grid-game[_ngcontent-%COMP%]   .grid-square[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;background-color:var(--primary-white);border:2px solid var(--accent-purple)}.grid-game[_ngcontent-%COMP%]   .grid-square[_ngcontent-%COMP%]:hover{-webkit-animation:pulse 1s infinite alternate;animation:pulse 1s infinite alternate;cursor:pointer}.grid-game[_ngcontent-%COMP%]   .open-square[_ngcontent-%COMP%]{visibility:hidden}.grid-game[_ngcontent-%COMP%]   .grid-square[moveDirection=up][_ngcontent-%COMP%]{-webkit-animation:moveUp;animation:moveUp;width:var(--grid-element-width);height:var(--grid-element-width);-webkit-animation-duration:var(--grid-movement-duration);animation-duration:var(--grid-movement-duration)}.grid-game[_ngcontent-%COMP%]   .grid-square[moveDirection=down][_ngcontent-%COMP%]{-webkit-animation:moveDown;animation:moveDown;width:var(--grid-element-width);height:var(--grid-element-width);-webkit-animation-duration:var(--grid-movement-duration);animation-duration:var(--grid-movement-duration)}.grid-game[_ngcontent-%COMP%]   .grid-square[moveDirection=right][_ngcontent-%COMP%]{-webkit-animation:moveRight;animation:moveRight;width:var(--grid-element-width);height:var(--grid-element-width);-webkit-animation-duration:var(--grid-movement-duration);animation-duration:var(--grid-movement-duration)}.grid-game[_ngcontent-%COMP%]   .grid-square[moveDirection=left][_ngcontent-%COMP%]{-webkit-animation:moveLeft;animation:moveLeft;width:var(--grid-element-width);height:var(--grid-element-width);-webkit-animation-duration:var(--grid-movement-duration);animation-duration:var(--grid-movement-duration)}.grid-game[_ngcontent-%COMP%]   .game-over-1[_ngcontent-%COMP%]{-webkit-animation:danceOne 4s infinite alternate;animation:danceOne 4s infinite alternate}.grid-game[_ngcontent-%COMP%]   .game-over-2[_ngcontent-%COMP%]{-webkit-animation:danceTwo 4s infinite;animation:danceTwo 4s infinite}@-webkit-keyframes pulse{0%{background-color:var(--primary-white);transform:scale(1)}to{background-color:var(--accent-purple-light);transform:scale(1.05)}}@keyframes pulse{0%{background-color:var(--primary-white);transform:scale(1)}to{background-color:var(--accent-purple-light);transform:scale(1.05)}}@-webkit-keyframes danceOne{0%{background-color:var(--accent-purple-dark);color:var(--primary-white);transform:rotate(0)}50%{background-color:var(--accent-purple-light);color:var(--primary-black);transform:rotate(360deg)}to{background-color:var(--accent-purple-dark);color:var(--primary-white);transform:rotate(720deg)}}@keyframes danceOne{0%{background-color:var(--accent-purple-dark);color:var(--primary-white);transform:rotate(0)}50%{background-color:var(--accent-purple-light);color:var(--primary-black);transform:rotate(360deg)}to{background-color:var(--accent-purple-dark);color:var(--primary-white);transform:rotate(720deg)}}@-webkit-keyframes danceTwo{0%{background-color:var(--accent-purple-light);color:var(--primary-black);transform:rotate(0)}50%{background-color:var(--accent-purple-dark);color:var(--primary-white);transform:rotate(-360deg)}to{background-color:var(--accent-purple-light);color:var(--primary-black);transform:rotate(-720deg)}}@keyframes danceTwo{0%{background-color:var(--accent-purple-light);color:var(--primary-black);transform:rotate(0)}50%{background-color:var(--accent-purple-dark);color:var(--primary-white);transform:rotate(-360deg)}to{background-color:var(--accent-purple-light);color:var(--primary-black);transform:rotate(-720deg)}}@-webkit-keyframes moveUp{0%{margin-top:0}to{margin-top:calc(-1 * (var(--grid-element-width) + var(--grid-element-gap)))}}@keyframes moveUp{0%{margin-top:0}to{margin-top:calc(-1 * (var(--grid-element-width) + var(--grid-element-gap)))}}@-webkit-keyframes moveDown{0%{margin-top:0}to{margin-top:calc(var(--grid-element-width) + var(--grid-element-gap))}}@keyframes moveDown{0%{margin-top:0}to{margin-top:calc(var(--grid-element-width) + var(--grid-element-gap))}}@-webkit-keyframes moveRight{0%{margin-left:0}to{margin-left:calc(var(--grid-element-width) + var(--grid-element-gap))}}@keyframes moveRight{0%{margin-left:0}to{margin-left:calc(var(--grid-element-width) + var(--grid-element-gap))}}@-webkit-keyframes moveLeft{0%{margin-left:0}to{margin-left:calc(-1 * (var(--grid-element-width) + var(--grid-element-gap)))}}@keyframes moveLeft{0%{margin-left:0}to{margin-left:calc(-1 * (var(--grid-element-width) + var(--grid-element-gap)))}}"]}),r})()},{path:"transitions",component:(()=>{class r{ngOnInit(){}moveButton(){const t=document.getElementById("button1");"true"===t.getAttribute("movedRight")?t.setAttribute("movedRight","false"):t.setAttribute("movedRight","true")}scaleButton(){const t=document.getElementById("button2");"true"===t.getAttribute("scaled")?t.setAttribute("scaled","false"):t.setAttribute("scaled","true")}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-transitions"]],decls:10,vars:0,consts:[[1,"transitions"],[1,"title"],[1,"button-row"],["id","button1",1,"btn","btn-primary",3,"click"],["id","button2",1,"btn","btn-primary",3,"click"],["id","button3",1,"btn","btn-primary"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"h1",1),e._uU(2,"Transitions"),e.qZA(),e.TgZ(3,"div",2),e.TgZ(4,"button",3),e.NdJ("click",function(){return n.moveButton()}),e._uU(5,"Click Me!"),e.qZA(),e.qZA(),e.TgZ(6,"button",4),e.NdJ("click",function(){return n.scaleButton()}),e._uU(7,"Click Me!"),e.qZA(),e.TgZ(8,"button",5),e._uU(9,"Hover on Me!"),e.qZA(),e.qZA())},styles:[".transitions[_ngcontent-%COMP%]{margin:2em 5vw;height:100%;display:flex;flex-direction:column;align-items:center}.button-row[_ngcontent-%COMP%]{display:flex;padding:1vw;border-radius:5px;border:2px solid var(--accent-purple);width:100%}#button1[_ngcontent-%COMP%]{width:8vw;transition:transform 2s ease-in-out}#button1[movedright=true][_ngcontent-%COMP%]{transform:translate(80vw)}#button2[_ngcontent-%COMP%]{margin-top:5em;text-align:center;width:10em;height:20em;transition:transform 1s ease-in}#button2[scaled=true][_ngcontent-%COMP%]{transform:scale(2,.5) rotate(180deg)}#button3[_ngcontent-%COMP%]{margin-top:2em;width:10em;transition:width .25s ease}#button3[_ngcontent-%COMP%]:hover{width:20em}"]}),r})()},{path:"animations",component:(()=>{class r{constructor(){}ngOnInit(){}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-animations"]],decls:4,vars:0,consts:[[1,"animations"],[1,"animated"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"h1"),e._uU(2,"Animations"),e.qZA(),e._UZ(3,"div",1),e.qZA())},styles:[".animations[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;align-items:center;margin:5em}.animated[_ngcontent-%COMP%]{margin-top:15em;width:10em;height:10em;background:var(--accent-purple);border-radius:5px;border:2px solid var(--accent-purple-dark);-webkit-animation:bouncearound 10s infinite,borderpulse 2s alternate infinite ease;animation:bouncearound 10s infinite,borderpulse 2s alternate infinite ease}@-webkit-keyframes bouncearound{10%{transform:translate(10em,10em) rotate(90deg);background:white}20%{transform:translate(-10em,-5em) rotate(-45deg);background:red}30%{transform:translate(-5em,15em) rotate(270deg) scale(2,.25);background:green}50%{transform:translate(0) rotate(0);background:black}75%{transform:scale(1.5,.5) rotate(135deg);background:blue}to{transform:translate(0) rotate(180deg) scale(1);background:var(--accent-purple)}}@keyframes bouncearound{10%{transform:translate(10em,10em) rotate(90deg);background:white}20%{transform:translate(-10em,-5em) rotate(-45deg);background:red}30%{transform:translate(-5em,15em) rotate(270deg) scale(2,.25);background:green}50%{transform:translate(0) rotate(0);background:black}75%{transform:scale(1.5,.5) rotate(135deg);background:blue}to{transform:translate(0) rotate(180deg) scale(1);background:var(--accent-purple)}}@-webkit-keyframes borderpulse{to{border:10px solid var(--accent-purple)}}@keyframes borderpulse{to{border:10px solid var(--accent-purple)}}"]}),r})()},{path:"javascript",component:(()=>{class r{constructor(){this.isTitleBig=!1,this.boxX=0,this.boxY=0}ngOnInit(){this.boxElement=document.getElementById("drag-me"),this.containerElement=document.getElementById("container"),this.boxElement.addEventListener("mousedown",t=>this.mouseDown(t)),document.addEventListener("mousemove",t=>this.dragBox(t)),document.addEventListener("mouseup",t=>this.mouseUp(t)),document.getElementById("animation-title").style.fontSize="2em",document.addEventListener("keydown",t=>this.animateTitle(t))}dragBox(t){this.isMouseDown&&(this.boxElement.style.transform=`translate(${this.getDeltaX(t)}px, ${this.getDeltaY(t)}px)`)}mouseDown(t){this.boxElement.style.animation="pulse 0.5s infinite alternate",this.boxElement.style.boxShadow="0 2px 2px var(--accent-purple-dark)",this.mouseDownX=t.x,this.mouseDownY=t.y,this.isMouseDown=!0}mouseUp(t){this.isMouseDown&&(this.boxElement.style.animation="",this.boxElement.style.boxShadow="",this.boxX=this.getDeltaX(t),this.boxY=this.getDeltaY(t),this.isMouseDown=!1)}getDeltaX(t){return Math.max(Math.min(this.boxX+t.x-this.mouseDownX,this.containerElement.clientWidth-this.boxElement.clientWidth),0)}getDeltaY(t){return Math.max(Math.min(this.boxY+t.y-this.mouseDownY,this.containerElement.clientHeight-this.boxElement.clientHeight),0)}animateTitle(t){if("Enter"===t.code){let M=function(p){c(n)<o+i&&!p?(n.style.fontSize=(c(n)+i/s).toString()+"em",console.log("current font size is"+c(n))):c(n)>o-i&&p?(n.style.fontSize=(c(n)-i/s).toString()+"em",console.log("current font size is"+c(n))):(clearInterval(u),this.isTitleBig=!this.isTitleBig)},c=function(p){return parseFloat(p.style.fontSize.replace("em",""))};const n=document.getElementById("animation-title"),i=1,s=50,o=c(n),u=setInterval(M.bind(this),5,this.isTitleBig)}}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-javascript-animations"]],decls:6,vars:0,consts:[[1,"javascript-animation"],["id","animation-title"],["id","container",1,"draggable-area"],["id","drag-me",1,"draggable-box"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"h1",1),e._uU(2,"JavaScript Animations"),e.qZA(),e.TgZ(3,"div",2),e.TgZ(4,"div",3),e._uU(5,"Drag Me!"),e.qZA(),e.qZA(),e.qZA())},styles:[".javascript-animation[_ngcontent-%COMP%]{margin:2em;height:100vh;overflow:hidden}.draggable-area[_ngcontent-%COMP%]{margin-top:2em;background:var(--white);border:5px solid var(--accent-purple-dark);width:100%;height:50%;border-radius:5px}.draggable-box[_ngcontent-%COMP%]{color:var(--white);background:var(--accent-purple);width:10em;height:10em;border-radius:5px;border:2px solid var(--accent-purple-dark);display:flex;justify-content:center;align-items:center;cursor:pointer}@-webkit-keyframes pulse{0%{background:var(--accent-purple)}to{background:var(--accent-purple-dark)}}@keyframes pulse{0%{background:var(--accent-purple)}to{background:var(--accent-purple-dark)}}"]}),r})()}]}];let _=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[l.ez,g.IJ,d.Bz.forChild(C)]]}),r})()}}]);