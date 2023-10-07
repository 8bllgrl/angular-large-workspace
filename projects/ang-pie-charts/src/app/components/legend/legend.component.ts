// import { Component, OnInit } from '@angular/core';
// import { SharedService } from '../../services/shared.service';

// @Component({
//   selector: 'app-legend',
//   template: `
//     <div *ngFor="let item of items" [ngStyle]="{ 'background-color': item.color }">
//       {{ item.label }}: {{ item.value }}
//     </div>
//   `,
//   styleUrls: ['./legend.component.css']
// })
// export class LegendComponent implements OnInit {
//   items: any[] = [];

//   constructor(private sharedService: SharedService) {}

//   ngOnInit() {
//     this.sharedService.currentData.subscribe((data) => {
//       const colors = ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56'];
//       this.items = data.values.map((value, index) => ({
//         value,
//         label: data.labels[index],
//         color: colors[index % colors.length],
//       }));
//     });
//   }
// }
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-legend',
  template: `
    <div style="display: flex; align-items: center;">
      <div *ngFor="let item of items" style="display: flex; align-items: center; margin-right: 15px;">
        <div [ngStyle]="{ 'background-color': item.color }" style="width: 20px; height: 20px; margin-right: 5px;"></div>
        {{ item.label }}: {{ item.value }}
      </div>
    </div>
  `,
  styleUrls: ['./legend.component.css']
})

export class LegendComponent implements OnInit {
  items: any[] = [];

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.currentData.subscribe((data) => {
      const colors = ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56'];
      this.items = data.values.map((value, index) => ({
        value,
        label: data.labels[index],
        color: colors[index % colors.length],
      }));
    });
  }
}
