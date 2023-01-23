import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/shared/crud.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.page.html',
  styleUrls: ['./article-list.page.scss'],
})
export class ArticleListPage implements OnInit {
  article: any;
  pagetitle='Article'
  userdata: any;
  constructor(public crud:CrudService) {
    this.userdata=JSON.parse(localStorage.getItem('user_data'));
   }

  ngOnInit() {
    this.crud.getData('get_article').subscribe((res)=>{
      // console.log(res);
       this.article=res['article'];
     },
       (err)=>{
         console.log(err)
       }
     )
  }

}
