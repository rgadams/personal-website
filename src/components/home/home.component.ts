import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface SwirlItem {
    layer: number;
    timeToCompleteRotation: number;
    element: HTMLElement;
    startPercentage: number;
}

@Component({
    selector: 'app-home',
    imports: [CommonModule, RouterModule],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
    textSwirlItems: SwirlItem[];

    ngOnInit(): void {
        this.textSwirlItems = [];
        const textSwirl = document.getElementById('text-swirl');
        let currentLayer = 0;
        let currentItemsInLayer = 0;
        let currentLayerRotationTime = this.getRandomRotationTime();
        for (let item of textSwirl.children) {
            const desiredNumberOfItems = 10 + 4 * currentLayer;
            this.textSwirlItems.push({
                element: item as HTMLElement,
                layer: currentLayer,
                timeToCompleteRotation: currentLayerRotationTime,
                startPercentage: (desiredNumberOfItems - currentItemsInLayer) / desiredNumberOfItems
            });
            currentItemsInLayer++;
            if (currentItemsInLayer >= 10 + 4 * currentLayer) {
                currentLayer++;
                currentLayerRotationTime = this.getRandomRotationTime();
                currentItemsInLayer = 0;
            }
        }

        requestAnimationFrame((t) => this.runSwirl(t));
    }

    runSwirl(t: number): void {
        this.textSwirlItems.forEach((item) => {
            const rotationPercentage = (t / 10000 + (item.startPercentage * item.timeToCompleteRotation)) / item.timeToCompleteRotation;
            const translateX = Math.sin(rotationPercentage * (2 * Math.PI));
            const translateY = Math.cos(rotationPercentage * (2 * Math.PI));
            const rotate = (((rotationPercentage * 100) % 100) / 100) * 360;
            const radius = 200 + (item.layer * 50);
            const direction = item.layer % 2 === 0 ? 1 : -1;
            item.element.style.transform = `translate(calc(${direction} * ${translateX} * ${radius}px - 50%), calc(-1 * ${translateY} * ${radius}px - 50%)) rotate(calc(${direction} * ${rotate}deg))`;
        });
        requestAnimationFrame((t) => this.runSwirl(t));
    }

    getRandomRotationTime(): number {
        return Math.random() * 10 + 2;
    }
}
