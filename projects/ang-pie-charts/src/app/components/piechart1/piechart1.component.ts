// import { Component, ElementRef, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
// import Chart from 'chart.js/auto';
// @Component({
//   selector: 'app-piechart1',
//   templateUrl: './piechart1.component.html',
//   styleUrls: ['./piechart1.component.css']
// })
// export class Piechart1Component {

// }
import { Component, ElementRef, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-piechart1',
  template: `<canvas #chart></canvas>`,
  styleUrls: ['./piechart1.component.css']
})
export class PieChart1Component implements AfterViewInit {
  @ViewChild('chart') chartRef!: ElementRef;
  @Input() values!: number[];
  @Input() labels!: string[];

  ngAfterViewInit() {
    const ctx = this.chartRef.nativeElement.getContext('2d');
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: this.labels,
        datasets: [{
          data: this.values,
          backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56'],
        }]
      }
    });
  }
}
