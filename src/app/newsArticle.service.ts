import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from './article.model';

@Injectable ({providedIn: 'root'})
export class NewsArticleService {

    constructor(private http: HttpClient) {}

    fetchData(type: string) {
      const articales: Article[]=[]
      
      const param=type==='technology'? 'technology' : 'sports'
        this.http
          .get<{ data: Article[]; pagination: {total : number} }>(
            `http://api.mediastack.com/v1/news?access_key=46970f216183bd6e1d6d60019bd23454&categories=${param}&languages=en`
          )
          .subscribe((respData) => {
            for(let art of respData.data) {
             articales.push(art);
            }
            
          });
         
         return articales
      }
}