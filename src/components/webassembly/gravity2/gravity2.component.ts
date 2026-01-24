import { Component, OnInit } from '@angular/core';
import { Universe } from 'src/assets/wasm-gravity';
import { memory } from 'src/assets/wasm-gravity/gravity_wasm_bg.wasm';
import { WebGlService } from 'src/services/web-gl.service';
import fragmentShaderSrc from 'src/assets/shaders/fragment-shader.glsl';
import vertexShaderSrc from 'src/assets/shaders/vertex-shader.glsl';
import { mat4 } from 'gl-matrix';
import { OpenInGithub } from "src/components/open-in-github/open-in-github";

@Component({
    selector: 'app-gravity',
    templateUrl: './gravity2.component.html',
    styleUrls: ['./gravity2.component.less'],
    imports: [OpenInGithub]
})
export class Gravity2Component implements OnInit {
    startX = 0;
    mousedown = false;
    startRotation = 0.0;

    universe: Universe;
    numberOfParticles = 1000;
    canvas: HTMLCanvasElement;
    colors: [number, number, number, number][] = [];
    particleColors: [number, number, number, number][] = [];
    faceColors: [number, number, number, number][] = [];
    then: number;
    programInfo: WebGLProgram;
    buffers: WebGLBuffer;
    gl: WebGLRenderingContext;
    cubeRotation = 0.0;
    cubeVertexPositions = [
        // Front face
        -0.1, -0.1,  0.1,
        0.1, -0.1,  0.1,
        0.1,  0.1,  0.1,
        -0.1,  0.1,  0.1,

        // Back face
        -0.1, -0.1, -0.1,
        -0.1,  0.1, -0.1,
        0.1,  0.1, -0.1,
        0.1, -0.1, -0.1,

        // Top face
        -0.1,  0.1, -0.1,
        -0.1,  0.1,  0.1,
        0.1,  0.1,  0.1,
        0.1,  0.1, -0.1,

        // Bottom face
        -0.1, -0.1, -0.1,
        0.1, -0.1, -0.1,
        0.1, -0.1,  0.1,
        -0.1, -0.1,  0.1,

        // Right face
        0.1, -0.1, -0.1,
        0.1,  0.1, -0.1,
        0.1,  0.1,  0.1,
        0.1, -0.1,  0.1,

        // Left face
        -0.1, -0.1, -0.1,
        -0.1, -0.1,  0.1,
        -0.1,  0.1,  0.1,
        -0.1,  0.1, -0.1,
    ];
    baseIndices = [
        0,  1,  2,      0,  2,  3,    // front
        4,  5,  6,      4,  6,  7,    // back
        8,  9,  10,     8,  10, 11,   // top
        12, 13, 14,     12, 14, 15,   // bottom
        16, 17, 18,     16, 18, 19,   // right
        20, 21, 22,     20, 22, 23,   // left
    ];
    cubeNormals = [
        // Front
        0.0,  0.0,  1.0,
        0.0,  0.0,  1.0,
        0.0,  0.0,  1.0,
        0.0,  0.0,  1.0,

        // Back
        0.0,  0.0, -1.0,
        0.0,  0.0, -1.0,
        0.0,  0.0, -1.0,
        0.0,  0.0, -1.0,

        // Top
        0.0,  1.0,  0.0,
        0.0,  1.0,  0.0,
        0.0,  1.0,  0.0,
        0.0,  1.0,  0.0,

        // Bottom
        0.0, -1.0,  0.0,
        0.0, -1.0,  0.0,
        0.0, -1.0,  0.0,
        0.0, -1.0,  0.0,

        // Right
        1.0,  0.0,  0.0,
        1.0,  0.0,  0.0,
        1.0,  0.0,  0.0,
        1.0,  0.0,  0.0,

        // Left
        -1.0,  0.0,  0.0,
        -1.0,  0.0,  0.0,
        -1.0,  0.0,  0.0,
        -1.0,  0.0,  0.0
    ];

    constructor(private webGlService: WebGlService) {}

    ngOnInit(): void {
        this.universe = Universe.new();
        for (let i = 0; i < this.numberOfParticles; i++) {
            this.particleColors.push([
                Math.random() * 0.5 + 0.25,
                Math.random() * 0.5 + 0.25,
                Math.random() * 0.5 + 0.25,
                1.0,
            ]);
        }

        this.canvas = document.getElementById('gravity-canvas-two') as HTMLCanvasElement;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        this.gl = this.canvas.getContext('webgl');
        if (this.gl === null) {
            alert('Unable to initialize WebGL. Your browser or machine may not support it.');
            return;
        }

        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);

