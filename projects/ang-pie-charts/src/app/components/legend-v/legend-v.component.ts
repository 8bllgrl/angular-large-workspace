import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-legend-v',
  templateUrl: './legend-v.component.html',
  styleUrls: ['./legend-v.component.css']
})

export class LegendVComponent implements OnInit {
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
