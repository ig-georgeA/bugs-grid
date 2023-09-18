import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { GridComponent } from './grid/grid.component';
import { DetailsViewComponent } from './details-view/details-view.component';

export const routes: Routes = [
  { path: 'error', component: UncaughtErrorComponent },
  { path: '', redirectTo: 'grid', pathMatch: 'full' }, { path: 'grid', component: GridComponent, data: { text: 'Grid' } },
  { path: 'details-view', component: DetailsViewComponent, data: { text: 'Details view' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
