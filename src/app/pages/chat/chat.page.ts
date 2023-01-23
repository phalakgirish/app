import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { CommonService } from 'src/app/shared/common.service';
import { CrudService } from 'src/app/shared/crud.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  userdata: any;
  AadhyaList: any;
  groupName: any;
  groupId: any;
  textMsg;
  oid="1"
  uid="2"
  @ViewChild(IonContent, {static: true}) content: IonContent;
  constructor(public crud:CrudService,
    public loader:CommonService,
    public router:Router,
    public activateRouter:ActivatedRoute) {
      console.log(this.activateRouter.snapshot.params.id);
      this.userdata=JSON.parse(localStorage.getItem('user_data'));
      this.loadData()
      this.groupId=this.activateRouter.snapshot.params.id;
     }

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.content.scrollToBottom(500);

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
  send()
  {

  }
}
