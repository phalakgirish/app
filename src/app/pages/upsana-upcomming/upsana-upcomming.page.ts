import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';
import { CrudService } from 'src/app/shared/crud.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-upsana-upcomming',
  templateUrl: './upsana-upcomming.page.html',
  styleUrls: ['./upsana-upcomming.page.scss'],
})
export class UpsanaUpcommingPage implements OnInit {
  upsana: any;
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
    console.log(this.activateRouter.snapshot.params.id);
    this.crud.postData('get_upcoming_upsanas',{"upansanaId":this.activateRouter.snapshot.params.id}).subscribe(
      (res)=>{
        // console.log(res);
        if(res['status']=='200')
        {
          this.upsana=res['upsanas'];
        }
      },
      (err)=>{
        console.log(err);
      }
    )
  }
}
