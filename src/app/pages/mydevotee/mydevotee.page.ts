import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';
import { CrudService } from 'src/app/shared/crud.service';

@Component({
  selector: 'app-mydevotee',
  templateUrl: './mydevotee.page.html',
  styleUrls: ['./mydevotee.page.scss'],
})
export class MydevoteePage implements OnInit {
  userdata: any;
  AadhyaList: any;
  groupName: any;

  constructor( public crud:CrudService,
    public loader:CommonService,
    public router:Router,
    public activateRouter:ActivatedRoute
    ) {

      console.log(this.activateRouter.snapshot.params.id);
      this.userdata=JSON.parse(localStorage.getItem('user_data')); 
      this.loadData()
     
     }
  ngOnInit(): void {
   
  }
  loadData()
  {
    this.crud.postData('getaadhya_list',{"group_id":this.activateRouter.snapshot.params.id}).subscribe(
      (res)=>{
        console.log(res);
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
}
