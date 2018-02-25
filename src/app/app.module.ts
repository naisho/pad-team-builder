import { NgModule } from '@angular/core';

// declarations
import { AppComponent, MonsterPickerDialog } from './app.component';
import { TeamViewComponent } from './teamview.component';
import { FilterComponent } from './filter.component';

// imports
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

// material design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule, MatCardModule, MatButtonModule, MatButtonToggleModule, MatIconModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// data-source
import { DataSource } from './data-source/source-manager.service';
import { LocalService } from './data-source/local.service';
import { PADHerderService } from './data-source/pad-herder.service';

// core
import { MonsterListService } from './monster-list.service';
import { AwakeningListService } from './awakening-list.service';

import { Filters } from './shared/filters';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    ReactiveFormsModule,

    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatDialogModule,
    AppRoutingModule
  ],
  exports: [
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatDialogModule
  ],
  entryComponents: [ MonsterPickerDialog ],
  declarations: [ AppComponent, TeamViewComponent, FilterComponent, MonsterPickerDialog ],
  providers: [
    MonsterListService,
    AwakeningListService,
    Filters,
  	
    DataSource,
    LocalService,
    PADHerderService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
