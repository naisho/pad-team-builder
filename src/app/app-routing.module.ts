import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TeamViewComponent } from './teamview.component';
import { FilterComponent } from './filter.component';

const routes: Routes = [
	{ path: '', redirectTo: '/filter', pathMatch: 'full'},
	{ path: 'jennfer', component: TeamViewComponent },
	{ path: 'filter', component: FilterComponent }
	
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }