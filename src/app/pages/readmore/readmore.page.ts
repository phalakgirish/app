import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';
import { CrudService } from 'src/app/shared/crud.service';
import { environment} from '../../../environments/environment';
@Component({
  selector: 'app-readmore',
  templateUrl: './readmore.page.html',
  styleUrls: ['./readmore.page.scss'],
})
export class ReadmorePage implements OnInit {
  article: any;
  siteurl=environment.siteurl;
  constructor( public crud:CrudService,
    public loader:CommonService,
    public router:Router,
    public activateRouter:ActivatedRoute) { 
      this.loadData()
    }

  ngOnInit() {
  }
  loadData()
  {
    this.crud.postData('get_single_bulletin',{"bulletin_id":this.activateRouter.snapshot.params.id}).subscribe(
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
