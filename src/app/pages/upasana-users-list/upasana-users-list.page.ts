import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';
import { CrudService } from 'src/app/shared/crud.service';

@Component({
  selector: 'app-upasana-users-list',
  templateUrl: './upasana-users-list.page.html',
  styleUrls: ['./upasana-users-list.page.scss'],
})
export class UpasanaUsersListPage implements OnInit {
  upsana: any;
  user: any;
  userdata: any;

  constructor( public crud:CrudService,
    public loader:CommonService,
    public router:Router,
    public activateRouter:ActivatedRoute) { 
      this.loadData()
    }

  ngOnInit() {
  }
  ionViewDidEnter()
  {
    this.loadData()
  }
  loadData()
  {
    this.userdata=JSON.parse(sessionStorage.getItem('userdata'))
    //console.log(this.userdata[0]['reg_phone_number']);
    this.crud.postData('upsanas_user',{"upasanaId":localStorage.getItem('upasanaId'),"reg_phone_number":this.userdata[0]['reg_phone_number']}).subscribe(
      (res)=>{
       
        if(res['status']=='200')
        {
          this.user=res['user'];
          //console.log(res['user'][0]['upasana_name']);
          this.upsana=res['user'][0]['upasana_name'];
        }
        if(res['status']=='401')
        {
          let msg={
            message: res['message'],
            duration: 3000,
          }
          this.loader.presentToast(msg)
          //this.router.navigate(['/upsana-registration'])
        }
      },
      (err)=>{
        console.log(err);
      }
    )
  }

}
