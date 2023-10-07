import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

    pokemon = {
        level: 100,
        gender: 'None',
        shiny: false,
        item: 'None',
        ability: 'Effect Spore',
        type: 'Grass/Poison',
        name: 'Amoonguss' // Add this line
    };

    constructor() { }

    ngOnInit(): void {
    }
}
