import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';
import { CrudService } from 'src/app/shared/crud.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  userdata: any;
  username: any;
  GroupList: any;
  currentDate = new Date();
  role: any;
  AadhyaList: any;
  groupName: any;
  groupId: any;
  constructor(
    public crud:CrudService,
    public loader:CommonService,
    public router:Router,
    ){
        this.loader.present('Loading');
          this.userdata=JSON.parse(localStorage.getItem('user_data'));
          this.role=this.userdata['user_role']
          console.log(this.role);
         this.username=this.userdata['first_name']+" "+this.userdata['last_name'];
         if( this.role !=='5')
         {
          this.crud.postData('getgroup_list',{"user_id":this.userdata['user_id'],"user_role":this.userdata['user_role']}).subscribe(
            (res)=>{
              this.loader.dismiss();
              console.log(res);
              if(res['status']=='200')
              {
                this.GroupList=res['group'];
              }
            },
            (err)=>{
              this.loader.dismiss();
              console.log(err);
            }
          )
         }

         if( this.role =='5')
         {
          this.loader.dismiss();
          this.loadData();
         }

    }

  ngOnInit() {

  }
  filterEventData(ev:any)
  {
    this.loader.present('Please Wait...');
    this.crud.postData('getgroup_list',{"user_id":this.userdata['user_id'],"user_role":this.userdata['user_role']}).subscribe((res)=>{
     // console.log(res['group']);
     this.loader.dismiss();
      this.GroupList=res['group'];
      const val= ev.target.value;
      if(val && val.trim() !='')
      {
         this.GroupList = this.GroupList.filter((item)=>{
          //alert(item.patient_name.toLowerCase().indexOf(val.toLowerCase())>-1);
          return ((item.Mgrp_name.toLowerCase().indexOf(val.toLowerCase())>-1));
        })
      }
    },
    (err)=>{
      console.log(err);
    });



  }
  loadData()
  {
    this.loader.present('Please Wait...');
    this.crud.postData('my_aadhya',{"user_id":this.userdata['user_id']}).subscribe(
      (res)=>{
        console.log(res)
       this.loader.dismiss();
        if(res['status']=='200')
        {
          this.AadhyaList=res['aadhya'];
          this.groupName=res['aadhya'][0]['Mgrp_name'];
        this.groupId=res['aadhya'][0]['Mgrp_id'];
        }
      },
      (err)=>{
        this.loader.dismiss();
        console.log(err);
      }
    )
  }
  markAsRead(val)
  {

    this.crud.postData("adhyay_status_update",{"track":"1","adhyay_id":val}).subscribe((res)=>{

      this.loadData()
    },(err)=>{
      console.log();
    })
  }
  markAsUnRead(val)
  {
    this.crud.postData("adhyay_status_update",{"track":"0","adhyay_id":val}).subscribe((res)=>{

      this.loadData()
    },(err)=>{

    })
  }
}
