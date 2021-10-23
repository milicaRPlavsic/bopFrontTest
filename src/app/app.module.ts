import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AppComponent } from './app.component';
import { NewsArticleService } from './newsArticle.service';
import { HeaderComponent } from './header/header.component';
import { ArticlesComponent } from './articles/articles.component';
import {NgxSpinnerModule} from 'ngx-spinner'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SearchFilterPipe } from './search-filter.pipe';
import { FormsModule } from '@angular/forms';
import { SortDirective } from './articles/sort.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArticlesComponent,
    SearchFilterPipe,
    SortDirective
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    InfiniteScrollModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
