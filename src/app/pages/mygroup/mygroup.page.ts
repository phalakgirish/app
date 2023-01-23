import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';
import { CrudService } from 'src/app/shared/crud.service';

@Component({
  selector: 'app-mygroup',
  templateUrl: './mygroup.page.html',
  styleUrls: ['./mygroup.page.scss'],
})
export class MygroupPage implements OnInit {
  userdata: any;
  username: string;
  GroupList: any;

  constructor( public crud:CrudService,
    public loader:CommonService,
    public router:Router,) {    
    this.userdata=JSON.parse(localStorage.getItem('user_data')); 
    this.username=this.userdata['first_name']+" "+this.userdata['last_name'];
    this.crud.postData('getgroup_list',{"user_id":this.userdata['user_id'],"user_role":this.userdata['user_role']}).subscribe(
      (res)=>{
        console.log(res);
        if(res['status']=='200')
        {
          this.GroupList=res['group'];
        }
      },
      (err)=>{
        console.log(err);
      }
    )}

  ngOnInit() {
  }

}
