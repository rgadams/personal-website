import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.less']
})
export class GridComponent implements OnInit {
  christmasList = [];
  currentState = 'dashboard';

  constructor() { }

  ngOnInit(): void {
    for (let i=0; i < 400; i++) {
      let style;
      switch (i % 3) {
        case 0:
          style = 'dotted';
          break;
        case 1:
          style = 'solid';
          break;
        case 2:
          style = 'hidden';
          break;
      }
      this.christmasList.push({
        name: `Item ${i}`,
        style
      });
    }

    setInterval(() => {
      const pop = this.christmasList.slice(1);
      pop.push(this.christmasList[0]);
      this.christmasList = pop;
    }, 300)
  }

  goToChristmas() {
    clearInterval();
    this.currentState = 'christmas';
    setInterval(() => {
      const pop = this.christmasList.slice(1);
      pop.push(this.christmasList[0]);
      this.christmasList = pop;
    }, 700)
  }

  goToDashboard() {
    clearInterval();
    this.currentState = 'dashboard';
  }
}
