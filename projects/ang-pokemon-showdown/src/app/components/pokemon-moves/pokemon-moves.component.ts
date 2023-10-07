import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-moves',
  templateUrl: './pokemon-moves.component.html',
  styleUrls: ['./pokemon-moves.component.css']
})
export class PokemonMovesComponent implements OnInit {
    moves = ['', '', '', ''];

    constructor() { }

    ngOnInit(): void {
    }
}
