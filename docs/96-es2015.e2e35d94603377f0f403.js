(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[96],{4096:function(e,t,n){"use strict";n.r(t),n.d(t,{HomeModule:function(){return m}});var o=n(8583),r=n(7716),i=n(4330);function s(e,t){if(1&e&&(r.TgZ(0,"a",5),r._uU(1),r.qZA()),2&e){const e=r.oxw();r.Q6J("href",e.project.link,r.LSH),r.xp6(1),r.Oqu(e.project.linkText)}}function a(e,t){if(1&e&&(r.TgZ(0,"a",6),r._uU(1,"Go To Project"),r.qZA()),2&e){const e=r.oxw();r.Q6J("routerLink",e.project.route)}}let c=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-project-panel"]],inputs:{project:"project"},decls:8,vars:4,consts:[[1,"panel"],[1,"project-title"],["class","project-link",3,"href",4,"ngIf"],[1,"description"],["class","project-route",3,"routerLink",4,"ngIf"],[1,"project-link",3,"href"],[1,"project-route",3,"routerLink"]],template:function(e,t){1&e&&(r.TgZ(0,"div",0),r.TgZ(1,"h1",1),r._uU(2),r.qZA(),r.YNc(3,s,2,2,"a",2),r.TgZ(4,"section",3),r.TgZ(5,"p"),r._uU(6),r.qZA(),r.qZA(),r.YNc(7,a,2,1,"a",4),r.qZA()),2&e&&(r.xp6(2),r.Oqu(t.project.title),r.xp6(1),r.Q6J("ngIf",t.project.link),r.xp6(3),r.Oqu(t.project.description),r.xp6(1),r.Q6J("ngIf",t.project.route))},directives:[o.O5,i.yS],styles:[".panel[_ngcontent-%COMP%]{border:4px solid var(--accent-purple);background-color:var(--primary-grey-3);padding:1.5em;height:100%;display:flex;flex-direction:column;justify-content:space-between}.panel[_ngcontent-%COMP%]   .project-title[_ngcontent-%COMP%]{font-size:1.5em}"]}),e})();function p(e,t){1&e&&r._UZ(0,"app-project-panel",7),2&e&&r.Q6J("project",t.$implicit)}const l=[{path:"",component:(()=>{class e{constructor(){this.projectList=[{title:"WebAssembly Performance",link:"https://github.com/rgadams/wasm-primes",linkText:"wasm-primes",description:"A test of WebAssembly's performance, using Eratosthenes' sieve in both Rust and JavaScript",route:"webassembly/primes"},{title:"WebAssembly Gravity",link:"https://github.com/rgadams/gravity-wasm",linkText:"wasm-gravity",description:"This is a simulation of gravity, using WebAssembly and rust as a the engine for driving particle position, velocity, and acceleration",route:"webassembly/gravity/one"},{title:"WebAssembly Parallel Quick Sort",link:"https://github.com/rgadams/wasm-parallel-quick-sort",linkText:"wasm-parallel-quick-sort",description:"Using WebAssembly to do parallelism in the web browser"},{title:"WebAssembly Game of Life",link:"https://github.com/rgadams/wasm-game-of-life",linkText:"wasm-game-of-life",description:"An implementation of Conway's game of life using WebAssembly/Rust",route:"webassembly/life"},{title:"Web Workers and Matrix Multiplication",link:"https://github.com/rgadams/personal-website/tree/master/src/components/parallel-workers",linkText:"Code",description:"First attempt at using Web Workers to do parallel operations in the browser",route:"parallel"},{title:"3D Graphics in HTML Canvas",link:"https://github.com/rgadams/personal-website/tree/master/src/components/canvas-three-dimensions",linkText:"Code",description:"Using HTML5 Canvas to render the 3D Utah teapot in a 2D context",route:"canvas"}]}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-home"]],decls:16,vars:1,consts:[[1,"home"],[1,"profile"],[1,"header"],[1,"accent-purple"],[1,"panels"],[1,"project-panels"],["class","home-panel",3,"project",4,"ngFor","ngForOf"],[1,"home-panel",3,"project"]],template:function(e,t){1&e&&(r.TgZ(0,"div",0),r.TgZ(1,"section",1),r.TgZ(2,"div",2),r.TgZ(3,"h1"),r._uU(4,"Hello, I am "),r.TgZ(5,"span",3),r._uU(6,"Roy Adams"),r.qZA(),r.qZA(),r.TgZ(7,"h2"),r._uU(8,"Software Engineer"),r.qZA(),r.TgZ(9,"h4"),r._uU(10,"with an interest in front-end development"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(11,"section",4),r.TgZ(12,"h3"),r._uU(13,"Projects"),r.qZA(),r.TgZ(14,"div",5),r.YNc(15,p,1,1,"app-project-panel",6),r.qZA(),r.qZA(),r.qZA()),2&e&&(r.xp6(15),r.Q6J("ngForOf",t.projectList))},directives:[o.sg,c],styles:[".profile[_ngcontent-%COMP%]{height:25em;display:flex;flex-direction:column;align-items:center;justify-content:space-around;padding:2em}.profile[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:4em}.profile[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.5em}.panels[_ngcontent-%COMP%]{background-color:var(--accent-purple-light);padding:2em;border-top:4px solid var(--accent-purple)}.panels[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:1em;color:var(--primary-white)}.project-panels[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr;grid-gap:2em}.project-panels[_ngcontent-%COMP%]   app-project-panel[_ngcontent-%COMP%]{height:100%;box-shadow:2px 4px 5px var(--primary-black)}"]}),e})()}];let m=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[[o.ez,i.Bz.forChild(l)]]}),e})()}}]);