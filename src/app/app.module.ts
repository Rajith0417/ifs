import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { PostsService } from './services/posts.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TitleFilterPipe } from './pipes/title-filter.pipe';
import { PublishedFilterPipe } from './pipes/published-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TitleFilterPipe,
    PublishedFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
