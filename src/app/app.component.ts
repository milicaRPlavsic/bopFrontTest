import { Component, OnInit } from '@angular/core';
import { NewsArticleService } from './newsArticle.service';
import { Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from './article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @Input() loadedFeature: Article[] = [];

  feature = 'technology';
  technologyArticles: Article[] = [];
  sportsArticles: Article[] = [];
  notEmptyPostTechnology = true;
  notscrollyTechnology = true;
  offsetTechology = 0;
  countTechnology = 25;
  offsetSports = 0;
  countSports = 25;
  notEmptyPostSports = true;
  notscrollySports = true;

  constructor(
    private newsService: NewsArticleService,
    private http: HttpClient,
  ) {}

  ngOnInit() {
    this.loadInit();
    this.loadedFeature = this.technologyArticles;
  }

  loadInit() {
    this.technologyArticles = this.newsService.fetchData('technology');

    this.sportsArticles = this.newsService.fetchData('sports');
  }

  onScroll() {
    if (
      (this.notscrollyTechnology && this.notEmptyPostTechnology) ||
      (this.notEmptyPostSports && this.notscrollySports)
    ) {
      this.notscrollyTechnology = false;
      this.loadNext();
    }
  }

  loadNext() {
    if (this.feature === 'technology') {
      if (this.countTechnology <= 25) {
        this.offsetTechology += 25;
        this.http
          .get<{ data: Article[]; pagination: { count: number } }>(
            `http://api.mediastack.com/v1/news?access_key=46970f216183bd6e1d6d60019bd23454&categories=technology&languages=en&offset=${this.offsetTechology}`
          )
          .subscribe((respData) => {
            for (let art of respData.data) {
              this.technologyArticles.push(art);
            }
            this.countTechnology = respData.pagination.count;
          });
        this.notscrollyTechnology = true;
      } else this.notEmptyPostTechnology = false;
    } else {
      if (this.countSports <= 25) {
        this.offsetSports += 25;
        this.http
          .get<{ data: Article[]; pagination: { count: number } }>(
            `http://api.mediastack.com/v1/news?access_key=46970f216183bd6e1d6d60019bd23454&categories=sports&languages=en&offset=${this.offsetSports}`
          )
          .subscribe((respData) => {
            for (let art of respData.data) {
              this.sportsArticles.push(art);
            }
            this.countSports = respData.pagination.count;
          });
        this.notscrollySports = true;
      } else this.notEmptyPostSports = false;
    }
  }

  onNavigate(feature: string) {
    if (feature === 'technology') {
      this.loadedFeature = this.technologyArticles;
      this.feature = feature;
    } else {
      this.loadedFeature = this.sportsArticles;
      this.feature = feature;
    }
  }

}
