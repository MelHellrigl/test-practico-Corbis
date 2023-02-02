import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidepanelComponent } from './components/sidepanel/sidepanel.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidebarComponent,
    SidepanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
