"use strict";(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[989],{2989:(f,a,i)=>{i.r(a),i.d(a,{HomeModule:()=>h});var c=i(4460),e=i(3148),l=i(5315);function p(t,r){if(1&t&&(e.j41(0,"a",5),e.EFF(1),e.k0s()),2&t){const n=e.XpG();e.Y8G("href",n.project.link,e.B4B),e.R7$(1),e.JRh(n.project.linkText)}}function m(t,r){if(1&t&&(e.j41(0,"a",6),e.EFF(1,"Go To Project"),e.k0s()),2&t){const n=e.XpG();e.Y8G("routerLink",n.project.route)}}let d=(()=>{class t{project;static \u0275fac=function(o){return new(o||t)};static \u0275cmp=e.VBU({type:t,selectors:[["app-project-panel"]],inputs:{project:"project"},decls:8,vars:4,consts:[[1,"panel"],[1,"project-title"],["class","project-link",3,"href"],[1,"description"],["class","project-route",3,"routerLink"],[1,"project-link",3,"href"],[1,"project-route",3,"routerLink"]],template:function(o,s){1&o&&(e.j41(0,"div",0)(1,"h1",1),e.EFF(2),e.k0s(),e.DNE(3,p,2,2,"a",2),e.j41(4,"section",3)(5,"p"),e.EFF(6),e.k0s()(),e.DNE(7,m,2,1,"a",4),e.k0s()),2&o&&(e.R7$(2),e.JRh(s.project.title),e.R7$(1),e.vxM(3,s.project.link?3:-1),e.R7$(3),e.JRh(s.project.description),e.R7$(1),e.vxM(7,s.project.route?7:-1))},dependencies:[l.Wk],styles:[".panel[_ngcontent-%COMP%]{border:4px solid var(--accent-purple);background-color:var(--primary-grey-3);padding:1.5em;height:100%;display:flex;flex-direction:column;justify-content:space-between}.panel[_ngcontent-%COMP%]   .project-title[_ngcontent-%COMP%]{font-size:1.5em}"]})}return t})();function u(t,r){1&t&&e.nrm(0,"app-project-panel",6),2&t&&e.Y8G("project",r.$implicit)}const g=[{path:"",component:(()=>{class t{projectList=[{title:"WebAssembly Performance",link:"https://github.com/rgadams/wasm-primes",linkText:"wasm-primes",description:"A test of WebAssembly's performance, using Eratosthenes' sieve in both Rust and JavaScript",route:"webassembly/primes"},{title:"WebAssembly Gravity",link:"https://github.com/rgadams/gravity-wasm",linkText:"wasm-gravity",description:"This is a simulation of gravity, using WebAssembly and rust as a the engine for driving particle position, velocity, and acceleration",route:"webassembly/gravity/one"},{title:"WebAssembly Parallel Quick Sort",link:"https://github.com/rgadams/wasm-parallel-quick-sort",linkText:"wasm-parallel-quick-sort",description:"Using WebAssembly to do parallelism in the web browser"},{title:"WebAssembly Game of Life",link:"https://github.com/rgadams/wasm-game-of-life",linkText:"wasm-game-of-life",description:"An implementation of Conway's game of life using WebAssembly/Rust",route:"webassembly/life"},{title:"Web Workers and Matrix Multiplication",link:"https://github.com/rgadams/personal-website/tree/master/src/components/parallel-workers",linkText:"Code",description:"First attempt at using Web Workers to do parallel operations in the browser",route:"parallel"},{title:"3D Graphics in HTML Canvas",link:"https://github.com/rgadams/personal-website/tree/master/src/components/canvas-three-dimensions",linkText:"Code",description:"Using HTML5 Canvas to render the 3D Utah teapot in a 2D context",route:"canvas"}];static \u0275fac=function(o){return new(o||t)};static \u0275cmp=e.VBU({type:t,selectors:[["app-home"]],decls:17,vars:0,consts:[[1,"home"],[1,"profile"],[1,"header"],[1,"accent-purple"],[1,"panels"],[1,"project-panels"],[1,"home-panel",3,"project"],["class","home-panel",3,"project"]],template:function(o,s){1&o&&(e.j41(0,"div",0)(1,"section",1)(2,"div",2)(3,"h1"),e.EFF(4," Hello, I am "),e.j41(5,"span",3),e.EFF(6,"Roy Adams"),e.k0s()(),e.j41(7,"h2"),e.EFF(8,"Software Engineer"),e.k0s(),e.j41(9,"h4"),e.EFF(10,"with an interest in all things front-end development"),e.k0s()()(),e.j41(11,"section",4)(12,"h3"),e.EFF(13,"Projects"),e.k0s(),e.j41(14,"div",5),e.Z7z(15,u,1,1,"app-project-panel",7,e.fX1),e.k0s()()()),2&o&&(e.R7$(15),e.Dyx(s.projectList))},dependencies:[d],styles:[".profile[_ngcontent-%COMP%]{height:25em;display:flex;flex-direction:column;align-items:center;justify-content:space-around;padding:2em}.profile[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:4em}.profile[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.5em}.panels[_ngcontent-%COMP%]{background-color:var(--accent-purple-light);padding:2em;border-top:4px solid var(--accent-purple)}.panels[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:1em;color:var(--primary-white)}.project-panels[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr;grid-gap:2em}.project-panels[_ngcontent-%COMP%]   app-project-panel[_ngcontent-%COMP%]{height:100%;box-shadow:2px 4px 5px var(--primary-black)}"]})}return t})()}];let h=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=e.$C({type:t});static \u0275inj=e.G2t({imports:[c.MD,l.iI.forChild(g)]})}return t})()}}]);