        const shaderProgram = this.webGlService.initShaderProgram(this.gl, vertexShaderSrc, fragmentShaderSrc);

        this.programInfo = {
            program: shaderProgram,
            attribLocations: {
                vertexPosition: this.gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
                vertexColor: this.gl.getAttribLocation(shaderProgram, 'aVertexColor'),
                vertexNormal: this.gl.getAttribLocation(shaderProgram, 'aVertexNormal'),
            },
            uniformLocations: {
                projectionMatrix: this.gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
                modelViewMatrix: this.gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
                normalMatrix: this.gl.getUniformLocation(shaderProgram, 'uNormalMatrix'),
            },
        };

        const rawPositions = new Float64Array(
            memory.buffer,
            this.universe.get_positions_ptr(),
            this.numberOfParticles * 3
        );
        const masses = new Float64Array(memory.buffer, this.universe.get_masses_ptr(), this.numberOfParticles);
        const particlePositions = [];
        for (let i = 0; i < this.numberOfParticles; i++) {
            particlePositions.push(Array.from(rawPositions.slice(i, i + 3)));
        }
        const particles = this.getParticleVertices(particlePositions, masses);

        // Set up cube face colors
        this.colors = this.getFaceColors();

        // Add indices for other cubes
        const indicesLength = this.baseIndices.length;
        for (let i = 1; i < this.numberOfParticles; i++) {
            for (let j = 0; j < indicesLength; j++) {
                this.baseIndices.push(this.baseIndices[j] + 24 * i);
            }
        }

        const normalsLength = this.cubeNormals.length;
        for (let i = 1; i < this.numberOfParticles; i++) {
            for (let j = 0; j < normalsLength; j++) {
                this.cubeNormals.push(this.cubeNormals[j]);
            }
        }

        document.addEventListener('mousedown', ($event) => {
            this.startX = $event.clientX;
            this.mousedown = true;
        });
        document.addEventListener('mousemove', ($event) => {
            if (this.mousedown) {
                this.cubeRotation = this.startRotation + ($event.clientX - this.startX) / (this.canvas.width / 10);
            }
        });
        document.addEventListener('mouseup', ($event) => {
            this.mousedown = false;
            this.startRotation = this.cubeRotation;
        });

        this.buffers = this.webGlService.initBuffers(
            this.gl,
            particles,
            this.colors,
            this.baseIndices,
            this.cubeNormals
        );

        this.then = 0;

