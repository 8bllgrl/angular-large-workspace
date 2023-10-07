import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-pixiv-gall';

  imageList: string[] = [
    'https://cdn.midjourney.com/dd12bccd-c409-48ec-ad1c-a2a0bfb1f4d5/0_2.png',
    'https://cdn.midjourney.com/dd12bccd-c409-48ec-ad1c-a2a0bfb1f4d5/0_0.png',
    'https://cdn.midjourney.com/dd12bccd-c409-48ec-ad1c-a2a0bfb1f4d5/0_1_384_N.webp'
  ];

  handleSearch(searchText: string) {
    console.log('Searching for:', searchText);
    // Handle the search logic here or pass the searchText to a service
  }

  
}
