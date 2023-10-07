// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-colored-bars',
//   templateUrl: './colored-bars.component.html',
//   styleUrls: ['./colored-bars.component.css']
// })
// export class ColoredBarsComponent implements OnInit {

//   bars = [
//     { color: '#FF0000', level: 1, letter: 'R' },  // red
//     { color: '#FFFF00', level: 2, letter: 'Y' },  // yellow
//     { color: '#800080', level: 5, letter: 'P' },  // purple
//     { color: '#008080', level: 3, letter: 'T' }   // teal
//   ];
  

//   constructor() { }

//   ngOnInit(): void {
//   }

//   toRoman(num: number): string {
//     const roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
//     const arabic = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
//     let romanNumeral = '';
    
//     for (let i = arabic.length - 1; i >= 0; i--) {
//       while (num >= arabic[i]) {
//         romanNumeral += roman[i];
//         num -= arabic[i];
//       }
//     }
//     return romanNumeral;
//   }

//   increaseLevel(bar: any) {
//     if (bar.level < 5) {
//       bar.level++;
//     }
//   }

//   decreaseLevel(bar: any) {
//     if (bar.level > 1) {
//       bar.level--;
//     }
//   }

// }

// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-colored-bars',
//   templateUrl: './colored-bars.component.html',
//   styleUrls: ['./colored-bars.component.css']
// })
// export class ColoredBarsComponent implements OnInit {

//   bars = [
//     { color: '#FF0000', level: 1, letter: 'R' },
//     { color: '#FFFF00', level: 2, letter: 'Y' },
//     { color: '#800080', level: 5, letter: 'P' },
//     { color: '#008080', level: 3, letter: 'T' }
//   ];

//   constructor() { }

//   ngOnInit(): void {
//     const storedBars = localStorage.getItem('bars');
//     if (storedBars) {
//       this.bars = JSON.parse(storedBars);
//     }
//   }

//   // ... other methods ...
//     toRoman(num: number): string {
//     const roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
//     const arabic = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
//     let romanNumeral = '';
    
//     for (let i = arabic.length - 1; i >= 0; i--) {
//       while (num >= arabic[i]) {
//         romanNumeral += roman[i];
//         num -= arabic[i];
//       }
//     }
//     return romanNumeral;
//   }

//   increaseLevel(bar: any) {
//     if (bar.level < 5) {
//       bar.level++;
//       this.saveToLocalStorage();
//     }
//   }

//   decreaseLevel(bar: any) {
//     if (bar.level > 1) {
//       bar.level--;
//       this.saveToLocalStorage();
//     }
//   }

//   saveToLocalStorage() {
//     localStorage.setItem('bars', JSON.stringify(this.bars));
//   }
// }
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colored-bars',
  templateUrl: './colored-bars.component.html',
  styleUrls: ['./colored-bars.component.css']
})
export class ColoredBarsComponent implements OnInit {

  bars = [
    { color: '#FF0000', level: 1, letter: 'R' },
    { color: '#FFFF00', level: 2, letter: 'Y' },
    { color: '#800080', level: 5, letter: 'P' },
    { color: '#008080', level: 3, letter: 'T' }
  ];

  constructor() { }

  ngOnInit(): void {
    const storedBars = localStorage.getItem('bars');
    if (storedBars) {
      this.bars = JSON.parse(storedBars);
    }
  }

  toRoman(num: number): string {
    // const roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
    const roman = ['I', 'IV', 'V', 'IX', 'X',];
    const arabic = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    let romanNumeral = '';
    
    for (let i = arabic.length - 1; i >= 0; i--) {
      while (num >= arabic[i]) {
        romanNumeral += roman[i];
        num -= arabic[i];
      }
    }
    return romanNumeral;
  }

  increaseLevel(bar: any) {
    if (bar.level < 6) {
      bar.level++;
      this.saveToLocalStorage();
    }
  }

  decreaseLevel(bar: any) {
    if (bar.level > 1) {
      bar.level--;
      this.saveToLocalStorage();
    }
  }

  saveToLocalStorage() {
    localStorage.setItem('bars', JSON.stringify(this.bars));
  }
}
