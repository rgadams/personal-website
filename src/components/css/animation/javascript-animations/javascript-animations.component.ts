import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-javascript-animations',
    templateUrl: './javascript-animations.component.html',
    styleUrls: ['./javascript-animations.component.less']
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
        this.boxElement = document.getElementById('drag-me') as HTMLElement;
        this.containerElement = document.getElementById('container') as HTMLElement;
        this.boxElement.addEventListener('mousedown', ($event) => this.mouseDown($event));
        document.addEventListener('mousemove', ($event) => this.dragBox($event));
        document.addEventListener('mouseup', ($event) => this.mouseUp($event));
        (document.getElementById('animation-title') as HTMLElement).style.fontSize = '2em';
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
            const title = document.getElementById('animation-title') as HTMLElement;
            const fontSizeChange = 1;
            const fontSizeChangeRate = 50;
            const currentFontSize = getFontSize(title);

            const animation = setInterval(() => {
                if (getFontSize(title) < currentFontSize + fontSizeChange && !this.isTitleBig) {
                    title.style.fontSize = (getFontSize(title) + fontSizeChange / fontSizeChangeRate).toString() + 'em';
                    console.log('current font size is' + getFontSize(title));
                } else if (getFontSize(title) > (currentFontSize - fontSizeChange) && this.isTitleBig) {
                    title.style.fontSize = (getFontSize(title) - fontSizeChange / fontSizeChangeRate).toString() + 'em';
                    console.log('current font size is' + getFontSize(title));
                } else {
                    clearInterval(animation);
                    this.isTitleBig = !this.isTitleBig;
                }
            }, 5);

            function getFontSize(el: HTMLElement): number {
                return parseFloat(el.style.fontSize.replace('em', ''));
            }
        }
    }
}
