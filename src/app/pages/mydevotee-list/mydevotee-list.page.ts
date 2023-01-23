import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';
import { CrudService } from 'src/app/shared/crud.service';

@Component({
  selector: 'app-mydevotee-list',
  templateUrl: './mydevotee-list.page.html',
  styleUrls: ['./mydevotee-list.page.scss'],
})
export class MydevoteeListPage implements OnInit {

  userdata: any;
  AadhyaList: any;
  groupName: any;
  DevoteeList: any;

  constructor( public crud:CrudService,
    public loader:CommonService,
    public router:Router,
    public activateRouter:ActivatedRoute
    ) {

     
      this.userdata=JSON.parse(localStorage.getItem('user_data')); 
      this.loadData()
     
     }

  ngOnInit() {
  }
  loadData()
  {
    this.crud.postData('my_devoteList',{"user_id": this.userdata['user_id']}).subscribe(
      (res)=>{
        console.log(res);
        if(res['status']=='200')
        {
          this.DevoteeList=res['group'];
          
        }
      },
      (err)=>{
        console.log(err);
      }
    )
  }
}
