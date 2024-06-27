import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-javascript-animations',
    templateUrl: './javascript-animations.component.html',
    styleUrls: ['./javascript-animations.component.less'],
})
export class JavascriptAnimationsComponent implements OnInit {
    isTitleBig = false;
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
        this.boxElement.addEventListener('mousedown', ($event) => this.mouseDown($event));
        document.addEventListener('mousemove', ($event) => this.dragBox($event));
        document.addEventListener('mouseup', ($event) => this.mouseUp($event));
        (document.getElementById('animation-title')).style.fontSize = '2em';
        document.addEventListener('keydown', ($event) => this.animateTitle($event));
    }

    dragBox($event: MouseEvent): void {
        if (this.isMouseDown) {
            this.boxElement.style.transform = `translate(${this.getDeltaX($event)}px, ${this.getDeltaY($event)}px)`;
        }
    }

    mouseDown($event: MouseEvent): void {
        this.boxElement.style.animation = 'pulse 0.5s infinite alternate';
        this.boxElement.style.boxShadow = '0 2px 2px var(--accent-purple-dark)';
        this.mouseDownX = $event.x;
        this.mouseDownY = $event.y;
        this.isMouseDown = true;
    }

    mouseUp($event: MouseEvent): void {
        if (this.isMouseDown) {
            this.boxElement.style.animation = '';
            this.boxElement.style.boxShadow = '';
            this.boxX = this.getDeltaX($event);
            this.boxY = this.getDeltaY($event);
            this.isMouseDown = false;
        }
    }

    getDeltaX($event: MouseEvent): number {
        const dx = this.boxX + $event.x - this.mouseDownX;
        return Math.max(Math.min(dx, this.containerElement.clientWidth - this.boxElement.clientWidth), 0);
    }

    getDeltaY($event: MouseEvent): number {
        const dy = this.boxY + $event.y - this.mouseDownY;
        return Math.max(Math.min(dy, this.containerElement.clientHeight - this.boxElement.clientHeight), 0);
    }

    animateTitle($event: KeyboardEvent): void {
        if ($event.code === 'Enter') {
            const title = document.getElementById('animation-title');
            const fontSizeChange = 1;
            const fontSizeChangeRate = 50;
            const currentFontSize = this.getFontSize(title);

            const animation = setInterval(() => {
                if (this.getFontSize(title) < currentFontSize + fontSizeChange && !this.isTitleBig) {
                    title.style.fontSize = (this.getFontSize(title) + fontSizeChange / fontSizeChangeRate).toString() + 'em';
                    console.log('current font size is' + this.getFontSize(title));
                } else if (this.getFontSize(title) > currentFontSize - fontSizeChange && this.isTitleBig) {
                    title.style.fontSize = (this.getFontSize(title) - fontSizeChange / fontSizeChangeRate).toString() + 'em';
                    console.log('current font size is' + this.getFontSize(title));
                } else {
                    clearInterval(animation);
                    this.isTitleBig = !this.isTitleBig;
                }
            }, 5);


        }
    }

    getFontSize(el: HTMLElement): number {
        return parseFloat(el.style.fontSize.replace('em', ''));
    }
}
