import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';
import { CrudService } from 'src/app/shared/crud.service';
@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {
  article: any;
  userdata: any;
  pagetitle='Article'
  constructor( public crud:CrudService,
    public loader:CommonService,
    public router:Router,
    public activateRouter:ActivatedRoute) {
      this.userdata=JSON.parse(localStorage.getItem('user_data'));
      this.loadData()
    }

  ngOnInit() {
  }
  loadData()
  {
    this.crud.postData('get_single_article',{"article_id":this.activateRouter.snapshot.params.id}).subscribe(
      (res)=>{
        console.log(res);
        if(res['status']=='200')
        {
          this.article=res['article'];
        }
      },
      (err)=>{
        console.log(err);
      }
    )
  }
}
