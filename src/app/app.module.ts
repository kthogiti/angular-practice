import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RootAppComponent } from './root-app/root-app.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';

@NgModule({
  declarations: [RootAppComponent, EventsListComponent, EventThumbnailComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [RootAppComponent],
})
export class AppModule {}
