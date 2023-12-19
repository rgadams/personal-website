import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-transitions',
    templateUrl: './transitions.component.html',
    styleUrls: ['./transitions.component.less']
})
export class TransitionsComponent {

    moveButton(): void {
        const button1 = document.getElementById('button1');
        if (button1.getAttribute('movedRight') === 'true') {
            button1.setAttribute('movedRight', 'false');
        } else {
            button1.setAttribute('movedRight', 'true');
        }
    }

    scaleButton(): void {
        const button2 = document.getElementById('button2');
        if (button2.getAttribute('scaled') === 'true') {
            button2.setAttribute('scaled', 'false');
        } else {
            button2.setAttribute('scaled', 'true');
        }
    }
}
