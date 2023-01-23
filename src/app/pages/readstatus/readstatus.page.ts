import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';
import { CrudService } from 'src/app/shared/crud.service';

@Component({
  selector: 'app-readstatus',
  templateUrl: './readstatus.page.html',
  styleUrls: ['./readstatus.page.scss'],
})
export class ReadstatusPage implements OnInit {
  userdata: any;
  AadhyaList: any;
  groupName: any;
  groupId: any;

  constructor( public crud:CrudService,
    public loader:CommonService,
    public router:Router,
    public activateRouter:ActivatedRoute
    ) {

     // console.log(this.activateRouter.snapshot.params.id);
      this.userdata=JSON.parse(localStorage.getItem('user_data'));
      this.loadData();
      this.groupId=this.activateRouter.snapshot.params.id;

     }

  ngOnInit() {
  }
  loadData()
  {
    this.crud.postData('getaadhya_list',{"group_id":this.activateRouter.snapshot.params.id}).subscribe(
      (res)=>{
        // console.log(res);
        if(res['status']=='200')
        {
          this.AadhyaList=res['group_aadhya'];
          this.groupName=res['group_aadhya'][0]['Mgrp_name']
        }
      },
      (err)=>{
        console.log(err);
      }
    )
  }
  markAsRead(val)
  {
    console.log(val);
    this.crud.postData("adhyay_status_update",{"track":"1","adhyay_id":val}).subscribe((res)=>{
      console.log(res)
      this.loadData()
    },(err)=>{
      console.log();
    })
  }
  markAsUnRead(val)
  {
    this.crud.postData("adhyay_status_update",{"track":"0","adhyay_id":val}).subscribe((res)=>{
      console.log(res)
      this.loadData()
    },(err)=>{
      console.log();
    })
  }
}
