(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[532],{9664:(U,Q,y)=>{"use strict";y.d(Q,{j:()=>v});var J=y(3014),r=y(3148),N=y(9571);function P($,z){if(1&$){const p=r.RV6();r.j41(0,"div",13),r.bIt("click",function(){const C=r.eBV(p).$implicit,V=r.XpG();return r.Njj(V.toggleCell(C.row,C.column))}),r.k0s()}if(2&$){const p=z.$implicit;r.HbH(p.className),r.Y8G("id",p.id)}}let v=(()=>{class ${memory;universeModule;universe;width;height;gridElements=[];playStatus=!1;statusDisplay="Stopped";patternToGenerate;getIndex(p,k){return p*this.width+k}loadMemoryModule(){return(0,J.A)(function*(){return yield y.e(76).then(y.bind(y,9322))})()}loadUniverseModule(){return(0,J.A)(function*(){return yield Promise.all([y.e(76),y.e(880)]).then(y.bind(y,9880))})()}ngOnInit(){const p=[];p.push(this.loadMemoryModule()),p.push(this.loadUniverseModule()),Promise.all(p).then(([k,u])=>{this.memory=k.memory,this.universeModule=u,this.universe=this.universeModule.Universe.new(64,64),this.width=this.universe.width(),this.height=this.universe.height();const C=this.universe.cells(),V=new Uint8Array(this.memory.buffer,C,this.width*this.height);for(let L=0;L<this.height;L++)for(let S=0;S<this.width;S++)this.gridElements.push({id:`row-${L}-column-${S}`,row:L,column:S,className:0===V[this.getIndex(L,S)]?"dead":"alive"})})}toggleCell(p,k){console.log(`toggled: ${p}, ${k}`);const u=this.universe.cells(),C=new Uint8Array(this.memory.buffer,u,this.width*this.height);C[this.getIndex(p,k)]===this.universeModule.Cell.Alive?C[this.getIndex(p,k)]=this.universeModule.Cell.Dead:C[this.getIndex(p,k)]=this.universeModule.Cell.Alive,this.playStatus||this.drawCells()}drawCells(){const p=this.universe.cells(),k=new Uint8Array(this.memory.buffer,p,this.width*this.height);for(let u=0;u<this.height;u++)for(let C=0;C<this.width;C++){const V=this.getIndex(u,C);this.gridElements[V].className=0===k[V]?"dead":"alive"}}randomizeCells(){const p=this.universe.cells(),k=new Uint8Array(this.memory.buffer,p,this.width*this.height);for(let u=0;u<this.height;u++)for(let C=0;C<this.width;C++)0===Math.floor(2*Math.random())?k[this.getIndex(u,C)]=this.universeModule.Cell.Dead:k[this.getIndex(u,C)]=this.universeModule.Cell.Alive;this.drawCells()}clearGrid(){const p=this.universe.cells(),k=new Uint8Array(this.memory.buffer,p,this.width*this.height);for(let u=0;u<this.height;u++)for(let C=0;C<this.width;C++)k[this.getIndex(u,C)]=this.universeModule.Cell.Dead;this.drawCells()}renderLoop(){this.playStatus&&(this.universe.tick(),this.drawCells(),requestAnimationFrame(()=>this.renderLoop()))}togglePlay(){this.playStatus=!this.playStatus,this.playStatus?(this.statusDisplay="Started",requestAnimationFrame(()=>this.renderLoop())):this.statusDisplay="Stopped"}generatePattern(){"gosper-glider-gun"===this.patternToGenerate?this.drawGosperGliderGun():"hammerhead"===this.patternToGenerate?this.drawHammerhead():console.log("no pattern selected")}drawGosperGliderGun(){this.clearGrid();const k=this.universe.cells(),u=new Uint8Array(this.memory.buffer,k,this.width*this.height);[[1,6],[2,6],[1,7],[2,7],[13,4],[14,4],[12,5],[11,6],[11,7],[11,8],[12,9],[13,10],[14,10],[15,7],[16,5],[17,6],[17,7],[17,8],[16,9],[18,7],[21,4],[21,5],[21,6],[22,4],[22,5],[22,6],[23,3],[23,7],[25,2],[25,3],[25,7],[25,8],[35,4],[35,5],[36,4],[36,5]].forEach(C=>{u[this.getIndex(C[1],C[0])]=this.universeModule.Cell.Alive}),this.drawCells()}drawHammerhead(){this.clearGrid();const k=this.universe.cells(),u=new Uint8Array(this.memory.buffer,k,this.width*this.height);[[10,9],[11,9],[9,10],[10,10],[12,10],[13,10],[14,10],[10,11],[11,11],[12,11],[13,11],[14,11],[11,12],[12,12],[13,12],[14,12],[15,12],[15,13],[16,13],[17,13],[15,14],[16,14],[17,14],[15,15],[16,15],[17,15],[15,18],[16,18],[17,18],[15,19],[16,19],[17,19],[15,20],[16,20],[17,20],[11,21],[12,21],[13,21],[14,21],[15,21],[10,22],[11,22],[12,22],[13,22],[14,22],[10,24],[11,24],[9,23],[10,23],[12,23],[13,23],[14,23],[19,13],[19,15],[20,15],[21,15],[19,16],[20,16],[19,17],[20,17],[19,18],[20,18],[21,18],[19,20],[21,12],[21,13],[22,13],[22,14],[21,20],[21,21],[22,20],[22,19],[23,12],[24,12],[25,12],[26,12],[27,11],[27,9],[25,8],[23,9],[22,10],[22,11],[23,21],[24,21],[25,21],[26,21],[27,22],[27,24],[25,25],[23,24],[22,23],[22,22]].forEach(C=>{u[this.getIndex(C[1],C[0])]=this.universeModule.Cell.Alive}),this.drawCells()}static \u0275fac=function(k){return new(k||$)};static \u0275cmp=r.VBU({type:$,selectors:[["app-game-of-life"]],decls:44,vars:2,consts:[[1,"description"],["href","https://rustwasm.github.io/book/game-of-life/implementing.html"],["href","https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"],["for","patterns"],["name","Patterns","id","patterns",3,"ngModel","ngModelChange"],["value","gosper-glider-gun"],["value","hammerhead"],["type","button",1,"btn","btn-primary",3,"click"],[1,"game-of-life"],[1,"game-of-life-grid"],[1,"button-row"],["type","button",1,"btn","btn-random",3,"click"],["type","button",1,"btn","btn-danger",3,"click"],[3,"id","click"],[3,"id","class"]],template:function(k,u){1&k&&(r.j41(0,"div",0)(1,"h3"),r.EFF(2,"Conway's Game of Life using Rust/WebAssembly"),r.k0s(),r.j41(3,"p"),r.EFF(4," The engine for setting up the universe for this implementation of Conway's Game of Life is written in Rust and compiled to WebAssembly. Thanks to "),r.j41(5,"a",1),r.EFF(6,"this book"),r.k0s(),r.EFF(7," for the Rust/WASM tutorial. The JS/HTML for this project is nearly all my own. "),r.k0s(),r.j41(8,"h4"),r.EFF(9,"Instructions"),r.k0s(),r.j41(10,"p"),r.EFF(11," See "),r.j41(12,"a",2),r.EFF(13,"Conway's Game of Life"),r.k0s(),r.EFF(14," for more information on the rules of the game. "),r.k0s(),r.j41(15,"ul")(16,"li"),r.EFF(17,"Click the Randomize button to randomize the state of each cell in the universe"),r.k0s(),r.j41(18,"li"),r.EFF(19,"Click the Clear button to reset the universe to every cell being dead"),r.k0s(),r.j41(20,"li"),r.EFF(21,"Click on an individual cell to toggle its state"),r.k0s()(),r.j41(22,"label",3),r.EFF(23,"Generate a pattern:"),r.k0s(),r.j41(24,"select",4),r.bIt("ngModelChange",function(V){return u.patternToGenerate=V}),r.j41(25,"option",5),r.EFF(26,"Gosper's Glider Gun"),r.k0s(),r.j41(27,"option",6),r.EFF(28,"Hammerhead Spaceship"),r.k0s()(),r.j41(29,"button",7),r.bIt("click",function(){return u.generatePattern()}),r.EFF(30,"Generate"),r.k0s()(),r.j41(31,"div",8)(32,"div",9),r.Z7z(33,P,1,4,"div",14,r.fX1),r.k0s(),r.j41(35,"div",10)(36,"button",7),r.bIt("click",function(){return u.togglePlay()}),r.EFF(37,"Play/Pause"),r.k0s(),r.j41(38,"button",11),r.bIt("click",function(){return u.randomizeCells()}),r.EFF(39,"Randomize"),r.k0s(),r.j41(40,"button",12),r.bIt("click",function(){return u.clearGrid()}),r.EFF(41,"Clear"),r.k0s(),r.j41(42,"div"),r.EFF(43),r.k0s()()()),2&k&&(r.R7$(24),r.Y8G("ngModel",u.patternToGenerate),r.R7$(9),r.Dyx(u.gridElements),r.R7$(10),r.JRh(u.statusDisplay))},dependencies:[N.xH,N.y7,N.wz,N.BC,N.vS],styles:["[_nghost-%COMP%]{margin:1em;display:flex;flex-direction:row;justify-content:space-around}.description[_ngcontent-%COMP%]{margin:1em}.game-of-life[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center}.game-of-life-grid[_ngcontent-%COMP%]{display:grid;grid-auto-rows:auto;grid-auto-columns:auto;grid-template-columns:repeat(64,10px);grid-template-rows:repeat(64,10px);grid-gap:2px}.game-of-life-grid[_ngcontent-%COMP%]   .alive[_ngcontent-%COMP%]{background:var(--accent-purple)}.game-of-life-grid[_ngcontent-%COMP%]   .dead[_ngcontent-%COMP%]{background:#fff}.button-row[_ngcontent-%COMP%]{display:flex;flex-direction:row;margin-top:.5em}.button-row[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-right:.5em;align-self:center}.button-row[_ngcontent-%COMP%]   .btn-random[_ngcontent-%COMP%]{background-color:var(--accent-blue);color:var(--primary-white)}.button-row[_ngcontent-%COMP%]   .btn-random[_ngcontent-%COMP%]:hover{background-color:var(--accent-blue-dark)}"]})}return $})()},3674:(U,Q,y)=>{"use strict";y.a(U,async(J,r)=>{try{y.d(Q,{K:()=>C});var N=y(1561),P=y(3889),v=y(1434),$=y(5944),z=y(9641),p=y(3148),k=y(8412),u=J([N,P]);[N,P]=u.then?(await u)():u;let C=(()=>{class V{webGlService;startX=0;mousedown=!1;startRotation=0;universe;numberOfParticles=1e3;canvas;colors=[];particleColors=[];faceColors=[];then;programInfo;buffers;gl;cubeRotation=0;cubeVertexPositions=[-.1,-.1,.1,.1,-.1,.1,.1,.1,.1,-.1,.1,.1,-.1,-.1,-.1,-.1,.1,-.1,.1,.1,-.1,.1,-.1,-.1,-.1,.1,-.1,-.1,.1,.1,.1,.1,.1,.1,.1,-.1,-.1,-.1,-.1,.1,-.1,-.1,.1,-.1,.1,-.1,-.1,.1,.1,-.1,-.1,.1,.1,-.1,.1,.1,.1,.1,-.1,.1,-.1,-.1,-.1,-.1,-.1,.1,-.1,.1,.1,-.1,.1,-.1];baseIndices=[0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23];cubeNormals=[0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0];constructor(S){this.webGlService=S}ngOnInit(){this.universe=N._D.new();for(let I=0;I<this.numberOfParticles;I++)this.particleColors.push([.5*Math.random()+.25,.5*Math.random()+.25,.5*Math.random()+.25,1]);if(this.canvas=document.getElementById("gravity-canvas-two"),this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight,this.gl=this.canvas.getContext("webgl"),null===this.gl)return void alert("Unable to initialize WebGL. Your browser or machine may not support it.");this.gl.clearColor(0,0,0,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT);const S=this.webGlService.initShaderProgram(this.gl,$.A,v.A);this.programInfo={program:S,attribLocations:{vertexPosition:this.gl.getAttribLocation(S,"aVertexPosition"),vertexColor:this.gl.getAttribLocation(S,"aVertexColor"),vertexNormal:this.gl.getAttribLocation(S,"aVertexNormal")},uniformLocations:{projectionMatrix:this.gl.getUniformLocation(S,"uProjectionMatrix"),modelViewMatrix:this.gl.getUniformLocation(S,"uModelViewMatrix"),normalMatrix:this.gl.getUniformLocation(S,"uNormalMatrix")}};const X=new Float64Array(P.memory.buffer,this.universe.get_positions_ptr(),3*this.numberOfParticles),H=new Float64Array(P.memory.buffer,this.universe.get_masses_ptr(),this.numberOfParticles),D=[];for(let I=0;I<this.numberOfParticles;I++)D.push(Array.from(X.slice(I,I+3)));const te=this.getParticleVertices(D,H);this.colors=this.getFaceColors();const ne=this.baseIndices.length;for(let I=1;I<this.numberOfParticles;I++)for(let E=0;E<ne;E++)this.baseIndices.push(this.baseIndices[E]+24*I);const se=this.cubeNormals.length;for(let I=1;I<this.numberOfParticles;I++)for(let E=0;E<se;E++)this.cubeNormals.push(this.cubeNormals[E]);document.addEventListener("mousedown",I=>{this.startX=I.clientX,this.mousedown=!0}),document.addEventListener("mousemove",I=>{this.mousedown&&(this.cubeRotation=this.startRotation+(I.clientX-this.startX)/(this.canvas.width/10))}),document.addEventListener("mouseup",I=>{this.mousedown=!1,this.startRotation=this.cubeRotation}),this.buffers=this.webGlService.initBuffers(this.gl,te,this.colors,this.baseIndices,this.cubeNormals),this.then=0,requestAnimationFrame(this.render.bind(this))}getParticleVertices(S,X){const H=[];return S.forEach((D,te)=>{this.cubeVertexPositions.forEach((ne,se)=>{switch(se%3){case 0:H.push(D[0]+ne*X[te]/.5);break;case 1:H.push(D[1]+ne*X[te]/.5);break;case 2:H.push(D[2]+ne*X[te]/.5)}})}),H}getFaceColors(){for(let X=0;X<this.numberOfParticles;X++)for(let H=0;H<6;H++)this.faceColors.push(this.particleColors[X]);let S=[];for(let X=0;X<this.faceColors.length;++X){const H=this.faceColors[X];S=S.concat(H,H,H,H)}return S}render(S){this.universe.tick();const X=new Float64Array(P.memory.buffer,this.universe.get_positions_ptr(),3*this.numberOfParticles),H=new Float64Array(P.memory.buffer,this.universe.get_masses_ptr(),this.numberOfParticles),D=[];for(let ne=0;ne<this.numberOfParticles;ne++)D.push(Array.from(X.slice(ne,ne+3)));const te=this.getParticleVertices(D,H);this.buffers=this.webGlService.initBuffers(this.gl,te,this.colors,this.baseIndices,this.cubeNormals),this.then=S*=.001,this.drawScene(this.gl,this.programInfo,this.buffers),requestAnimationFrame(this.render.bind(this))}drawScene(S,X,H){S.clearColor(0,0,0,1),S.clearDepth(1),S.enable(S.DEPTH_TEST),S.depthFunc(S.LEQUAL),S.clear(S.COLOR_BUFFER_BIT|S.DEPTH_BUFFER_BIT);const D=45*Math.PI/180,te=S.canvas.clientWidth/S.canvas.clientHeight,I=z.vt();z.fN(I,D,te,.1,100);const E=z.vt();z.Tl(E,E,[-0,0,-6]),z.e$(E,E,.2,[1,0,0]),z.e$(E,E,.2*this.cubeRotation,[0,1,0]);const he=z.vt();z.B8(he,E),z.mg(he,he);{const ae=S.FLOAT,le=!1,ce=0,oe=0;S.bindBuffer(S.ARRAY_BUFFER,H.position),S.vertexAttribPointer(X.attribLocations.vertexPosition,3,ae,le,ce,oe),S.enableVertexAttribArray(X.attribLocations.vertexPosition)}{const ae=S.FLOAT,le=!1,ce=0,oe=0;S.bindBuffer(S.ARRAY_BUFFER,H.color),S.vertexAttribPointer(X.attribLocations.vertexColor,4,ae,le,ce,oe),S.enableVertexAttribArray(X.attribLocations.vertexColor)}S.bindBuffer(S.ELEMENT_ARRAY_BUFFER,H.indices);{const ae=S.FLOAT,le=!1,ce=0,oe=0;S.bindBuffer(S.ARRAY_BUFFER,H.normal),S.vertexAttribPointer(X.attribLocations.vertexNormal,3,ae,le,ce,oe),S.enableVertexAttribArray(X.attribLocations.vertexNormal)}S.useProgram(X.program),S.uniformMatrix4fv(X.uniformLocations.projectionMatrix,!1,I),S.uniformMatrix4fv(X.uniformLocations.modelViewMatrix,!1,E),S.uniformMatrix4fv(X.uniformLocations.normalMatrix,!1,he),S.drawElements(S.TRIANGLES,36*this.numberOfParticles,S.UNSIGNED_SHORT,0)}static \u0275fac=function(X){return new(X||V)(p.rXU(k.R))};static \u0275cmp=p.VBU({type:V,selectors:[["app-gravity"]],decls:3,vars:0,consts:[["id","gravity-canvas-two"]],template:function(X,H){1&X&&(p.j41(0,"p"),p.EFF(1,"Click and drag to rotate!"),p.k0s(),p.nrm(2,"canvas",0))},styles:["p[_ngcontent-%COMP%]{background-color:var(--primary-black);color:var(--primary-white);margin-bottom:0;font-size:2em;padding:.25em 0 0 1em}"]})}return V})();r()}catch(C){r(C)}})},356:(U,Q,y)=>{"use strict";y.a(U,async(J,r)=>{try{y.d(Q,{S:()=>z});var N=y(1561),P=y(3889),v=y(3148),$=J([N,P]);[N,P]=$.then?(await $)():$;let z=(()=>{class p{universe;canvas;colors=[];numberOfElements=1e3;ctx;ngOnInit(){this.universe=N._D.new(),this.canvas=document.getElementById("gravity-canvas-one"),this.ctx=this.canvas.getContext("2d"),this.ctx.canvas.width=window.innerWidth,this.ctx.canvas.height=window.innerHeight;for(let u=0;u<this.numberOfElements;u++)this.colors.push("#"+Math.floor(16777215*(.5*Math.random()+.5)).toString(16));setInterval(()=>{this.universe.tick(),this.render()},10)}render(){this.ctx.fillStyle="rgba(0, 0, 0, 0.15)",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);const u=new Float64Array(P.memory.buffer,this.universe.get_positions_ptr(),3*this.numberOfElements),C=new Float64Array(P.memory.buffer,this.universe.get_masses_ptr(),this.numberOfElements);for(let V=0;V<this.numberOfElements;V++){const L=Array.from(u.slice(V,V+3));this.ctx.fillStyle=this.colors[V],this.ctx.fillRect(L[0]*this.canvas.width/4+this.canvas.width/2,L[1]*this.canvas.height/4+this.canvas.height/2,10*C[V],10*C[V])}}static \u0275fac=function(C){return new(C||p)};static \u0275cmp=v.VBU({type:p,selectors:[["app-gravity"]],decls:1,vars:0,consts:[["id","gravity-canvas-one"]],template:function(C,V){1&C&&v.nrm(0,"canvas",0)}})}return p})();r()}catch(z){r(z)}})},3366:(U,Q,y)=>{"use strict";y.d(Q,{y:()=>$});var J=y(3014),r=y(3148),N=y(9571),P=y(4460);function v(z,p){if(1&z&&(r.j41(0,"tr")(1,"td"),r.EFF(2),r.k0s(),r.j41(3,"td"),r.EFF(4),r.nI1(5,"number"),r.k0s(),r.j41(6,"td"),r.EFF(7),r.nI1(8,"number"),r.k0s()()),2&z){const k=p.$implicit;r.R7$(2),r.JRh(k.numberOfPrimes),r.R7$(2),r.JRh(r.i5U(5,3,k.wasmTime,".2")),r.R7$(3),r.JRh(r.i5U(8,6,k.jsTime,".2"))}}let $=(()=>{class z{wasmPrimes;numberOfPrimes=1e3;simulations=[];ngOnInit(){this.loadModule().then(k=>{this.wasmPrimes=k}).then(()=>{this.runSimulation()})}loadModule(){return(0,J.A)(function*(){return yield y.e(909).then(y.bind(y,9909))})()}runSimulation(){const k=performance.now();this.wasmPrimes.sieve_of_eratosthenes(this.numberOfPrimes);const u=performance.now();this.sieve_of_eratosthenes(this.numberOfPrimes);const C=performance.now();this.simulations.push({numberOfPrimes:this.numberOfPrimes,wasmTime:u-k,jsTime:C-u})}clearRuns(){this.simulations=[]}sieve_of_eratosthenes(k){const u=[],C=[];let V,L;for(V=2;V<=k;++V)if(!u[V])for(C.push(V),L=V<<1;L<=k;L+=V)u[L]=!0;return C}static \u0275fac=function(u){return new(u||z)};static \u0275cmp=r.VBU({type:z,selectors:[["app-primes"]],decls:26,vars:1,consts:[[1,"primes"],[1,"description"],[1,"input-line"],["for","calculate-primes-input"],["id","calculate-primes-input","type","number",1,"form-control","app-input",3,"ngModel","ngModelChange"],["type","button",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-danger",3,"click"],["aria-describedby","prime simulations",1,"app-table","simulation-table"],["scope","col"]],template:function(u,C){1&u&&(r.j41(0,"div",0)(1,"div",1)(2,"h1"),r.EFF(3,"Testing WebAssembly Performance"),r.k0s(),r.j41(4,"p"),r.EFF(5," This is a test of how a Rust/WebAssembly implementation of the Sieve of Eratosthenes performs against the same algorithm implemented in JavaScript. Input a number of primes you'd like to calculate and both implementations will find those primes, then output the time it took into the table below. "),r.k0s()(),r.j41(6,"div",2)(7,"label",3),r.EFF(8,"Number of Primes:"),r.k0s(),r.j41(9,"input",4),r.bIt("ngModelChange",function(L){return C.numberOfPrimes=L}),r.k0s(),r.j41(10,"button",5),r.bIt("click",function(){return C.runSimulation()}),r.EFF(11,"Run"),r.k0s(),r.j41(12,"button",6),r.bIt("click",function(){return C.clearRuns()}),r.EFF(13,"Clear"),r.k0s()(),r.j41(14,"table",7)(15,"thead")(16,"tr")(17,"th",8),r.EFF(18,"Number of Primes"),r.k0s(),r.j41(19,"th",8),r.EFF(20,"Time (ms) using WebAssembly"),r.k0s(),r.j41(21,"th",8),r.EFF(22,"Time (ms) using JavaScript"),r.k0s()()(),r.j41(23,"tbody"),r.Z7z(24,v,9,9,"tr",null,r.fX1),r.k0s()()()),2&u&&(r.R7$(9),r.Y8G("ngModel",C.numberOfPrimes),r.R7$(15),r.Dyx(C.simulations))},dependencies:[N.me,N.Q0,N.BC,N.vS,P.QX],styles:[".primes[_ngcontent-%COMP%]{margin:2em}.input-line[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}.input-line[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{align-self:flex-end}.input-line[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content}.input-line[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:last-child){margin-right:.25em}#calculate-primes-input[_ngcontent-%COMP%]{margin:0 .5em}.simulation-table[_ngcontent-%COMP%]{margin-top:1em;width:100%}.simulation-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .simulation-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:.25em .5em}label[_ngcontent-%COMP%]{font-family:var(--font-header)}.description[_ngcontent-%COMP%]{margin-top:1em}.description[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2em}"]})}return z})()},241:(U,Q,y)=>{"use strict";y.d(Q,{Q:()=>v});var J=y(5315),r=y(3148),N=y(4836);function P($,z){if(1&$&&(r.j41(0,"li",1)(1,"a",2),r.EFF(2),r.k0s()()),2&$){const p=z.$implicit;r.Y8G("ngbNavItem",p.link),r.R7$(1),r.Y8G("routerLink",p.link),r.R7$(1),r.JRh(p.title)}}let v=(()=>{class ${router;currentPath;routerSubscription;links=[{title:"Game of Life",link:"life"},{title:"Primes",link:"primes"},{title:"Gravity 1",link:"gravity/one"},{title:"Gravity 2",link:"gravity/two"}];constructor(p){this.router=p}ngOnInit(){this.checkForSpecificRoute(),this.currentPath=this.router.url.replace("/webassembly/",""),this.routerSubscription=this.router.events.subscribe(p=>{p instanceof J.wF&&(this.checkForSpecificRoute(),this.currentPath=p.url.replace("/webassembly/",""))})}ngOnDestroy(){this.routerSubscription.unsubscribe()}resetFocus(){window.focus()}checkForSpecificRoute(){"/webassembly"===this.router.url&&this.router.navigate([`${this.router.url}/${this.links[0].link}`])}static \u0275fac=function(k){return new(k||$)(r.rXU(J.Ix))};static \u0275cmp=r.VBU({type:$,selectors:[["app-webassembly"]],decls:4,vars:1,consts:[["ngbNav","","destroyOnHide","true",1,"nav-tabs",3,"activeId","navChange"],[3,"ngbNavItem"],["ngbNavLink","",3,"routerLink"]],template:function(k,u){1&k&&(r.j41(0,"ul",0),r.bIt("navChange",function(){return u.resetFocus()}),r.Z7z(1,P,3,3,"li",1,r.fX1),r.k0s(),r.nrm(3,"router-outlet")),2&k&&(r.Y8G("activeId",u.currentPath),r.R7$(1),r.Dyx(u.links))},dependencies:[N.X9,N.sy,N.Gx,N.Ri,N.WA,J.n3,J.Wk],styles:['.nav-tabs[_ngcontent-%COMP%]{background-color:var(--accent-purple);border:none;z-index:var(--z-nav-tabs);padding-top:.25em;box-shadow:0 3px 5px var(--accent-purple-dark)}.nav-item[_ngcontent-%COMP%]{background-color:inherit;margin-right:.25em}.nav-link.active[_ngcontent-%COMP%]{background-color:var(--accent-purple-dark);color:var(--primary-white)}.nav-link[_ngcontent-%COMP%]{position:relative;color:var(--primary-white);border-radius:0;border:none;font-family:var(--font-header);text-decoration:none}.nav-link[_ngcontent-%COMP%]:focus, .nav-link[_ngcontent-%COMP%]:hover{outline:none;background-color:var(--accent-purple-dark)}.nav-link.active[_ngcontent-%COMP%]:after{position:absolute;inset:.2em;content:"";border-top:2px solid var(--primary-white);border-left:2px solid var(--primary-white);border-right:2px solid var(--primary-white)}.nav-link[_ngcontent-%COMP%]:before{border-bottom:2px solid var(--primary-white);content:"";position:absolute;inset:.2em;transform:scaleX(0);transition:transform .25s ease-in-out}.nav-link[_ngcontent-%COMP%]:hover:before, .nav-link[_ngcontent-%COMP%]:focus:before{transform:scaleX(1)}']})}return $})()},4532:(U,Q,y)=>{"use strict";y.a(U,async(J,r)=>{try{y.r(Q),y.d(Q,{WebassemblyModule:()=>H});var N=y(4460),P=y(5315),v=y(241),$=y(9664),z=y(356),p=y(3674),k=y(3366),u=y(8412),C=y(4836),V=y(9571),L=y(3148),S=J([z,p]);[z,p]=S.then?(await S)():S;const X=[{path:"",component:v.Q,children:[{path:"life",component:$.j},{path:"primes",component:k.y},{path:"gravity/one",component:z.S},{path:"gravity/two",component:p.K}]}];let H=(()=>{class D{static \u0275fac=function(se){return new(se||D)};static \u0275mod=L.$C({type:D});static \u0275inj=L.G2t({providers:[u.R],imports:[N.MD,V.YN,C.UN,P.iI.forChild(X)]})}return D})();r()}catch(X){r(X)}})},8412:(U,Q,y)=>{"use strict";y.d(Q,{R:()=>r});var J=y(3148);let r=(()=>{class N{initShaderProgram(v,$,z){const p=this.loadShader(v,v.VERTEX_SHADER,$),k=this.loadShader(v,v.FRAGMENT_SHADER,z),u=v.createProgram();return v.attachShader(u,p),v.attachShader(u,k),v.linkProgram(u),v.getProgramParameter(u,v.LINK_STATUS)?u:(alert("Unable to initialize the shader program: "+v.getProgramInfoLog(u)),null)}loadShader(v,$,z){const p=v.createShader($);return v.shaderSource(p,z),v.compileShader(p),v.getShaderParameter(p,v.COMPILE_STATUS)?p:(alert("An error occurred compiling the shaders: "+v.getShaderInfoLog(p)),v.deleteShader(p),null)}initBuffers(v,$,z,p,k){const u=v.createBuffer();v.bindBuffer(v.ARRAY_BUFFER,u),v.bufferData(v.ARRAY_BUFFER,new Float32Array(z),v.STATIC_DRAW);const C=v.createBuffer();v.bindBuffer(v.ARRAY_BUFFER,C),v.bufferData(v.ARRAY_BUFFER,new Float32Array($),v.STATIC_DRAW);const V=v.createBuffer();v.bindBuffer(v.ELEMENT_ARRAY_BUFFER,V),v.bufferData(v.ELEMENT_ARRAY_BUFFER,new Uint16Array(p),v.STATIC_DRAW);const L=v.createBuffer();return v.bindBuffer(v.ARRAY_BUFFER,L),v.bufferData(v.ARRAY_BUFFER,new Float32Array(k),v.STATIC_DRAW),{position:C,normal:L,color:u,indices:V}}static \u0275fac=function($){return new($||N)};static \u0275prov=J.jDH({token:N,factory:N.\u0275fac,providedIn:"root"})}return N})()},9641:(U,Q,y)=>{"use strict";y.d(Q,{vt:()=>p,B8:()=>X,fN:()=>pe,e$:()=>I,Tl:()=>ne,mg:()=>S});var J=1e-6,r=typeof Float32Array<"u"?Float32Array:Array;function p(){var e=new r(16);return r!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0),e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}function S(e,n){if(e===n){var t=n[1],i=n[2],s=n[3],a=n[6],l=n[7],o=n[11];e[1]=n[4],e[2]=n[8],e[3]=n[12],e[4]=t,e[6]=n[9],e[7]=n[13],e[8]=i,e[9]=a,e[11]=n[14],e[12]=s,e[13]=l,e[14]=o}else e[0]=n[0],e[1]=n[4],e[2]=n[8],e[3]=n[12],e[4]=n[1],e[5]=n[5],e[6]=n[9],e[7]=n[13],e[8]=n[2],e[9]=n[6],e[10]=n[10],e[11]=n[14],e[12]=n[3],e[13]=n[7],e[14]=n[11],e[15]=n[15];return e}function X(e,n){var t=n[0],i=n[1],s=n[2],a=n[3],l=n[4],o=n[5],h=n[6],c=n[7],d=n[8],b=n[9],g=n[10],m=n[11],F=n[12],x=n[13],f=n[14],j=n[15],Z=t*o-i*l,Y=t*h-s*l,R=t*c-a*l,G=i*h-s*o,A=i*c-a*o,K=s*c-a*h,O=d*x-b*F,q=d*f-g*F,W=d*j-m*F,_=b*f-g*x,ee=b*j-m*x,re=g*j-m*f,T=Z*re-Y*ee+R*_+G*W-A*q+K*O;return T?(e[0]=(o*re-h*ee+c*_)*(T=1/T),e[1]=(s*ee-i*re-a*_)*T,e[2]=(x*K-f*A+j*G)*T,e[3]=(g*A-b*K-m*G)*T,e[4]=(h*W-l*re-c*q)*T,e[5]=(t*re-s*W+a*q)*T,e[6]=(f*R-F*K-j*Y)*T,e[7]=(d*K-g*R+m*Y)*T,e[8]=(l*ee-o*W+c*O)*T,e[9]=(i*W-t*ee-a*O)*T,e[10]=(F*A-x*R+j*Z)*T,e[11]=(b*R-d*A-m*Z)*T,e[12]=(o*q-l*_-h*O)*T,e[13]=(t*_-i*q+s*O)*T,e[14]=(x*Y-F*G-f*Z)*T,e[15]=(d*G-b*Y+g*Z)*T,e):null}function ne(e,n,t){var l,o,h,c,d,b,g,m,F,x,f,j,i=t[0],s=t[1],a=t[2];return n===e?(e[12]=n[0]*i+n[4]*s+n[8]*a+n[12],e[13]=n[1]*i+n[5]*s+n[9]*a+n[13],e[14]=n[2]*i+n[6]*s+n[10]*a+n[14],e[15]=n[3]*i+n[7]*s+n[11]*a+n[15]):(o=n[1],h=n[2],c=n[3],d=n[4],b=n[5],g=n[6],m=n[7],F=n[8],x=n[9],f=n[10],j=n[11],e[0]=l=n[0],e[1]=o,e[2]=h,e[3]=c,e[4]=d,e[5]=b,e[6]=g,e[7]=m,e[8]=F,e[9]=x,e[10]=f,e[11]=j,e[12]=l*i+d*s+F*a+n[12],e[13]=o*i+b*s+x*a+n[13],e[14]=h*i+g*s+f*a+n[14],e[15]=c*i+m*s+j*a+n[15]),e}function I(e,n,t,i){var h,c,d,b,g,m,F,x,f,j,Z,Y,R,G,A,K,O,q,W,_,ee,re,T,ie,s=i[0],a=i[1],l=i[2],o=Math.hypot(s,a,l);return o<J?null:(s*=o=1/o,a*=o,l*=o,h=Math.sin(t),c=Math.cos(t),g=n[1],m=n[2],F=n[3],f=n[5],j=n[6],Z=n[7],R=n[9],G=n[10],A=n[11],W=s*a*(d=1-c)-l*h,_=a*a*d+c,ee=l*a*d+s*h,re=s*l*d+a*h,T=a*l*d-s*h,ie=l*l*d+c,e[0]=(b=n[0])*(K=s*s*d+c)+(x=n[4])*(O=a*s*d+l*h)+(Y=n[8])*(q=l*s*d-a*h),e[1]=g*K+f*O+R*q,e[2]=m*K+j*O+G*q,e[3]=F*K+Z*O+A*q,e[4]=b*W+x*_+Y*ee,e[5]=g*W+f*_+R*ee,e[6]=m*W+j*_+G*ee,e[7]=F*W+Z*_+A*ee,e[8]=b*re+x*T+Y*ie,e[9]=g*re+f*T+R*ie,e[10]=m*re+j*T+G*ie,e[11]=F*re+Z*T+A*ie,n!==e&&(e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15]),e)}Math,Math,Math.hypot||(Math.hypot=function(){for(var e=0,n=arguments.length;n--;)e+=arguments[n]*arguments[n];return Math.sqrt(e)});var pe=function ge(e,n,t,i,s){var l,a=1/Math.tan(n/2);return e[0]=a/t,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,null!=s&&s!==1/0?(e[10]=(s+i)*(l=1/(i-s)),e[14]=2*s*i*l):(e[10]=-1,e[14]=-2*i),e}},1561:(U,Q,y)=>{"use strict";y.a(U,async(J,r)=>{try{let z=function(w){$===v.length&&v.push(v.length+1);const M=$;return $=v[M],v[M]=w,M},p=function(w){return v[w]},k=function(w){w<36||(v[w]=$,$=w)},u=function(w){const M=p(w);return k(w),M},S=function(){return(null===L||L.buffer!==N.memory.buffer)&&(L=new Uint8Array(N.memory.buffer)),L},X=function(w,M){return V.decode(S().subarray(w,w+M))},H=function(w,M){try{return w.apply(this,M)}catch(B){N.__wbindgen_exn_store(z(B))}},D=function(w,M){return S().subarray(w/1,w/1+M)},ne=function(w){return z(w)},se=function(w){u(w)},I=function(w,M,B){console.log(p(w),p(M),p(B))},E=function(){return H(function(w,M){p(w).getRandomValues(p(M))},arguments)},he=function(){return H(function(w,M,B){p(w).randomFillSync(D(M,B))},arguments)},fe=function(w){var M=p(w).process;return z(M)},ae=function(w){const M=p(w);return"object"==typeof M&&null!==M},le=function(w){var M=p(w).versions;return z(M)},ce=function(w){var M=p(w).node;return z(M)},oe=function(){return H(function(w,M){var B=y(799)(X(w,M));return z(B)},arguments)},ye=function(w){var M=p(w).crypto;return z(M)},we=function(w){var M=p(w).msCrypto;return z(M)},me=function(){return H(function(w,M){var B=p(w).call(p(M));return z(B)},arguments)},xe=function(w){var M=p(w);return z(M)},Fe=function(w,M){var B=new Function(X(w,M));return z(B)},be=function(){return H(function(){var w=self.self;return z(w)},arguments)},ue=function(){return H(function(){var w=window.window;return z(w)},arguments)},Se=function(){return H(function(){var w=globalThis.globalThis;return z(w)},arguments)},Me=function(){return H(function(){var w=global.global;return z(w)},arguments)},Ce=function(w){return void 0===p(w)},je=function(w){var M=p(w).buffer;return z(M)},ge=function(w){return p(w).length},pe=function(w){var M=new Uint8Array(p(w));return z(M)},ze=function(w,M,B){p(w).set(p(M),B>>>0)},ke=function(w){var M=new Uint8Array(w>>>0);return z(M)},Ne=function(w,M,B){var Ve=p(w).subarray(M>>>0,B>>>0);return z(Ve)},Ge=function(w){return"string"==typeof p(w)},Ae=function(w,M){throw new Error(X(w,M))},Re=function(){return z(N.memory)};y.d(Q,{BZ:()=>xe,CQ:()=>ze,Gu:()=>Ge,IZ:()=>le,KY:()=>pe,LU:()=>ue,Py:()=>Re,QR:()=>ne,Qn:()=>Ae,SY:()=>Se,Ss:()=>ke,XH:()=>I,Z3:()=>ce,_D:()=>te,bk:()=>se,et:()=>ye,gb:()=>fe,h7:()=>E,hr:()=>oe,mi:()=>Fe,nZ:()=>ge,nw:()=>Ne,o5:()=>be,qv:()=>ae,sl:()=>we,tR:()=>he,tz:()=>me,vU:()=>Ce,vl:()=>je,wW:()=>Me});var N=y(3889);U=y.hmd(U);var P=J([N]);N=(P.then?(await P)():P)[0];const v=new Array(32).fill(void 0);v.push(void 0,null,!0,!1);let $=v.length,V=new(typeof TextDecoder>"u"?(0,U.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});V.decode();let L=null;class te{static __wrap(M){const B=Object.create(te.prototype);return B.ptr=M,B}__destroy_into_raw(){const M=this.ptr;return this.ptr=0,M}free(){const M=this.__destroy_into_raw();N.__wbg_universe_free(M)}static new(){var M=N.universe_new();return te.__wrap(M)}to_string(){N.universe_to_string(this.ptr)}tick(){N.universe_tick(this.ptr)}get_positions_ptr(){return N.universe_get_positions_ptr(this.ptr)}get_masses_ptr(){return N.universe_get_masses_ptr(this.ptr)}}r()}catch(v){r(v)}})},1434:(U,Q,y)=>{"use strict";y.d(Q,{A:()=>J});const J="varying lowp vec4 vColor;\r\nvarying highp vec3 vLighting;\r\n\r\nvoid main(void) {\r\n    gl_FragColor = vec4(vColor.rgb * vLighting, vColor.a);\r\n}\r\n"},5944:(U,Q,y)=>{"use strict";y.d(Q,{A:()=>J});const J="attribute vec4 aVertexPosition;\r\nattribute vec3 aVertexNormal;\r\nattribute vec4 aVertexColor;\r\n\r\nuniform mat4 uNormalMatrix;\r\nuniform mat4 uModelViewMatrix;\r\nuniform mat4 uProjectionMatrix;\r\n\r\nvarying highp vec2 vTextureCoord;\r\nvarying highp vec3 vLighting;\r\n\r\nvarying lowp vec4 vColor;\r\n\r\nvoid main(void) {\r\n    gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;\r\n    vColor = aVertexColor;\r\n\r\n    // Apply lighting effect\r\n    highp vec3 ambientLight = vec3(0.3, 0.3, 0.3);\r\n    highp vec3 directionalLightColor = vec3(1, 1, 1);\r\n    highp vec3 directionalVector = normalize(vec3(0.85, 0.8, 0.75));\r\n\r\n    highp vec4 transformedNormal = uNormalMatrix * vec4(aVertexNormal, 1.0);\r\n\r\n    highp float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);\r\n    vLighting = ambientLight + (directionalLightColor * directional);\r\n}\r\n"},799:U=>{function Q(y){var J=new Error("Cannot find module '"+y+"'");throw J.code="MODULE_NOT_FOUND",J}Q.keys=()=>[],Q.resolve=Q,Q.id=799,U.exports=Q},3889:(U,Q,y)=>{"use strict";y.a(U,async(r,N)=>{try{var v,P=r([v=y(1561)]),[v]=P.then?(await P)():P;await y.v(Q,U.id,"64f561de307ef39e",{"./gravity_wasm_bg.js":{__wbindgen_number_new:v.QR,__wbindgen_object_drop_ref:v.bk,__wbg_log_0766524783eaff42:v.XH,__wbg_getRandomValues_98117e9a7e993920:v.h7,__wbg_randomFillSync_64cc7d048f228ca8:v.tR,__wbg_process_2f24d6544ea7b200:v.gb,__wbindgen_is_object:v.qv,__wbg_versions_6164651e75405d4a:v.IZ,__wbg_node_4b517d861cbcb3bc:v.Z3,__wbg_modulerequire_3440a4bcf44437db:v.hr,__wbg_crypto_98fc271021c7d2ad:v.et,__wbg_msCrypto_a2cdb043d2bfe57f:v.sl,__wbg_call_ba36642bd901572b:v.tz,__wbindgen_object_clone_ref:v.BZ,__wbg_newnoargs_9fdd8f3961dd1bee:v.mi,__wbg_self_bb69a836a72ec6e9:v.o5,__wbg_window_3304fc4b414c9693:v.LU,__wbg_globalThis_e0d21cabc6630763:v.SY,__wbg_global_8463719227271676:v.wW,__wbindgen_is_undefined:v.vU,__wbg_buffer_9e184d6f785de5ed:v.vl,__wbg_length_2d56cb37075fcfb1:v.nZ,__wbg_new_e8101319e4cf95fc:v.KY,__wbg_set_e8ae7b27314e8b98:v.CQ,__wbg_newwithlength_a8d1dbcbe703a5c6:v.Ss,__wbg_subarray_901ede8318da52a6:v.nw,__wbindgen_is_string:v.Gu,__wbindgen_throw:v.Qn,__wbindgen_memory:v.Py}}),N()}catch($){N($)}},1)}}]);