        requestAnimationFrame(this.render.bind(this));
    }

    getParticleVertices(particlePositions, masses) {
        const particles = [];
        particlePositions.forEach((particle, particleIndex) => {
            this.cubeVertexPositions.forEach((element, index) => {
                switch (index % 3) {
                    case 0:
                        particles.push(particle[0] + (element * masses[particleIndex]) / 0.5);
                        break;
                    case 1:
                        particles.push(particle[1] + (element * masses[particleIndex]) / 0.5);
                        break;
                    case 2:
                        particles.push(particle[2] + (element * masses[particleIndex]) / 0.5);
                        break;
                }
            });
        });
        return particles;
    }

    getFaceColors(): [number, number, number, number][] {
        for (let i = 0; i < this.numberOfParticles; i++) {
            for (let j = 0; j < 6; j++) {
                this.faceColors.push(this.particleColors[i]);
            }
        }
        let colors = [];

        // eslint-disable-next-line @typescript-eslint/prefer-for-of
        for (let j = 0; j < this.faceColors.length; ++j) {
            const c = this.faceColors[j];

            // Repeat each color four times for the four vertices of the face
            colors = colors.concat(c, c, c, c);
        }
        return colors;
    }

    // Draw the scene repeatedly
    render(now: number) {
        this.universe.tick();

        const rawPositions = new Float64Array(memory.buffer, this.universe.get_positions_ptr(), this.numberOfParticles * 3);
        const masses = new Float64Array(memory.buffer, this.universe.get_masses_ptr(), this.numberOfParticles);
        const positions = [];
        for (let i = 0; i < this.numberOfParticles; i++) {
            positions.push(Array.from(rawPositions.slice(i, i + 3)));
        }

        const particles = this.getParticleVertices(positions, masses);

        this.buffers = this.webGlService.initBuffers(this.gl, particles, this.colors, this.baseIndices, this.cubeNormals);

        now *= 0.001;  // convert to seconds
        this.then = now;

        this.drawScene(this.gl, this.programInfo, this.buffers);

        requestAnimationFrame(this.render.bind(this));
    }

    drawScene(gl: WebGLRenderingContext, programInfo: any, buffers: any) {
        gl.clearColor(0.0, 0.0, 0.0, 1.0); // Clear to black, fully opaque
        gl.clearDepth(1.0); // Clear everything
        gl.enable(gl.DEPTH_TEST); // Enable depth testing
        gl.depthFunc(gl.LEQUAL); // Near things obscure far things

        // Clear the canvas before we start drawing on it.

        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        // Create a perspective matrix, a special matrix that is
        // used to simulate the distortion of perspective in a camera.
        // Our field of view is 45 degrees, with a width/height
        // ratio that matches the display size of the canvas
        // and we only want to see objects between 0.1 units
        // and 100 units away from the camera.

        const fieldOfView = (45 * Math.PI) / 180; // in radians
        const aspect = (gl.canvas as HTMLCanvasElement).clientWidth / (gl.canvas as HTMLCanvasElement).clientHeight;
        const zNear = 0.1;
        const zFar = 100.0;
        const projectionMatrix = mat4.create();

        // note: glmatrix.js always has the first argument
        // as the destination to receive the result.
        mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar);

        // Set the drawing position to the "identity" point, which is
        // the center of the scene.
        const modelViewMatrix = mat4.create();

        // Now move the drawing position a bit to where we want to
        // start drawing the square.
        mat4.translate(
            modelViewMatrix, // destination matrix
            modelViewMatrix, // matrix to translate
            [-0.0, 0.0, -6.0]
        ); // amount to translate
        mat4.rotate(
            modelViewMatrix, // destination matrix
            modelViewMatrix, // matrix to rotate
            0.2, // amount to rotate in radians
            [1, 0, 0]
        );
        mat4.rotate(
            modelViewMatrix, // destination matrix
            modelViewMatrix, // matrix to rotate
            this.cubeRotation * 0.2, // amount to rotate in radians
            [0, 1, 0]
        ); // axis to rotate around (X)

        const normalMatrix = mat4.create();
        mat4.invert(normalMatrix, modelViewMatrix);
        mat4.transpose(normalMatrix, normalMatrix);

        // Tell WebGL how to pull out the positions from the position
        // buffer into the vertexPosition attribute
        {
            const numComponents = 3;
            const type = gl.FLOAT;
            const normalize = false;
            const stride = 0;
            const offset = 0;
            gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
            gl.vertexAttribPointer(
                programInfo.attribLocations.vertexPosition,
                numComponents,
                type,
                normalize,
                stride,
                offset);
            gl.enableVertexAttribArray(
                programInfo.attribLocations.vertexPosition);
        }

        // Tell WebGL how to pull out the colors from the color buffer
        // into the vertexColor attribute.
        {
            const numComponents = 4;
            const type = gl.FLOAT;
            const normalize = false;
            const stride = 0;
            const offset = 0;
            gl.bindBuffer(gl.ARRAY_BUFFER, buffers.color);
            gl.vertexAttribPointer(
                programInfo.attribLocations.vertexColor,
                numComponents,
                type,
                normalize,
                stride,
                offset);
            gl.enableVertexAttribArray(
                programInfo.attribLocations.vertexColor);
        }

        // Tell WebGL which indices to use to index the vertices
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);

        // Tell WebGL how to pull out the normals from
        // the normal buffer into the vertexNormal attribute.
        {
            const numComponents = 3;
            const type = gl.FLOAT;
            const normalize = false;
            const stride = 0;
            const offset = 0;
            gl.bindBuffer(gl.ARRAY_BUFFER, buffers.normal);
            gl.vertexAttribPointer(
                programInfo.attribLocations.vertexNormal,
                numComponents,
                type,
                normalize,
                stride,
                offset);
            gl.enableVertexAttribArray(
                programInfo.attribLocations.vertexNormal);
        }

        // Tell WebGL to use our program when drawing
        gl.useProgram(programInfo.program);

        // Set the shader uniforms
        gl.uniformMatrix4fv(
            programInfo.uniformLocations.projectionMatrix,
            false,
            projectionMatrix as Float32Array);
        gl.uniformMatrix4fv(
            programInfo.uniformLocations.modelViewMatrix,
            false,
            modelViewMatrix as Float32Array);
        gl.uniformMatrix4fv(
            programInfo.uniformLocations.normalMatrix,
            false,
            normalMatrix as Float32Array);

        {
            const vertexCount = 36 * this.numberOfParticles;
            const type = gl.UNSIGNED_SHORT;
            const offset = 0;
            gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
        }
    }
}
