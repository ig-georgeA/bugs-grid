import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { IgxInputGroupModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxGridModule, IgxNavbarModule } from '@infragistics/igniteui-angular';
import { FormsModule } from '@angular/forms';
import { DetailsViewComponent } from './details-view/details-view.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    DetailsViewComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxInputGroupModule,
    IgxIconModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxGridModule,
    FormsModule,
    IgxNavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
