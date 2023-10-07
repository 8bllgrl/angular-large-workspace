import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  searchText = '';

  @Output() searchEvent = new EventEmitter<string>();

  performSearch() {
    this.searchEvent.emit(this.searchText);
  }
}
