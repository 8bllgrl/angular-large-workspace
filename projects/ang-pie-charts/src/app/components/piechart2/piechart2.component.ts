// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-piechart2',
//   templateUrl: './piechart2.component.html',
//   styleUrls: ['./piechart2.component.css']
// })
// export class Piechart2Component {

// }
// import { Component, ElementRef, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
// import Chart from 'chart.js/auto';
// import { SharedService } from '../../services/shared.service';

// @Component({
//   selector: 'app-piechart2',
//   template: `<canvas #chart></canvas>`,
//   styleUrls: ['./piechart2.component.css']
// })
// export class PieChart2Component implements AfterViewInit {
//   @Input() values!: number[];
//   @Input() labels!: string[];

//   constructor(private elementRef: ElementRef) {}

//   ngAfterViewInit() {
//     const canvas = this.elementRef.nativeElement.querySelector('canvas');
//     const ctx = canvas.getContext('2d');
//     if (ctx) {
//       this.drawPieChart(ctx, this.values);
//     }
//   }

//   drawPieChart(ctx: CanvasRenderingContext2D, data: number[]) {
//     let total = data.reduce((sum, value) => sum + value, 0);
//     let startAngle = 0;
//     const colors = ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56'];

//     for (let i = 0; i < data.length; i++) {
//       const sliceAngle = (data[i] / total) * 2 * Math.PI;
//       const endAngle = startAngle + sliceAngle;

//       ctx.beginPath();
//       ctx.moveTo(100, 100);
//       ctx.arc(100, 100, 80, startAngle, endAngle);
//       ctx.closePath();

//       ctx.fillStyle = colors[i % colors.length];
//       ctx.fill();

//       startAngle = endAngle;
//     }
//   }
// }

import { Component, ElementRef, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-piechart2',
  template: '<canvas #chart width="200" height="200"></canvas>',
  styleUrls: ['./piechart2.component.css']
})
export class PieChart2Component implements AfterViewInit {
  @Input() values!: number[];
  @Input() labels!: string[];

  constructor(private elementRef: ElementRef, private sharedService: SharedService) {}
  ngAfterViewInit() {
    const canvas = this.elementRef.nativeElement.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    if (ctx) {
      this.drawPieChart(ctx, this.values);
    }
    this.sharedService.changeData(this.values, this.labels);
  }

  drawPieChart(ctx: CanvasRenderingContext2D, data: number[]) {
    let total = data.reduce((sum, value) => sum + value, 0);
    let startAngle = 0;
    const colors = ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56'];

    for (let i = 0; i < data.length; i++) {
      const sliceAngle = (data[i] / total) * 2 * Math.PI;
      const endAngle = startAngle + sliceAngle;

      ctx.beginPath();
      ctx.moveTo(100, 100);
      ctx.arc(100, 100, 80, startAngle, endAngle);
      ctx.closePath();

      ctx.fillStyle = colors[i % colors.length];
      ctx.fill();

      startAngle = endAngle;
    }
  }
}
