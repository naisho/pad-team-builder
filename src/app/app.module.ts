import { NgModule } from '@angular/core';

// imports
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule }    from '@angular/http';

// declarations
import { AppComponent } from './app.component';

// data-source
import { DataSource } from './data-source/source-manager.service';
import { LocalService } from './data-source/local.service';
import { PADHerderService } from './data-source/pad-herder.service';

// core
import { MonsterListService } from './monster-list.service';
import { AwakeningListService } from './awakening-list.service';

import { Filters } from './shared/filters';
import { SortOption } from './shared/sortOption';
import { DefaultService } from './default.service';


@NgModule({
  imports: [ BrowserModule, HttpModule, JsonpModule ],
  declarations: [ AppComponent ],
  providers: [
    MonsterListService,
    AwakeningListService,
    Filters,
    SortOption,
    DefaultService,
  	
    DataSource,
    LocalService,
    PADHerderService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
