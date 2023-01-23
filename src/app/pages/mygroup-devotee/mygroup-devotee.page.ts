import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';
import { CrudService } from 'src/app/shared/crud.service';

@Component({
  selector: 'app-mygroup-devotee',
  templateUrl: './mygroup-devotee.page.html',
  styleUrls: ['./mygroup-devotee.page.scss'],
})
export class MygroupDevoteePage implements OnInit {
  userdata: any;
  AadhyaList: any;
  groupName: any;
  groupId: any;

  constructor(public crud:CrudService,
    public loader:CommonService,
    public router:Router,
    public activateRouter:ActivatedRoute) {
    this.userdata=JSON.parse(localStorage.getItem('user_data'));
    console.log(this.userdata['user_id']);
    this.loadData();
   }

  ngOnInit() {
  }
  loadData()
  {
  //   this.crud.postData('getadmin_adhya_list',{
  //     "user_id":"167"
  // }).subscribe(
  //     (res)=>{
  //       console.log(res);
  //       if(res['status']=='200')
  //       {
  //         this.AadhyaList=res['group_aadhya'];
  //         this.groupName=res['group_aadhya'][0]['Mgrp_name']
  //       }
  //     },
  //     (err)=>{
  //       console.log(err);
  //     }
  //   )
  this.crud.postData('getadmin_adhya_list',{"user_id":this.userdata['user_id']}).subscribe(
    (res)=>{
      console.log(res);
      if(res['status']=='200')
      {
        this.AadhyaList=res['group_aadhya'];
        this.groupName=res['group_aadhya'][0]['Mgrp_name'];
        this.groupId=res['group_aadhya'][0]['Mgrp_id'];
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
