import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-javascript-animations',
    templateUrl: './javascript-animations.component.html',
    styleUrls: ['./javascript-animations.component.less']
})
export class JavascriptAnimationsComponent implements OnInit {

    boxX = 0;
    boxY = 0;
    mouseDownX: number;
    mouseDownY: number;
    boxElement: HTMLElement;
    containerElement: HTMLElement;
    isMouseDown: boolean;

    ngOnInit(): void {
        this.boxElement = document.getElementById('drag-me');
        this.containerElement = document.getElementById('container');
        this.boxElement.addEventListener('mousedown', (event$) => this.mouseDown(event$));
        document.addEventListener('mousemove', (event$) => this.dragBox(event$));
        document.addEventListener('mouseup', (event$) => this.mouseUp(event$));
    }

    dragBox(event$: MouseEvent) {
        if (this.isMouseDown) {
            this.boxElement.style.transform = `translate(${this.getDeltaX(event$)}px, ${this.getDeltaY(event$)}px)`;
        }
    }

    mouseDown(event$: MouseEvent) {
        this.boxElement.style.animation = 'pulse 0.5s infinite alternate';
        this.boxElement.style.boxShadow = '0 2px 2px var(--accent-purple-dark)';
        this.mouseDownX = event$.x;
        this.mouseDownY = event$.y;
        this.isMouseDown = true;
    }

    mouseUp(event$: MouseEvent) {
        if (this.isMouseDown) {
            this.boxElement.style.animation = '';
            this.boxElement.style.boxShadow = '';
            this.boxX = this.getDeltaX(event$);
            this.boxY = this.getDeltaY(event$);
            this.isMouseDown = false;
        }
    }

    getDeltaX(event$) {
        const dx = this.boxX + event$.x - this.mouseDownX;
        return Math.max(Math.min(dx, this.containerElement.clientWidth - this.boxElement.clientWidth), 0);
    }

    getDeltaY(event$) {
        const dy = this.boxY + event$.y - this.mouseDownY;
        return Math.max(Math.min(dy, this.containerElement.clientHeight - this.boxElement.clientHeight), 0);
    }
}
