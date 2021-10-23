import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Article } from '../article.model';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  @Input() articles: Article[]=[];
  searchText: string=''

  constructor () {
  }

  ngOnInit(): void {
  }

  

  
 

}
