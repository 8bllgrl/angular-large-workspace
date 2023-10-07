import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonHeaderComponent } from './components/pokemon-header/pokemon-header.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { PokemonMovesComponent } from './components/pokemon-moves/pokemon-moves.component';
import { PokemonStatsComponent } from './components/pokemon-stats/pokemon-stats.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { NameInputComponent } from './components/blue-section/name-input/name-input.component';
import { LevelContainerComponent } from './components/blue-section/level-container/level-container.component';
import { BlueImageComponent } from './components/blue-section/blue-image/blue-image.component';
import { BottomEditableTextComponent } from './components/blue-section/bottom-editable-text/bottom-editable-text.component';
import { GenericCardComponent } from './components/generic-card/generic-card.component';
import { BlueSectionComponent } from './components/blue-section/blue-section.component';
import { RedSectionComponent } from './components/red-section/red-section.component';
import { ColoredBarsComponent } from './components/colored-bars/colored-bars.component';
import { LoboCardComponent } from './components/lobo-card/lobo-card.component';
import { LeftSectionComponent } from './components/left-section/left-section/left-section.component';
import { CharaImageComponent } from './components/left-section/chara-image/chara-image.component';
import { BottomTextBoxesComponent } from './components/left-section/bottom-text-boxes/bottom-text-boxes.component';
import { StatBarsComponent } from './components/right-section/stat-bars/stat-bars.component';
import { RightSectionComponent } from './components/right-section/right-section/right-section.component'; // <-- Import FormsModule

@NgModule({
  declarations: [
    AppComponent,
    PokemonCardComponent,
    PokemonHeaderComponent,
    PokemonDetailsComponent,
    PokemonMovesComponent,
    PokemonStatsComponent,
    NavbarComponent,
    AddButtonComponent,
    FooterComponent,
    NameInputComponent,
    LevelContainerComponent,
    BlueImageComponent,
    BottomEditableTextComponent,
    GenericCardComponent,
    BlueSectionComponent,
    RedSectionComponent,
    ColoredBarsComponent,
    LoboCardComponent,
    LeftSectionComponent,
    CharaImageComponent,
    BottomTextBoxesComponent,
    StatBarsComponent,
    RightSectionComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // <-- Include FormsModule in imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
