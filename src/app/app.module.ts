import { NgModule } from '@angular/core';

// imports
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule }    from '@angular/http';

// declarations
import { AppComponent } from './app.component';

import { PADHerderService } from './pad-herder.service';
import { MonsterListService } from './monster-list.service';
import { Filters } from './shared/filters';
import { SortOption } from './shared/sortOption';


@NgModule({
  imports: [ BrowserModule, HttpModule, JsonpModule ],
  declarations: [ AppComponent ],
  providers: [
  	PADHerderService,
  	MonsterListService,
  	Filters,
  	SortOption
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
