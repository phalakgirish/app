import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';
import { CrudService } from 'src/app/shared/crud.service';

@Component({
  selector: 'app-upasana-list',
  templateUrl: './upasana-list.page.html',
  styleUrls: ['./upasana-list.page.scss'],
})
export class UpasanaListPage implements OnInit {
  upsana: any;

  constructor( public crud:CrudService,
    public loader:CommonService,
    public router:Router,
    public activateRouter:ActivatedRoute) { 
      this.loadData()
    }

  ngOnInit() {
    this.loadData()
  }

  loadData()
  {
    this.crud.getData("get_upcoming_upsanas_list").subscribe((res)=>{console.log(res)});

    this.crud.getData('get_upcoming_upsanas_list').subscribe(
      (res)=>{
        console.log(res);
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
